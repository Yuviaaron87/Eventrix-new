import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { EVENT_SERVICES } from '../../data/services';
import { FoodCateringShowcase } from '../../components/FoodCatering/FoodCateringShowcase';

export const ServicesPage: React.FC = () => {
  const { handleOpenPlanner } = useOutletContext<{ handleOpenPlanner: () => void }>();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-[#faf8ff] py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionTitle
            eyebrow="Integrated Service Capabilities"
            title="Every Detail Covered,"
            highlightText="Zero Coordination Stress."
            subtitle="Explore our five core event services: Theme Decoration, Gourmet Catering, Pro DJ Rigs, HD Photography, and 4K Videography."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              onSelectService={() => handleOpenPlanner()}
            />
          ))}
        </div>
      </section>

      {/* Embedded Food Showcase */}
      <FoodCateringShowcase onOpenPlanner={() => handleOpenPlanner()} />
    </div>
  );
};
