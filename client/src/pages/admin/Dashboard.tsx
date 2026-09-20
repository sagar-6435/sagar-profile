import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubLink: '',
    liveLink: '',
    technologies: ''
  });

  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`http://${window.location.hostname}:5001/api/projects`);
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  };

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
    fetchProjects();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenModal = (project?: any) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title || '',
        description: project.description || '',
        imageUrl: project.imageUrl || '',
        githubLink: project.githubLink || '',
        liveLink: project.liveLink || '',
        technologies: project.technologies?.join(', ') || ''
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        githubLink: '',
        liveLink: '',
        technologies: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    
    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
    };

    try {
      if (editingProject) {
        await axios.put(`http://${window.location.hostname}:5001/api/projects/${editingProject._id}`, payload, config);
      } else {
        await axios.post(`http://${window.location.hostname}:5001/api/projects`, payload, config);
      }
      setIsModalOpen(false);
      fetchProjects();
    } catch (error) {
      console.error('Failed to save project', error);
      alert('Error saving project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    const token = localStorage.getItem('adminToken');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      await axios.delete(`http://${window.location.hostname}:5001/api/projects/${id}`, config);
      fetchProjects();
    } catch (error) {
      console.error('Failed to delete project', error);
      alert('Error deleting project');
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', color: '#fff', fontWeight: 600 }}>Manage Projects</h1>
      
      {/* Add New Project Button */}
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => handleOpenModal()}
          style={{ 
          padding: '0.75rem 1.5rem', 
          background: 'linear-gradient(45deg, #27ae60, #2ecc71)', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          + Add New Project
        </button>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {projects.map((project: any) => (
          <div key={project._id} style={{ 
            background: 'rgba(30, 30, 30, 0.7)', 
            backdropFilter: 'blur(12px)',
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{project.title}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={() => handleOpenModal(project)}
                style={{ 
                padding: '0.6rem 1rem', 
                background: 'rgba(52, 152, 219, 0.2)', 
                color: '#3498db', 
                border: '1px solid rgba(52, 152, 219, 0.5)', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: 600,
                flex: 1,
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(52, 152, 219, 0.4)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(52, 152, 219, 0.2)'}
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(project._id)}
                style={{ 
                padding: '0.6rem 1rem', 
                background: 'rgba(231, 76, 60, 0.2)', 
                color: '#e74c3c', 
                border: '1px solid rgba(231, 76, 60, 0.5)', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: 600,
                flex: 1,
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(231, 76, 60, 0.4)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(231, 76, 60, 0.2)'}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {projects.length === 0 && (
        <div style={{ 
          background: 'rgba(30, 30, 30, 0.7)', 
          backdropFilter: 'blur(12px)',
          padding: '2rem', 
          borderRadius: '12px', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#aaa', fontSize: '1.1rem' }}>No projects found. Add one to see it here.</p>
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: 'rgba(30, 30, 30, 0.95)',
            backdropFilter: 'blur(12px)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '90%', maxWidth: '500px',
            maxHeight: '90vh', overflowY: 'auto'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Title *</label>
                <input 
                  type="text" name="title" required
                  value={formData.title} onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Description *</label>
                <textarea 
                  name="description" required rows={3}
                  value={formData.description} onChange={handleInputChange}
                  style={{ ...inputStyle, resize: 'vertical' } as React.CSSProperties}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Image URL *</label>
                <input 
                  type="text" name="imageUrl" required
                  value={formData.imageUrl} onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>GitHub Link</label>
                <input 
                  type="text" name="githubLink"
                  value={formData.githubLink} onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Live Link</label>
                <input 
                  type="text" name="liveLink"
                  value={formData.liveLink} onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Technologies (comma separated)</label>
                <input 
                  type="text" name="technologies"
                  value={formData.technologies} onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" style={{
                  padding: '0.75rem', background: '#3498db', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', flex: 1, fontWeight: 600
                }}>Save</button>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{
                  padding: '0.75rem', background: 'transparent', color: '#ccc', border: '1px solid #555', borderRadius: '8px', cursor: 'pointer', flex: 1, fontWeight: 600
                }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', 
  background: 'rgba(0, 0, 0, 0.3)', color: '#fff', outline: 'none'
};

export default Dashboard;
