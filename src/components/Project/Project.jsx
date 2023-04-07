import { motion } from "framer-motion";
import uuid from "react-uuid";
import "./Project.scss";

function Project({ project }) {
	return (
		<motion.a
			className="project"
			whileInView={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      href="#"
		>
			<img src={project.image} alt="" className="project__image" />
      <h4>{project.subtitle}</h4>
			<h3>{project.title}</h3>
      <div className="project__tags">
        {project.tags.map(tag => {
          return <p key={uuid()} className="project__tag">{tag}</p>
        })}
      </div>
		</motion.a>
	);
}

export default Project;
