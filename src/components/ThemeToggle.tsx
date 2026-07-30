import type { Theme } from '../hooks/useTheme';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const isDark = theme === 'dark';

  return (
    <button
      aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={onToggle}
      type="button"
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
};
