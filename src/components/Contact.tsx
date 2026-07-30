import { profile } from '../data/profile';

export const Contact = () => {
  return (
    <footer
      className="contact-section"
      id="contacto"
      aria-labelledby="contact-label"
    >
      <div className="contact-shell">
        <div className="contact-heading">
          <p className="contact-kicker" id="contact-label">
            {profile.contact.label}
          </p>
          <p>{profile.contact.summary}</p>
        </div>

        <div className="contact-panel">
          <div className="contact-list" aria-label="Canales de contacto">
            {profile.contact.channels.map((channel) => (
              <div className="contact-row" key={channel.label}>
                <span>{channel.label}</span>
                {channel.href ? (
                  <a href={channel.href}>{channel.value}</a>
                ) : (
                  <span>{channel.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="contact-list" aria-label="Recursos">
            {profile.contact.resources.map((resource) => (
              <div className="contact-row" key={resource.label}>
                <span>{resource.label}</span>
                <a href={resource.href}>{resource.value}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
