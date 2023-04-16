import { useParams, useNavigate } from "react-router-dom";
import "./ProjectIndex.scss";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData as projects } from "../../data/projects";
import Featured from "../../components/Featured/Featured";
import { ReactComponent as ScrollIndicator } from "../../assets/img/scroll-down-indicator.svg";

function ProjectIndex() {
	let { projectId } = useParams();

    const navigate = useNavigate();

	const getProject = (url, arr) => {
		let convertedUrl = url.split("-").join(" ");
		let projectMatch = arr.filter((i) => {
			return i.title.toLowerCase() == convertedUrl;
		});
		return projectMatch;
	};

	let project = getProject(projectId, projects)[0];

    console.log(project.mediaUpload);

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
        exit: {
            opacity: 0,
            transition: {
                duration: 0.6
            }
        }
	};

    const checkProjectHasUpload = () => {
        if(!project.mediaUpload) return;

        if(project.mediaUpload.toLowerCase() == "videography") {
            return <motion.div className="project-index__media">
                    <iframe className="project-index__video" src={project.mediaUpload} width="100%" height="640" allow="autoplay"></iframe>
                </motion.div>
        } else {
            return <motion.div className="project-index__audio">
                    <iframe className="project-index__audio" src={project.mediaUpload} width="100%" height="480" allow="autoplay"></iframe>
                </motion.div>
        }
    }

	return (
		<AnimatePresence>
			<motion.div
				initial="initial"
                animate="animate"
                exit="exit"
				className="project-index container"
                mode="wait"
			>

                <motion.div variants={stagger} className="project-index__content">
                    <motion.header className="project-index__header" variant={stagger}>
                        <motion.h1 variants={fadeInElement}>
                            {project.title} <span>with {project.subtitle}</span>
                        </motion.h1>
                        <motion.div variants={stagger} className="project-index__tags">
                            {project.tags.map(tag => {
                                return <motion.span variants={fadeInElement} className="project-index__tag">{tag}</motion.span>
                            })}
                        </motion.div>
                    </motion.header>
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
                    {checkProjectHasUpload()}
                </motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ProjectIndex;
