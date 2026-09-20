import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Navbar } from '../components/navbar';
import { HexBg } from '../components/hex-bg';
import { MouseTrail } from '../components/mouse-trail';
import { ScrollBar } from '../components/scroll-bar';
import '../styles/projects.css'; // use existing styles

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`http://${window.location.hostname}:5001/api/projects`);
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <HexBg />
      <ScrollBar />
      <MouseTrail />
      
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }} className="container">
        <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '3rem', marginBottom: '3rem', fontFamily: 'inherit' }}>
          All Projects
        </h1>
        
        {loading ? (
          <p style={{ textAlign: 'center', color: '#ccc', fontSize: '1.2rem' }}>Loading projects...</p>
        ) : (
          <div className="projects-grid" style={{ padding: '0 2rem' }}>
            {projects.map((project, index) => (
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
        )}
        
        {!loading && projects.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', fontSize: '1.1rem' }}>No projects available right now.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
