import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';
import { projectsData } from '../data/portfolio';

export const ProjectsSection = () => {
	const [projects, setProjects] = useState<any[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const { data } = await axios.get(`http://${window.location.hostname}:5001/api/projects`);
				if (data && data.length > 0) {
					setProjects(data);
				} else {
					// Fallback to static data if no projects exist in the database
					setProjects(projectsData.projects.map(p => ({
						...p,
						technologies: p.techStack,
						githubLink: p.githubUrl,
						liveLink: p.liveUrl
					})));
				}
			} catch (error) {
				console.error('Failed to fetch projects', error);
				// Fallback to static data on error
				setProjects(projectsData.projects.map(p => ({
					...p,
					technologies: p.techStack,
					githubLink: p.githubUrl,
					liveLink: p.liveUrl
				})));
			}
		};

		fetchProjects();
	}, []);

	return (
		<section className="projects-container" id="projects">
			<div>
				<div className="projects-grid">
					{projects.slice(0, 4).map((project, index) => (
						<div key={project._id || index} className="project-card">
							<h3 className="project-title">{project.title}</h3>
							<p className="project-description">{project.description}</p>
							
							<div className="project-tech">
								{project.technologies?.map((tech: string, idx: number) => (
									<span key={idx} className="tech-tag">{tech}</span>
								))}
							</div>
							
							<div className="project-links">
								{project.githubLink && (
									<a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
										<FaGithub /> GitHub
									</a>
								)}
								{project.liveLink && project.liveLink !== '#' && (
									<a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link">
										<FaExternalLinkAlt /> Live Demo
									</a>
								)}
							</div>
						</div>
					))}
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
					<Link to="/projects" style={{
						padding: '0.8rem 2rem',
						background: 'transparent',
						color: 'hsl(196, 100%, 56%)',
						border: '2px solid hsl(196, 100%, 56%)',
						borderRadius: '8px',
						textDecoration: 'none',
						fontSize: '1.1rem',
						fontWeight: 600,
						transition: 'all 0.3s ease'
					}}
					onMouseOver={(e) => {
						e.currentTarget.style.background = 'hsl(196, 100%, 56%)';
						e.currentTarget.style.color = '#000';
					}}
					onMouseOut={(e) => {
						e.currentTarget.style.background = 'transparent';
						e.currentTarget.style.color = 'hsl(196, 100%, 56%)';
					}}>
						View All Projects
					</Link>
				</div>
			</div>
			<div>
				<SectionTitle title={projectsData.section.title} subTitle={projectsData.section.subTitle} />
			</div>
		</section>
	);
};
