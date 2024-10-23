import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  Package, 
  DollarSign,
  Settings,
  Moon,
  BookOpen
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: Package, label: 'Assets', path: '/assets' },
    { icon: DollarSign, label: 'Donations', path: '/donations' },
  ];

  return (
    <div className="h-screen w-64 bg-emerald-900 text-white fixed left-0 top-0">
      <div className="p-4 flex items-center gap-3 border-b border-emerald-800">
        <Moon className="w-8 h-8" />
        <span className="text-xl font-semibold">Masjid Manager</span>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-800 text-white'
                  : 'text-emerald-100 hover:bg-emerald-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-emerald-800">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 p-3 text-emerald-100 hover:bg-emerald-800 rounded-lg"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;