
import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-retro text-lg">{name}</span>
        <span className="font-pixel text-xs text-retro-light-gray">{level * 20}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${level * 20}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
