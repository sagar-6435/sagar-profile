import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      const host = window.location.hostname;
      if (host.startsWith('admin.')) {
        navigate('/login');
      } else {
        navigate('/admin/login');
      }
      return;
    }

    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    };

    fetchProjects();
  }, [navigate]);

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Manage Projects</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {projects.map((project: any) => (
          <div key={project._id} style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', border: '1px solid #333' }}>
            <h3>{project.title}</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '0.5rem', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              <button style={{ padding: '0.5rem', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {projects.length === 0 && (
        <p style={{ color: '#aaa' }}>No projects found. Add one to see it here.</p>
      )}
    </div>
  );
};

export default Dashboard;
