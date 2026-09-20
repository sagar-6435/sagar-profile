import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://${window.location.hostname}:5001/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('adminToken', data.token);
      
      const host = window.location.hostname;
      if (host.startsWith('admin.')) {
        navigate('/');
      } else {
        navigate('/admin');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '100px auto', 
      background: 'rgba(30, 30, 30, 0.7)', 
      backdropFilter: 'blur(12px)',
      padding: '2rem', 
      borderRadius: '12px', 
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>Admin Login</h2>
      {error && <p style={{ color: '#e74c3c', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              background: 'rgba(0, 0, 0, 0.3)', 
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3498db'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
            required
          />
        </div>
        <div style={{ position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              paddingRight: '2.5rem',
              borderRadius: '8px', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              background: 'rgba(0, 0, 0, 0.3)', 
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3498db'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '0.75rem',
              top: '2.25rem',
              background: 'none',
              border: 'none',
              color: '#3498db',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button 
          type="submit"
          style={{ 
            padding: '0.75rem', 
            background: 'linear-gradient(45deg, #3498db, #2980b9)', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer', 
            marginTop: '1rem',
            fontWeight: 600,
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
