import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import { InteractivePlannerModal } from '../components/PlannerModal/InteractivePlannerModal';
import { EventType } from '../types/event';

export const MainLayout: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<EventType | ''>('');

  const handleOpenPlanner = (eventType?: EventType | string) => {
    if (eventType && typeof eventType === 'string') {
      setSelectedEventType(eventType as EventType);
    } else {
      setSelectedEventType('');
    }
    setPlannerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#faf8ff] text-slate-900 selection:bg-purple-600 selection:text-white">
      <Navbar onOpenPlanner={() => handleOpenPlanner()} />

      <main className="flex-grow pt-16 sm:pt-20">
        <Outlet context={{ handleOpenPlanner }} />
      </main>

      <Footer onOpenPlanner={() => handleOpenPlanner()} />

      <ScrollToTop />

      <InteractivePlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        initialEventType={selectedEventType}
      />
    </div>
  );
};
