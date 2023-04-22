import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import uuid from "react-uuid";
import "./Project.scss";
import { Link } from "react-router-dom";

import { convertStrToUrl } from "../../assets/utils/helpers";

function Project({ project }) {

  let projectUrl = convertStrToUrl(project.title);

  let easing = [0.6, -0.05, 0.01, 0.99];

  // const staggerElements = {
  //   animate: {
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.6
  //     }
  //   }
  // }

  // const fadeElementIn = {
  //   initial: {
  //     opacity: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: easing
  //     }
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: easing
  //     }
  //   }
  // }

	return (
    <motion.div
      className="project"
      whileTap={{ scale: 0.95 }}
      href="#"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className="project__container" whileHover={{ 
        scale: 1.05, 
        transition: {
          duration: 0.4,
        } 
      }} style={{
        backgroundImage: `url(${project.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <Link className="project__inner-container" to={`projects/${projectUrl}`}>
            <motion.div className="project__info">
              <motion.h4>{project.subtitle}</motion.h4>
              <motion.h3>{project.title}</motion.h3>
              <motion.div className="project__tags">
                {project.tags.map(tag => {
                  return <motion.p key={uuid()} className="project__tag">{tag}</motion.p>
                })}
              </motion.div>
            </motion.div>
        </Link>
      </motion.div>
    </motion.div>
	);
}

export default Project;
