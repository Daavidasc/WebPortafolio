import { profile } from '../data/profile';

export const Experience = () => {
  const itemsById = new Map(
    profile.experience.items.map((item) => [item.id, item]),
  );

  return (
    <section
      className="experience-section"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="experience-shell">
        <div className="experience-heading">
          <p className="experience-kicker">{profile.experience.label}</p>
          <h2 id="experience-title">{profile.experience.title}</h2>
          <p>{profile.experience.summary}</p>
        </div>

        <div className="experience-workspace">
          {profile.experience.groups.map((group, groupIndex) => (
            <section className="experience-group" key={group.label}>
              <div className="experience-group__heading">
                <h3>{group.label}</h3>
              </div>

              <div className="experience-timeline" aria-label={group.label}>
                {group.itemIds.map((itemId, itemIndex) => {
                  const item = itemsById.get(itemId);

                  if (!item) {
                    return null;
                  }

                  return (
                    <details
                      className="experience-entry"
                      key={item.id}
                      open={
                        (groupIndex === 0 && itemIndex === 0) || undefined
                      }
                    >
                      <summary>
                        <span>{item.period}</span>
                        <strong>{item.role}</strong>
                        <span>
                          {item.organization}
                          {item.location === '[Pendiente]'
                            ? ''
                            : ` / ${item.location}`}
                        </span>
                      </summary>

                      <div className="experience-entry__body">
                        <p>{item.focus}</p>
                        <ul>
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
