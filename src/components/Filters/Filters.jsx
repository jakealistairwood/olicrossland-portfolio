import uuid from "react-uuid";
import { useEffect } from "react";
import { projectsData } from "../../data/projects";
import "./Filters.scss";

function Filters({ projects, tags, setFilteredProjects, tagSelected, setTagSelected }) {

    useEffect(() => {
        if(tagSelected === "All") {
            setFilteredProjects(projects);
            return;
        }
        const filtered = projects.filter(project => {
            return project.tags.includes(tagSelected);
        });
        console.log(filtered);
        setFilteredProjects(filtered);
    }, [tagSelected]);

	return (
		<div className="portfolio__filters">
			<h4>Filters:</h4>
			<button className={tagSelected == "All" ? "btn btn-filter btn-filter--active" : "btn btn-filter"} onClick={() => setTagSelected("All")}>All</button>
			{tags.map((tag) => {
				return <button className={tagSelected == tag ? "btn btn-filter btn-filter--active" : "btn btn-filter"} onClick={() => setTagSelected(tag)} key={uuid()}>{tag}</button>;
			})}
		</div>
	);
}

export default Filters;
