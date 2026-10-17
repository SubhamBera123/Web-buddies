import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Layers, Inbox, FolderKanban, Tag, DollarSign, MessageSquare, 
  Settings, LogOut, ExternalLink, ShieldCheck, Database 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

export const AdminLayout = ({ children, activeTab, onTabChange }) => {
  const { user, logout } = useAuth();
  const { isSupabaseConnected, enquiries } = useData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const pendingEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layers },
    { id: 'enquiries', label: 'Client Enquiries', icon: Inbox, badge: pendingEnquiriesCount || null },
    { id: 'projects', label: 'Portfolio Projects', icon: FolderKanban },
    { id: 'pricing', label: 'Pricing Packages', icon: DollarSign },
    { id: 'services', label: 'Services Catalogue', icon: Tag },
    { id: 'testimonials', label: 'Testimonials & FAQs', icon: MessageSquare },
    { id: 'settings', label: 'Studio Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="bg-slate-900/90 border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-sm">NexusCraft Admin</span>
            </Link>

            {/* Supabase Connection Status Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 ml-4 px-2.5 py-1 rounded-full text-[11px] font-mono border bg-slate-950">
              <Database className={`w-3.5 h-3.5 ${isSupabaseConnected ? 'text-emerald-400' : 'text-blue-400'}`} />
              <span className="text-slate-300">
                {isSupabaseConnected ? 'Supabase PostgreSQL (Live)' : 'Local Mock Database (Active)'}
              </span>
              <span className={`w-2 h-2 rounded-full ${isSupabaseConnected ? 'bg-emerald-400' : 'bg-blue-400'} animate-pulse`}></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              target="_blank" 
              className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-2 text-xs text-slate-300 border-l border-slate-800 pl-4">
              <span className="hidden lg:inline text-slate-400">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-red-400 hover:text-red-300 px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-xs transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation Bar */}
        <div className="border-t border-slate-800/60 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge ? (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-red-500 text-white font-bold animate-pulse">
                      {tab.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};
