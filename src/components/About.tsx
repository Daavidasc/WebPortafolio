import { profile } from '../data/profile';

export const About = () => {
  return (
    <section className="about-section" id="perfil" aria-labelledby="about-title">
      <div className="about-shell">
        <div className="about-photo-column">
          <figure className="about-photo-frame">
            <img
              alt={profile.about.image.alt}
              className="about-photo"
              src={profile.about.image.src}
            />
          </figure>

          <dl className="about-meta">
            {profile.about.profileDetails.map((detail) => (
              <div className="about-meta__row" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-content">
          <div className="about-heading">
            <p className="about-kicker">{profile.about.label}</p>
            <h2 id="about-title">{profile.about.title}</h2>
          </div>

          <div className="about-copy">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-focus-list" aria-label="Areas profesionales">
            {profile.about.focusAreas.map((area) => (
              <article className="about-focus-item" key={area.label}>
                <span>{area.index}</span>
                <div>
                  <h3>{area.label}</h3>
                  <p>{area.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
