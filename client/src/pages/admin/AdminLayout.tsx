import { Outlet, useNavigate } from 'react-router-dom';
import { HexBg } from '../../components/hex-bg';
import { MouseTrail } from '../../components/mouse-trail';

import '../../styles/hex-bg.css';
import '../../styles/mouse-trail.css';

const AdminLayout = () => {
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <>
      <HexBg />
      <MouseTrail />
      <div style={{ minHeight: '100vh', color: '#fff', position: 'relative', zIndex: 1 }}>
        {token && (
          <nav style={{ padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(18, 18, 18, 0.8)', backdropFilter: 'blur(10px)' }}>
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
    </>
  );
};

export default AdminLayout;
