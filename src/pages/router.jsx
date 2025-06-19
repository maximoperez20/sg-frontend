import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import AdminLayout from './AdminDashboard/AdminLayout';
import AdminPhotos from './AdminDashboard/AdminPhotos';
import AdminSettings from './AdminDashboard/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', index: true, element: <Navigate to="/admin/photos" replace/> },
      { path: 'photos', element: <AdminPhotos /> },
      { path: 'settings', element: <AdminSettings /> },
      // más subrutas si querés: settings, products, etc.
    ],
  },
]);
