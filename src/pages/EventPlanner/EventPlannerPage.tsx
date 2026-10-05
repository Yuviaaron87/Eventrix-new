import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractivePlannerModal } from '../../components/PlannerModal/InteractivePlannerModal';
import { ROUTES } from '../../constants/route';

export const EventPlannerPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate(ROUTES.HOME);
  };

  return (
    <div className="py-20 min-h-[70vh] flex items-center justify-center">
      <InteractivePlannerModal
        isOpen={isOpen}
        onClose={handleClose}
      />
    </div>
  );
};
