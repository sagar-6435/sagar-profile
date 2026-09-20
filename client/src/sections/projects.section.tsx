import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';
import { projectsData } from '../data/portfolio';

export const ProjectsSection = () => {
	return (
		<section className="projects-container" id="projects">
			<div>
				<div className="projects-grid">
					{projectsData.projects.map((project, index) => (
						<div key={index} className="project-card">
							<h3 className="project-title">{project.title}</h3>
							<p className="project-description">{project.description}</p>
							
							<div className="project-tech">
								{project.techStack.map((tech, idx) => (
									<span key={idx} className="tech-tag">{tech}</span>
								))}
							</div>
							
							<div className="project-links">
								{project.githubUrl && (
									<a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
										<FaGithub /> GitHub
									</a>
								)}
								{project.liveUrl && project.liveUrl !== '#' && (
									<a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
										<FaExternalLinkAlt /> Live Demo
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<SectionTitle title={projectsData.section.title} subTitle={projectsData.section.subTitle} />
			</div>
		</section>
	);
};
