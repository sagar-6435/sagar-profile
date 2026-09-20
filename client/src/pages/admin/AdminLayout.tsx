import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      {token && (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
          <h2>Admin Dashboard</h2>
          <button 
            onClick={handleLogout}
            style={{ padding: '0.5rem 1rem', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </nav>
      )}
      <div style={{ padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
