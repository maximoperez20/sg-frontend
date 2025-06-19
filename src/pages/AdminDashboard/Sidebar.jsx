import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

let a = 1;



const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: 'photos' },
  { name: 'Users', icon: UsersIcon, href: '#' },
  { name: 'Settings', icon: Cog6ToothIcon, href: 'settings' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="
          sm:hidden p-2 m-2 text-gray-500 rounded-md
          hover:bg-gray-100 focus:outline-none
          focus:ring-2 focus:ring-gray-300
        "
      >
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 fixed top-0 left-0 z-40 w-64 h-full bg-white border-r border-gray-200
        transition-transform duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="h-full p-4">
          {/* Encabezado con botón de cerrar (solo visible en mobile) */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              My App
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="sm:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
          flex items-center gap-3 p-2 text-gray-700 rounded-md
          hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700
        "
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Spacer for layout */}
      <div className="sm:ml-64" />
    </>
  );
}
