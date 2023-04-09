import "./Experience.scss";

function Experience({ experience }) {
	return (
		<div className="experience">
			<div className="experience__role">
				<h3>{experience.role}</h3>
				<p>@{experience.company}</p>
			</div>
			<div className="experience__date">
				<p>
					{experience.dateStarted} - {experience.dateEnded}
				</p>
			</div>
		</div>
	);
}

export default Experience;
