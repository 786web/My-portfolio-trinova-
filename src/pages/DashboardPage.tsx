import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { BriefcaseBusiness, Users, Inbox, Plus, RefreshCw } from 'lucide-react';

type Props = { userId: string; role: 'admin' | 'client' };
type Project = { id: string; title: string; description: string | null; status: string; client_id: string; created_at: string };
type Lead = { id: string; name: string; email: string | null; phone: string; message: string | null; created_at: string };

export const DashboardPage: React.FC<Props> = ({ userId, role }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [clients, setClients] = useState<{id:string;email:string|null;full_name:string|null}[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data: projectData } = await supabase.from('client_projects').select('*').order('created_at', { ascending: false });
    setProjects((projectData || []) as Project[]);
    if (role === 'admin') {
      const [{ data: leadData }, { data: clientData }] = await Promise.all([
        supabase.from('leads').select('id,name,email,phone,message,created_at').order('created_at', { ascending: false }).limit(100),
        supabase.from('profiles').select('id,email,full_name').eq('role','client').order('created_at', { ascending: false })
      ]);
      setLeads((leadData || []) as Lead[]);
      setClients((clientData || []) as typeof clients);
    }
    setLoading(false);
  };
  useEffect(() => { void load(); }, [userId, role]);

  const createProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotice('');
    const client = clients.find(c => c.email?.toLowerCase() === clientEmail.trim().toLowerCase());
    if (!client) { setNotice('Client email not found. Ask the client to create an account first.'); return; }
    const { error } = await supabase.from('client_projects').insert({ client_id: client.id, title: title.trim(), description: description.trim() || null });
    if (error) { setNotice(error.message); return; }
    setTitle(''); setDescription(''); setClientEmail('');
    setNotice('Project created and assigned to client.');
    await load();
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('client_projects').update({ status, updated_at: new Date().toISOString() }).eq('id', id);
    setNotice(error ? error.message : 'Project status updated.');
    await load();
  };

  return <section className="min-h-[70vh] bg-[#0A192F] text-white py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div><p className="text-[#00F5FF] text-xs font-mono tracking-widest uppercase">{role === 'admin' ? 'TRINOVA CONTROL CENTER' : 'CLIENT PORTAL'}</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">{role === 'admin' ? 'Admin Dashboard' : 'My Projects'}</h1>
          <p className="text-slate-400 mt-2">{role === 'admin' ? 'Manage client projects, inquiries and delivery status.' : 'Track your project progress and updates.'}</p></div>
        <button onClick={() => void load()} className="px-4 py-2 rounded-lg border border-[#00F5FF]/40 text-[#00F5FF] flex items-center gap-2"><RefreshCw size={16}/> Refresh</button>
      </div>
      {notice && <p className="mb-5 p-3 rounded-lg bg-[#112240] border border-[#00F5FF]/30 text-sm">{notice}</p>}
      {role === 'admin' && <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-[#112240] border border-slate-700"><Inbox className="text-[#00F5FF] mb-3"/><p className="text-2xl font-bold">{leads.length}</p><p className="text-slate-400 text-sm">Recent inquiries</p></div>
        <div className="p-5 rounded-2xl bg-[#112240] border border-slate-700"><Users className="text-[#00F5FF] mb-3"/><p className="text-2xl font-bold">{clients.length}</p><p className="text-slate-400 text-sm">Client accounts</p></div>
        <div className="p-5 rounded-2xl bg-[#112240] border border-slate-700"><BriefcaseBusiness className="text-[#00F5FF] mb-3"/><p className="text-2xl font-bold">{projects.length}</p><p className="text-slate-400 text-sm">Projects</p></div>
      </div>}
      {role === 'admin' && <form onSubmit={createProject} className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#112240] border border-[#00F5FF]/25">
        <h2 className="font-bold text-xl mb-4 flex items-center gap-2"><Plus size={18}/> Assign a project</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Project title" className="rounded-lg bg-[#071326] border border-slate-700 px-3 py-3 text-sm"/>
          <input required type="email" value={clientEmail} onChange={e=>setClientEmail(e.target.value)} placeholder="Client account email" className="rounded-lg bg-[#071326] border border-slate-700 px-3 py-3 text-sm"/>
          <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Short description" className="rounded-lg bg-[#071326] border border-slate-700 px-3 py-3 text-sm"/>
        </div>
        <button className="mt-4 px-5 py-2.5 rounded-lg bg-[#00F5FF] text-[#071326] font-bold text-sm">Create project</button>
      </form>}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-[#112240]/70 border border-slate-700">
          <h2 className="text-xl font-bold mb-4"> {role === 'admin' ? 'All client projects' : 'Your project updates'}</h2>
          {loading ? <p className="text-slate-400">Loading…</p> : projects.length === 0 ? <p className="text-slate-400 text-sm">No projects yet.</p> : <div className="space-y-3">{projects.map(p=><article key={p.id} className="p-4 rounded-xl bg-[#071326] border border-slate-800">
            <div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold">{p.title}</h3><span className="text-xs text-[#00F5FF] uppercase">{p.status.replace('_',' ')}</span></div>
            {p.description && <p className="text-sm text-slate-400 mt-2">{p.description}</p>}
            {role === 'admin' && <select value={p.status} onChange={e=>void updateStatus(p.id,e.target.value)} className="mt-3 bg-[#112240] border border-slate-700 rounded-lg p-2 text-xs"><option value="pending">Pending</option><option value="in_progress">In progress</option><option value="review">Review</option><option value="completed">Completed</option></select>}
          </article>)}</div>}
        </div>
        {role === 'admin' && <div className="p-5 rounded-2xl bg-[#112240]/70 border border-slate-700">
          <h2 className="text-xl font-bold mb-4">Latest inquiries</h2>
          {leads.length === 0 ? <p className="text-slate-400 text-sm">No inquiries found.</p> : <div className="space-y-3 max-h-[560px] overflow-auto">{leads.map(l=><article key={l.id} className="p-4 rounded-xl bg-[#071326] border border-slate-800">
            <div className="font-semibold">{l.name}</div><p className="text-xs text-slate-400 mt-1">{l.email || 'No email'} · {l.phone}</p>{l.message && <p className="text-sm text-slate-300 mt-2">{l.message}</p>}
          </article>)}</div>}
        </div>}
      </div>
    </div>
  </section>;
};
