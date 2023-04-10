import { motion } from "framer-motion";
import uuid from "react-uuid";
import "./Project.scss";

function Project({ project }) {
	return (
    <motion.a
      className="project"
      layout
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ layout: {
        duration: 0.5 
       } }}
      href="#"
      layoutid="fadeInOut"
      style={{
        backgroundImage: `url(${project.image})`
      }}
    >
      {/* <img src={project.image} alt="" className="project__image" /> */}
      <div className="project__info">
        <h4>{project.subtitle}</h4>
        <h3>{project.title}</h3>
        <div className="project__tags">
          {project.tags.map(tag => {
            return <p key={uuid()} className="project__tag">{tag}</p>
          })}
        </div>
      </div>
    </motion.a>
	);
}

export default Project;
