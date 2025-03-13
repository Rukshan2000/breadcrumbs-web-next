'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import caseStudiesData from '../jsons/CaseStudiesSection.json';
import { Header } from '../components/Header';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HeaderSection } from './components/HeaderSection';
import { TabsNavigation } from './components/TabsNavigation';
import { OverviewTab } from './components/OverviewTab';
import { ChallengesTab } from './components/ChallengesTab';
import { FeaturesTab } from './components/FeaturesTab';
import { TechnologiesTab } from './components/TechnologiesTab';
import { SolutionsTab } from './components/SolutionsTab';
import { ResultsTab } from './components/ResultsTab';
import { TestimonialsTab } from './components/TestimonialsTab';
import { Footer } from '../components/Footer'; // Import Footer component

function CaseStudyContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const chartTimer = setTimeout(() => {
        setIsChartVisible(true);
      }, 500);
      return () => clearTimeout(chartTimer);
    }
  }, [isLoading]);

  if (!id) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  const caseStudy = caseStudiesData.caseStudies.find(
    (study) => study.caseStudyId === parseInt(id)
  );

  if (!caseStudy) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-4xl font-bold mb-4">404</div>
        <div className="text-xl">Case study not found</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  const patientMonitoringData = [
    { name: 'Jan', previous: 120, current: 65 },
    { name: 'Feb', previous: 110, current: 62 },
    { name: 'Mar', previous: 130, current: 70 },
    { name: 'Apr', previous: 100, current: 55 },
    { name: 'May', previous: 115, current: 63 },
    { name: 'Jun', previous: 125, current: 68 },
  ];

  const readmissionData = [
    { name: 'Cardiac', before: 32, after: 22 },
    { name: 'Respiratory', before: 38, after: 27 },
    { name: 'Post-surgery', before: 30, after: 21 },
    { name: 'Oncology', before: 25, after: 17 },
  ];

  const adoptionRateData = [
    { name: 'Q1', value: 12 },
    { name: 'Q2', value: 19 },
    { name: 'Q3', value: 31 },
    { name: 'Q4', value: 52 },
  ];

  const patientSatisfactionData = [
    { name: 'Very Satisfied', value: 65 },
    { name: 'Satisfied', value: 30 },
    { name: 'Neutral', value: 3 },
    { name: 'Dissatisfied', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <Header />
      <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

          <HeaderSection caseStudy={caseStudy} />
          <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <OverviewTab caseStudy={caseStudy} isChartVisible={isChartVisible} patientMonitoringData={patientMonitoringData} />
            )}
            {activeTab === 'challenges' && (
              <ChallengesTab caseStudy={caseStudy} />
            )}
            {activeTab === 'features' && (
              <FeaturesTab caseStudy={caseStudy} isChartVisible={isChartVisible} patientSatisfactionData={patientSatisfactionData} />
            )}
            {activeTab === 'technologies' && (
              <TechnologiesTab caseStudy={caseStudy} isChartVisible={isChartVisible} adoptionRateData={adoptionRateData} />
            )}
            {activeTab === 'solutions' && (
              <SolutionsTab caseStudy={caseStudy} isChartVisible={isChartVisible} readmissionData={readmissionData} />
            )}
            {activeTab === 'results' && (
              <ResultsTab caseStudy={caseStudy} />
            )}
            {activeTab === 'testimonials' && (
              <TestimonialsTab caseStudy={caseStudy} />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function CaseStudyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );
}