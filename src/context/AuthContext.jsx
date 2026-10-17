import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext(null);

const DEMO_ADMIN_USER = {
  id: 'admin-local-1',
  email: 'admin@nexuscraftstudio.dev',
  user_metadata: {
    full_name: 'Agency Administrator'
  },
  role: 'admin'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      // Check active Supabase session
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      // Check localStorage for offline / mock session
      const stored = localStorage.getItem('nexuscraft_admin_session');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch {
          localStorage.removeItem('nexuscraft_admin_session');
        }
      }
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      setUser(data.user);
      return data.user;
    } else {
      // Mock Login validation
      if (
        (email === 'admin@nexuscraftstudio.dev' && password === 'admin123') ||
        (email === 'admin' && password === 'admin') ||
        password === 'admin123'
      ) {
        const adminSession = {
          ...DEMO_ADMIN_USER,
          email: email.includes('@') ? email : 'admin@nexuscraftstudio.dev'
        };
        localStorage.setItem('nexuscraft_admin_session', JSON.stringify(adminSession));
        setUser(adminSession);
        return adminSession;
      } else {
        throw new Error('Invalid credentials. Use demo credentials (admin@nexuscraftstudio.dev / admin123) or configure Supabase Auth.');
      }
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('nexuscraft_admin_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAdmin: Boolean(user),
      isAuthenticated: Boolean(user),
      loading,
      login,
      logout,
      isSupabaseConnected: isSupabaseConfigured
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
