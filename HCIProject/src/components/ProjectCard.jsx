import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project._id}/${encodeURIComponent(project.name)}`}  className="placeholder-card">{project.name}
                </Link>
    );
}