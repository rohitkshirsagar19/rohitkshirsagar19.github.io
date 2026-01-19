import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gamepad2, Briefcase, Award, Laptop, Mail, Volume2, VolumeX, Terminal } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

const Navigation: React.FC = () => {
  const { playClick, playHover, toggleMute, isMuted } = useSound();

  const navItems = [
    { name: 'Home', path: '/', icon: Gamepad2 },
    { name: 'Projects', path: '/projects', icon: Laptop },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Award },
    { name: 'Logs', path: '/logs', icon: Terminal },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-retro-black border-t-4 border-retro-purple z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b-4">
      <div className="flex justify-between items-center px-4 md:px-8 py-2 max-w-7xl mx-auto">
        {/* Mobile Spacer to center links */}
        <div className="w-8 md:hidden"></div>

        <div className="flex justify-center flex-1 gap-4 md:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={playClick}
              onMouseEnter={playHover}
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

        {/* Mute Toggle */}
        <button
          onClick={() => {
            toggleMute();
            if (isMuted) playClick(); // Play click sound if unmuting
          }}
          className="text-retro-light-gray hover:text-retro-purple transition-colors p-2"
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
