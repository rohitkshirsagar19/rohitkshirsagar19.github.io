
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CertificateProps {
  name: string;
  issuer: string;
  year: number;
}

const Certificate: React.FC<CertificateProps> = ({ name, issuer, year }) => {
  return (
    <div className="flex items-start p-3 bg-retro-dark-gray rounded-md mb-3">
      <CheckCircle className="w-5 h-5 text-retro-green mr-2 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-retro text-lg text-white">{name}</h4>
        <div className="flex flex-wrap items-center mt-1">
          <span className="text-retro-light-gray font-retro text-sm">{issuer}</span>
          <span className="mx-2 text-retro-gray">•</span>
          <span className="text-retro-light-gray font-retro text-sm">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
