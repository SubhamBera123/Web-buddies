import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Sparkles, Crown, Cpu } from 'lucide-react';

export const THEMES = [
  {
    id: 'original',
    num: '01',
    name: 'Original',
    tag: '01 / Original',
    subtitle: 'Obsidian & Gold Studio',
    archetype: 'Modern Bespoke Web Studio',
    accentColor: '#D2B477',
    icon: Sparkles,
    badgeText: 'Preserved Original'
  },
  {
    id: 'luxury',
    num: '02',
    name: 'Editorial',
    tag: '02 / Editorial',
    subtitle: 'Ivory & Champagne Atelier',
    archetype: 'Luxury Haute Digital Agency',
    accentColor: '#9E7B4F',
    icon: Crown,
    badgeText: 'Editorial Atelier'
  },
  {
    id: 'futuristic',
    num: '03',
    name: 'Futuristic',
    tag: '03 / Futuristic',
    subtitle: 'Cyber HUD & Neon Telemetry',
    archetype: 'Next-Gen Interactive Platform',
    accentColor: '#00F0FF',
    icon: Cpu,
    badgeText: 'Cyber Telemetry'
  }
];

const THEME_STORAGE_KEY = 'nexus_active_theme';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored && (stored === 'original' || stored === 'luxury' || stored === 'futuristic')) {
        return stored;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'original';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync DOM attributes and classes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Trigger smooth transition class
    root.classList.add('theme-transitioning');
    setIsTransitioning(true);

    // Set data attribute
    root.setAttribute('data-theme', theme);

    // Clean old theme classes
    root.classList.remove('theme-original', 'theme-luxury', 'theme-futuristic');
    body.classList.remove('theme-original', 'theme-luxury', 'theme-futuristic');

    // Add current theme class
    root.classList.add(`theme-${theme}`);
    body.classList.add(`theme-${theme}`);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore
    }

    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [theme]);

  // Exact cycle sequence: UI 1 (Original) -> UI 2 (Luxury) -> UI 3 (Futuristic) -> UI 1 -> ...
  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      if (current === 'original') return 'luxury';
      if (current === 'luxury') return 'futuristic';
      return 'original';
    });
  }, []);

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'original' || newTheme === 'luxury' || newTheme === 'futuristic') {
      setThemeState(newTheme);
    }
  }, []);

  const currentThemeMeta = THEMES.find((t) => t.id === theme) || THEMES[0];

  const value = {
    theme,
    setTheme,
    cycleTheme,
    currentThemeMeta,
    themes: THEMES,
    isTransitioning,
    isOriginal: theme === 'original',
    isLuxury: theme === 'luxury',
    isFuturistic: theme === 'futuristic'
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
