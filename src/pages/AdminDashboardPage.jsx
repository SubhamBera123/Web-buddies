import React, { useState } from 'react';
import { 
  Inbox, FolderKanban, DollarSign, Tag, MessageSquare, Settings, 
  Search, Trash2, Edit, Plus, Check, X, Eye, Phone, Mail, 
  ExternalLink, Clock, TrendingUp, AlertCircle, ShieldCheck, Database
} from 'lucide-react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { useData } from '../context/DataContext';
import { formatINR, formatDate } from '../utils/formatters';

export const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { 
    enquiries, 
    projects, 
    services, 
    pricingPackages, 
    settings, 
    faqs, 
    testimonials, 
    updateEnquiryStatus, 
    deleteEnquiry, 
    updatePackagePrice,
    saveProject,
    deleteProject,
    updateSettings,
    isSupabaseConnected
  } = useData();

  // Enquiry state
  const [enquirySearch, setEnquirySearch] = useState('');
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Pricing editing state
  const [editingPriceId, setEditingPriceId] = useState(null);
  const [editingPriceVal, setEditingPriceVal] = useState('');

  // Settings editing state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // New/Edit Project Modal state
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Metrics
  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter(e => e.status === 'New').length;
  const inDiscussionEnquiries = enquiries.filter(e => e.status === 'In Discussion').length;
  const totalProjects = projects.length;

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter(e => {
    const matchesFilter = enquiryStatusFilter === 'all' || e.status === enquiryStatusFilter;
    const matchesSearch = 
      (e.fullName || '').toLowerCase().includes(enquirySearch.toLowerCase()) ||
      (e.email || '').toLowerCase().includes(enquirySearch.toLowerCase()) ||
      (e.businessName || '').toLowerCase().includes(enquirySearch.toLowerCase()) ||
      (e.serviceRequired || '').toLowerCase().includes(enquirySearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handlePriceSave = async (packageId) => {
    if (editingPriceVal && !isNaN(editingPriceVal)) {
      await updatePackagePrice(packageId, Number(editingPriceVal));
    }
    setEditingPriceId(null);
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    await updateSettings(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Agency Dashboard Overview</h1>
            <p className="text-xs text-slate-400 mt-1">
              Live metrics across lead generation, active portfolio projects, and service pricing.
            </p>
          </div>

          {/* Metric KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Total Leads</span>
                <Inbox className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{totalEnquiries}</div>
              <span className="text-[11px] text-slate-400 mt-1 block">Submissions received</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">New / Pending</span>
                <Clock className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400 font-mono">{newEnquiries}</div>
              <span className="text-[11px] text-amber-400/80 mt-1 block">Awaiting response</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">In Discussion</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-emerald-400 font-mono">{inDiscussionEnquiries}</div>
              <span className="text-[11px] text-slate-400 mt-1 block">Active negotiations</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Portfolio Demos</span>
                <FolderKanban className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{totalProjects}</div>
              <span className="text-[11px] text-slate-400 mt-1 block">9 categories published</span>
            </div>
          </div>

          {/* Recent Inquiries preview */}
          <div className="glass-panel rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Recent Client Inquiries</h3>
                <p className="text-xs text-slate-400">Latest prospect submissions needing attention.</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setActiveTab('enquiries')}>
                View All Enquiries ({totalEnquiries})
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Lead Name</th>
                    <th className="py-2.5 px-3">Service Required</th>
                    <th className="py-2.5 px-3">Budget</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {enquiries.slice(0, 5).map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-900/40">
                      <td className="py-3 px-3 text-slate-400 font-mono">{formatDate(enq.createdAt)}</td>
                      <td className="py-3 px-3 font-semibold text-white">
                        {enq.fullName}
                        {enq.businessName && (
                          <span className="block text-[11px] font-normal text-slate-400">{enq.businessName}</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-slate-300">{enq.serviceRequired}</td>
                      <td className="py-3 px-3 font-mono text-blue-400">{enq.estimatedBudget}</td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                          enq.status === 'New' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                          enq.status === 'Contacted' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          enq.status === 'In Discussion' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {enq.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedEnquiry(enq);
                            setActiveTab('enquiries');
                          }}
                          className="text-xs text-blue-400 hover:text-blue-300 font-medium"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CLIENT ENQUIRIES */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Client Project Enquiries</h1>
              <p className="text-xs text-slate-400 mt-1">
                Manage, review, and update statuses of client leads submitted through the website.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              {['all', 'New', 'Contacted', 'In Discussion', 'Closed'].map((st) => (
                <button
                  key={st}
                  onClick={() => setEnquiryStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    enquiryStatusFilter === st
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {st === 'all' ? 'All Leads' : st}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={enquirySearch}
              onChange={(e) => setEnquirySearch(e.target.value)}
              placeholder="Search by client name, email, company, service..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Enquiries Table */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-mono">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Requested Service</th>
                    <th className="py-3 px-4">Budget & Deadline</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-8 text-center text-slate-500">
                        No client enquiries found matching your filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-slate-900/40">
                        <td className="py-3.5 px-4 font-mono text-slate-400 whitespace-nowrap">
                          {formatDate(enq.createdAt)}
                        </td>
                        <td className="py-3.5 px-4">
                          <strong className="text-white block font-semibold">{enq.fullName}</strong>
                          <span className="text-[11px] text-slate-400 block">{enq.email}</span>
                          {enq.phone && (
                            <span className="text-[10px] text-slate-500 font-mono block">{enq.phone}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-slate-200 font-medium block">{enq.serviceRequired}</span>
                          {enq.businessName && (
                            <span className="text-[10px] text-slate-400 block">{enq.businessName}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-mono">
                          <span className="text-blue-400 font-semibold block">{enq.estimatedBudget}</span>
                          <span className="text-[10px] text-slate-400 block">{enq.projectDeadline}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={enq.status}
                            onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                            className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Discussion">In Discussion</option>
                            <option value="Closed">Closed</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-2 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedEnquiry(enq)}
                            className="p-1.5 rounded bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                            title="Inspect Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this inquiry record?')) {
                                deleteEnquiry(enq.id);
                              }
                            }}
                            className="p-1.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enquiry Details Modal */}
          {selectedEnquiry && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
              <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase">Lead Details ID: {selectedEnquiry.id}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{selectedEnquiry.fullName}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Email:</span>
                    <a href={`mailto:${selectedEnquiry.email}`} className="text-blue-400 hover:underline font-mono">
                      {selectedEnquiry.email}
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Phone / WhatsApp:</span>
                    {selectedEnquiry.phone ? (
                      <a href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">
                        {selectedEnquiry.phone}
                      </a>
                    ) : (
                      <span className="text-slate-500">Not provided</span>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Company / Brand:</span>
                    <span className="text-white font-medium">{selectedEnquiry.businessName || 'Independent Client'}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Communication Preference:</span>
                    <span className="text-white font-medium">{selectedEnquiry.communicationMethod || 'Email'}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Service Required:</span>
                    <span className="text-blue-300 font-bold">{selectedEnquiry.serviceRequired}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Budget Range:</span>
                    <span className="text-emerald-400 font-bold font-mono">{selectedEnquiry.estimatedBudget}</span>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase font-mono">Client Brief / Requirements:</span>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                    {selectedEnquiry.projectDescription}
                  </div>
                </div>

                {selectedEnquiry.referenceUrl && (
                  <div className="text-xs">
                    <span className="text-slate-400 block mb-1">Client Reference URL:</span>
                    <a href={selectedEnquiry.referenceUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline flex items-center gap-1 font-mono">
                      <span>{selectedEnquiry.referenceUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Update Status:</span>
                    <select
                      value={selectedEnquiry.status}
                      onChange={(e) => {
                        updateEnquiryStatus(selectedEnquiry.id, e.target.value);
                        setSelectedEnquiry({ ...selectedEnquiry, status: e.target.value });
                      }}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Discussion">In Discussion</option>
                      <option value="Closed">Closed</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>

                  <Button variant="secondary" size="sm" onClick={() => setSelectedEnquiry(null)}>
                    Close Details
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PORTFOLIO PROJECTS */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Portfolio Demonstration Projects</h1>
              <p className="text-xs text-slate-400 mt-1">
                Manage all 9 business category demo applications, live demo links, and video URLs.
              </p>
            </div>
            <Button 
              variant="primary" 
              size="sm" 
              icon={Plus}
              onClick={() => {
                setEditingProject({
                  title: '',
                  category: 'Corporate Business',
                  categoryKey: 'corporate',
                  shortDescription: '',
                  overview: '',
                  techStack: ['React', 'Tailwind CSS'],
                  thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
                  desktopImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
                  demoVideoUrl: '',
                  hasWorkingLiveDemo: true,
                  demoType: 'corporate',
                  featured: false
                });
                setProjectModalOpen(true);
              }}
            >
              Add New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="aspect-video relative bg-slate-950">
                    <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge variant="blue" size="sm">{proj.category}</Badge>
                    </div>
                    {proj.featured && (
                      <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.shortDescription}</p>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Stack: {proj.techStack?.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        saveProject({ ...proj, featured: !proj.featured });
                      }}
                      className={`text-[10px] px-2 py-1 rounded border font-mono ${
                        proj.featured 
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {proj.featured ? 'Featured' : 'Make Featured'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingProject(proj);
                        setProjectModalOpen(true);
                      }}
                      className="p-1.5 rounded bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                      title="Edit Project"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete ${proj.title}?`)) {
                          deleteProject(proj.id);
                        }
                      }}
                      className="p-1.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Edit / Add Modal */}
          {projectModalOpen && editingProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
              <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-slate-700 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">
                    {editingProject.id ? 'Edit Portfolio Project' : 'Create New Portfolio Project'}
                  </h3>
                  <button onClick={() => setProjectModalOpen(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-300 block mb-1">Project Title</label>
                    <input
                      type="text"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Business Category</label>
                    <input
                      type="text"
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      value={editingProject.shortDescription}
                      onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Thumbnail Image URL</label>
                    <input
                      type="url"
                      value={editingProject.thumbnail}
                      onChange={(e) => setEditingProject({ ...editingProject, thumbnail: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Demo Video Embed URL (e.g. YouTube Embed)</label>
                    <input
                      type="url"
                      placeholder="https://www.youtube.com/embed/..."
                      value={editingProject.demoVideoUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, demoVideoUrl: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                  <Button variant="secondary" size="sm" onClick={() => setProjectModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      const slug = editingProject.slug || editingProject.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
                      saveProject({
                        ...editingProject,
                        slug
                      });
                      setProjectModalOpen(false);
                    }}
                  >
                    Save Project
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: PRICING PACKAGES */}
      {activeTab === 'pricing' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Pricing Packages Management</h1>
            <p className="text-xs text-slate-400 mt-1">
              Adjust starting prices in real time. Changes immediately reflect across public pricing and homepage cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingPackages.map((pkg) => (
              <div key={pkg.id} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold">{pkg.code}</span>
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{pkg.tagline}</p>
                  </div>
                  {pkg.popular && (
                    <Badge variant="blue" size="sm">Most Popular</Badge>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Current Starting Price</span>
                    {editingPriceId === pkg.id ? (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-mono text-slate-400">₹</span>
                        <input
                          type="number"
                          value={editingPriceVal}
                          onChange={(e) => setEditingPriceVal(e.target.value)}
                          className="w-32 bg-slate-900 border border-blue-500 rounded px-2 py-1 text-sm text-white font-mono"
                          autoFocus
                        />
                        <button
                          onClick={() => handlePriceSave(pkg.id)}
                          className="p-1 rounded bg-emerald-600 text-white"
                          title="Save"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingPriceId(null)}
                          className="p-1 rounded bg-slate-800 text-slate-400"
                          title="Cancel"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-2xl font-black text-white font-mono mt-1">
                        {pkg.priceDisplay}
                      </div>
                    )}
                  </div>

                  {editingPriceId !== pkg.id && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setEditingPriceId(pkg.id);
                        setEditingPriceVal(pkg.price);
                      }}
                    >
                      Update Price
                    </Button>
                  )}
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <span className="font-mono text-[11px] text-slate-400 uppercase block mb-1">Deliverables Count:</span>
                  <div className="text-slate-300">{pkg.features?.length} included specifications</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SERVICES */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Services Catalogue</h1>
            <p className="text-xs text-slate-400 mt-1">
              Active web studio services available for client quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((srv) => (
              <div key={srv.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white truncate">{srv.name}</h4>
                  <span className="text-xs font-mono font-bold text-blue-400">{formatINR(srv.startingPrice)}</span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">{srv.description}</p>
                <div className="text-[10px] text-slate-500 font-mono">
                  Stack: {srv.technologies?.slice(0, 3).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: TESTIMONIALS & FAQS */}
      {activeTab === 'testimonials' && (
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Testimonials & FAQs Management</h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage client social proof and agency questions.
            </p>
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Current Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <strong className="text-white">{t.clientName}</strong>
                    {t.isPlaceholder && (
                      <span className="text-[10px] text-blue-400 font-mono">Placeholder</span>
                    )}
                  </div>
                  <p className="text-slate-400">{t.role}, {t.company}</p>
                  <p className="text-slate-300 italic pt-1">&ldquo;{t.content}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Current FAQs ({faqs.length})</h3>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                  <h4 className="font-bold text-white">{f.question}</h4>
                  <p className="text-slate-400">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: SETTINGS */}
      {activeTab === 'settings' && (
        <div className="space-y-6 max-w-2xl">
          <div>
            <h1 className="text-2xl font-bold text-white">Studio Brand & Contact Settings</h1>
            <p className="text-xs text-slate-400 mt-1">
              Configure agency contact channels, WhatsApp routing, and response time guarantees.
            </p>
          </div>

          {settingsSaved && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Studio settings successfully saved and applied!</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 text-xs">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">Agency Name</label>
              <input
                type="text"
                value={settingsForm.agencyName || ''}
                onChange={(e) => setSettingsForm({ ...settingsForm, agencyName: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">Developer Full Name</label>
              <input
                type="text"
                value={settingsForm.developerName || ''}
                onChange={(e) => setSettingsForm({ ...settingsForm, developerName: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">Contact Email</label>
              <input
                type="email"
                value={settingsForm.email || ''}
                onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">WhatsApp Number (with country code)</label>
              <input
                type="text"
                value={settingsForm.whatsappNumber || ''}
                onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
              />
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">Guaranteed Turnaround Time</label>
              <input
                type="text"
                value={settingsForm.turnaroundTime || ''}
                onChange={(e) => setSettingsForm({ ...settingsForm, turnaroundTime: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <Button type="submit" variant="primary" size="md">
              Save Settings
            </Button>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};
