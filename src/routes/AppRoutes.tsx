import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { HomePage } from '../pages/Home/HomePage';
import { EventsPage } from '../pages/Events/EventsPage';
import { ServicesPage } from '../pages/Services/ServicesPage';
import { EventPlannerPage } from '../pages/EventPlanner/EventPlannerPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { AboutPage } from '../pages/About/AboutPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { ROUTES } from '../constants/route';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.EVENTS} element={<EventsPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.PLAN_EVENT} element={<EventPlannerPage />} />
        <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
      </Route>
    </Routes>
  );
};
