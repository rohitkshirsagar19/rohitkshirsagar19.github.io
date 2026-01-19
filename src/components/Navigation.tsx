import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gamepad2, Briefcase, Award, Laptop, Mail, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Gamepad2 },
    { name: 'Projects', path: '/projects', icon: Laptop },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-retro-black border-t-4 border-retro-purple z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b-4">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center transition-colors group ${isActive ? 'text-retro-purple' : 'text-retro-light-gray hover:text-retro-purple'
              }`
            }
          >
            <item.icon className="w-6 h-6 group-hover:animate-pixel-bounce" />
            <span className="text-xs font-pixel hidden md:block mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
