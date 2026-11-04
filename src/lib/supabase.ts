import { createClient } from '@supabase/supabase-js';

// User provided Supabase project credentials
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://qvdzdprxjxeycelnnhuz.supabase.co';

export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_BW_O5hW6hjj7mKQu4wKHfg_26q2CrrI';

// Initialize the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface LeadSubmission {
  name: string;
  email?: string;
  phone: string;
  business_type?: string;
  budget?: string;
  message?: string;
  source: 'contact_form' | 'free_demo' | 'quick_lead' | 'calculator';
  projected_ad_spend?: number;
  projected_revenue?: number;
  website_url?: string;
}

/**
 * Saves a lead or inquiry to Supabase.
 * Tries the 'leads' table first, then 'inquiries' as fallback.
 * If the table does not exist or has RLS, it safely catches without breaking WhatsApp/direct flow.
 */
export async function saveLeadToSupabase(lead: LeadSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      name: lead.name,
      email: lead.email || null,
      phone: lead.phone,
      business_type: lead.business_type || null,
      budget: lead.budget || null,
      message: lead.message || null,
      source: lead.source,
      projected_ad_spend: lead.projected_ad_spend || null,
      projected_revenue: lead.projected_revenue || null,
      website_url: lead.website_url || null,
      created_at: new Date().toISOString(),
    };

    // Attempt 1: primary table 'leads'
    const { error: leadsErr } = await supabase.from('leads').insert([payload]);

    if (!leadsErr) {
      return { success: true };
    }

    // Attempt 2: fallback table 'inquiries'
    const { error: inqErr } = await supabase.from('inquiries').insert([payload]);

    if (!inqErr) {
      return { success: true };
    }

    console.warn('Supabase lead insert notice:', leadsErr.message || inqErr?.message);
    return { success: false, error: leadsErr.message };
  } catch (err: any) {
    console.warn('Supabase lead submission error caught:', err?.message || err);
    return { success: false, error: err?.message || 'Network error' };
  }
}
