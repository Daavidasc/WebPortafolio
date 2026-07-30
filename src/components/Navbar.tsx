import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import type { Theme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] backdrop-blur-md">
      <nav
        className="relative mx-auto flex min-h-16 w-full max-w-[var(--layout-max)] items-center justify-between px-[var(--space-page)]"
        aria-label="Navegacion principal"
      >
        <a
          className="font-mono text-xs uppercase tracking-normal text-[var(--color-text)] outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
          href="#inicio"
        >
          DS
        </a>

        <div className="navbar-links navbar-links--desktop">
          {profile.navItems.map((item) => (
            <a
              className="navbar-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            className="menu-toggle"
            onClick={() => {
              setIsMenuOpen((currentValue) => !currentValue);
            }}
            type="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div
          className="navbar-links navbar-links--mobile"
          hidden={!isMenuOpen}
          id="mobile-navigation"
        >
          {profile.navItems.map((item) => (
            <a
              className="navbar-link navbar-link--mobile"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
