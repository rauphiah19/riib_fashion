'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import SizeChartSection from './SizeChartSection';
import MeasurementGuide from './MeasurementGuide';
import SizeRecommendationTool from './SizeRecommendationTool';
import FitNotesSection from './FitNotesSection';
import FAQSection from './FAQSection';
import ConsultationCTA from './ConsultationCTA';
import TrustElements from './TrustElements';

export default function SizeFitInteractive({ 
  sizeCharts, 
  measurementGuide, 
  fitNotes, 
  faqs, 
  trustElements 
}) {
  const [selectedCategory, setSelectedCategory] = useState('Hijabs');
  const [unit, setUnit] = useState('cm');

  return (
    <main className="pt-[60px]">
      <div className="w-full px-24 lg:px-36 py-48 md:py-72">
        <div className="max-w-[1200px] mx-auto space-y-72">
          <div className="text-center space-y-24 fade-in">
            <h1 className="font-heading text-h2 md:text-h1 font-bold text-text-primary">
              Size & Fit Guide
            </h1>
            <p className="font-body text-base md:text-lg text-text-secondary max-w-[700px] mx-auto">
              Find your perfect fit with our comprehensive sizing guide. Measure accurately, choose confidently, and wear beautifully.
            </p>
          </div>

          <SizeChartSection 
            sizeCharts={sizeCharts}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            unit={unit}
            setUnit={setUnit}
          />

          <MeasurementGuide measurementGuide={measurementGuide} />

          <SizeRecommendationTool sizeCharts={sizeCharts} />

          <FitNotesSection fitNotes={fitNotes} />

          <ConsultationCTA />

          <div className="space-y-36">
            <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary text-center">
              Frequently Asked Questions
            </h2>
            <FAQSection faqs={faqs} />
          </div>

          <TrustElements trustElements={trustElements} />
        </div>
      </div>
    </main>
  );
}

SizeFitInteractive.propTypes = {
  sizeCharts: PropTypes?.arrayOf(
    PropTypes?.shape({
      category: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      sizes: PropTypes?.array?.isRequired
    })
  )?.isRequired,
  measurementGuide: PropTypes?.arrayOf(
    PropTypes?.shape({
      title: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      instructions: PropTypes?.string?.isRequired,
      illustration: PropTypes?.string
    })
  )?.isRequired,
  fitNotes: PropTypes?.arrayOf(
    PropTypes?.shape({
      title: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  faqs: PropTypes?.arrayOf(
    PropTypes?.shape({
      question: PropTypes?.string?.isRequired,
      answer: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  trustElements: PropTypes?.shape({
    fitGuarantee: PropTypes?.string?.isRequired,
    exchangePolicy: PropTypes?.string?.isRequired
  })?.isRequired
};