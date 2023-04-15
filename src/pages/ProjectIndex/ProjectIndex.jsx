import { useParams, useNavigate } from "react-router-dom";
import "./ProjectIndex.scss";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData as projects } from "../../data/projects";
import Featured from "../../components/Featured/Featured";

function ProjectIndex() {
	let { projectId } = useParams();
	console.log(projectId, projects);

    const navigate = useNavigate();

	const getProject = (url, arr) => {
		let convertedUrl = url.split("-").join(" ");
		let projectMatch = arr.filter((i) => {
			return i.title.toLowerCase() == convertedUrl;
		});
		return projectMatch;
	};

	let project = getProject(projectId, projects)[0];

	let stagger = {
		animate: {
            transition: {
                staggerChildren: 0.15,
            }
		},
	};

	let fadeInElement = {
		initial: {
			opacity: 0,
			y: 20,
			transition: {
				duration: 0.6,
			},
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				initial="initial"
                animate="animate"
				className="project-index container"
                
			>
                <motion.div variants={stagger} className="project-index__content">
                    <motion.h1 variants={fadeInElement}>
                        {project.title} <span>with {project.subtitle}</span>
                    </motion.h1>
                    <motion.div variants={stagger} className="project-index__tags">
                        {project.tags.map(tag => {
                            return <motion.span variants={fadeInElement} className="project-index__tag">{tag}</motion.span>
                        })}
                    </motion.div>
                    {/* <motion.p variants={fadeInElement}>{project.description}</motion.p> */}
                    <motion.div className="project-index__content-body" variants={fadeInElement}>
                        <motion.p className="project-index__description" dangerouslySetInnerHTML={{ __html: project.description }} />
                        <motion.button 
                            className="project-index__back-btn btn btn-primary" 
                            variants={fadeInElement} 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(-1)}
                        >
                            <span class="text text--one">Go back</span>
                            <span class="text text--two">Go back</span>
                        </motion.button>
                    </motion.div>
                    <motion.div className="project-index__media">
                        <Featured />
                    </motion.div>
                </motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ProjectIndex;
