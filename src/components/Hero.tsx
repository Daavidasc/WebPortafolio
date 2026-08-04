import { profile } from '../data/profile';
import { SkillTags } from './SkillTags';

export const Hero = () => {
  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16"
      id="inicio"
    >
      <div className="mx-auto flex w-full max-w-[var(--layout-max)] flex-1 flex-col justify-center px-[var(--space-page)] pb-20 pt-10">
        <div className="relative min-h-[15rem] sm:min-h-[18rem] lg:min-h-[22rem]">
          <SkillTags />
        </div>

        <div className="relative z-10">
          <p className="mb-5 max-w-xl font-mono text-xs uppercase leading-relaxed tracking-normal text-[var(--color-muted)] sm:text-sm">
            {profile.hero.eyebrow}
          </p>
          <h1 className="hero-title" aria-label={profile.name}>
            <span>DAVID</span> <span>SERRUDO</span>
          </h1>

        </div>
      </div>

      <div
        className="mx-auto grid h-28 w-full max-w-[var(--layout-max)] grid-cols-[1fr_auto] items-start border-t border-[var(--color-line)] px-[var(--space-page)] py-5"
        aria-hidden="true"
      >

      </div>
    </section>
  );
};
