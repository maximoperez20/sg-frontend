import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="sm:ml-64">
        <main className="p-4">
          <Outlet /> {/* Aquí se inyecta el contenido de cada subruta */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
