import { profile } from '../data/profile';

export const Projects = () => {
  return (
    <section
      className="projects-section"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="projects-shell">
        <div className="projects-heading">
          <p className="projects-kicker">
            <span>{profile.projects.label}</span>
            <span>{profile.projects.range}</span>
          </p>
          <h2 id="projects-title">{profile.projects.title}</h2>
          <p>{profile.projects.summary}</p>
        </div>

        <div className="projects-grid" aria-label="Listado de proyectos">
          {profile.projects.items.map((project) => (
            <article className="project-item" key={project.id}>
              <figure className="project-figure">
                <img alt={project.alt} src={project.image} />
              </figure>

              <div className="project-meta">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
                <div>
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
