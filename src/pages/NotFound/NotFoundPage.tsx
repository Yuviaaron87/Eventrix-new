import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/route';
import { Button } from '../../components/Button/Button';
import { Sparkles, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center text-center px-4">
      <div className="double-bezel max-w-lg w-full p-2 bg-white shadow-2xl">
        <div className="double-bezel-inner p-8 sm:p-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto text-2xl font-black">
            404
          </div>

          <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
            Page Not Found
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            The page or celebration route you are looking for might have been moved or does not exist.
          </p>

          <div>
            <Link to={ROUTES.HOME}>
              <Button variant="primary" size="md" icon={Home}>
                Back To Eventrix Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
