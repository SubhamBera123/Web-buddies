import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowRight, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';

export const AdminLoginPage = () => {
  const [email, setEmail] = useState('admin@nexuscraftstudio.dev');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, isSupabaseConnected } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoFill = () => {
    setEmail('admin@nexuscraftstudio.dev');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-[#070A12] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
              <Layers className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">NexusCraft</span>
          </Link>
          <h2 className="text-2xl font-bold text-white">Administrative Portal</h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage inquiries, update pricing packages, and publish portfolio case studies.
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Administrator Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@nexuscraftstudio.dev"
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="text-[11px] text-blue-400 hover:underline"
                >
                  Use Demo Password
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={loading}
              className="w-full font-bold shadow-lg shadow-blue-500/30 mt-2"
              icon={ArrowRight}
              iconPosition="right"
            >
              Sign In to Dashboard
            </Button>
          </form>

          {/* Quick Demo Credentials Banner */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Demo Login Credentials:</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-0.5">
              <div>Email: <span className="text-blue-400">admin@nexuscraftstudio.dev</span></div>
              <div>Password: <span className="text-blue-400">admin123</span></div>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              {isSupabaseConnected
                ? 'Connected to live Supabase Auth instance.'
                : 'Supabase credentials can be configured via .env. Currently running with local admin session verification.'}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to Public Agency Website
          </Link>
        </div>
      </div>
    </div>
  );
};
