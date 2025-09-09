import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link to={`/projects/${p.slug}`}>{p.title}</Link> — {p.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}
