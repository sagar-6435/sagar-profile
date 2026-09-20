import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import AdminLayout from './pages/admin/AdminLayout.tsx';
import Login from './pages/admin/Login.tsx';
import Dashboard from './pages/admin/Dashboard.tsx';
import Projects from './pages/Projects.tsx';

const host = window.location.hostname;
const isAdminSubdomain = host.startsWith('admin.');

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			{isAdminSubdomain ? (
				<Routes>
					<Route path="/" element={<AdminLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="login" element={<Login />} />
					</Route>
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/admin" element={<AdminLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="login" element={<Login />} />
					</Route>
				</Routes>
			)}
		</BrowserRouter>
	</StrictMode>,
);
