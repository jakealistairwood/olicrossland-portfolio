import { motion } from "framer-motion";
import uuid from "react-uuid";
import "./Project.scss";
import { Link } from "react-router-dom";

import { convertStrToUrl } from "../../assets/utils/helpers";

function Project({ project }) {

  let projectUrl = convertStrToUrl(project.title);
  console.log(projectUrl);

	return (
    <Link to={`projects/${projectUrl}`}>
      <motion.div
        className="project"
        layout
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ layout: {
          duration: 0.4
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
      </motion.div>
    </Link>
	);
}

export default Project;
