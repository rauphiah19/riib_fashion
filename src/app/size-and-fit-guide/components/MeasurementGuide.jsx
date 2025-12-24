'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function MeasurementGuide({ measurementGuide }) {
  return (
    <section className="space-y-36">
      <div className="text-center space-y-18">
        <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary">
          How to Measure
        </h2>
        <p className="font-body text-base text-text-secondary max-w-[600px] mx-auto">
          Follow these simple steps to take accurate body measurements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36">
        {measurementGuide?.map((guide, index) => (
          <div 
            key={index}
            className="bg-card rounded-lg shadow-warm hover:shadow-warm-lg transition-smooth overflow-hidden stagger-reveal"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {guide?.illustration && (
              <div className="relative h-[200px] bg-muted">
                <AppImage
                  src={guide?.illustration}
                  alt={`Illustration showing ${guide?.title} technique`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="p-24 md:p-32 space-y-18">
              <div className="flex items-center gap-12">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name={guide?.icon} size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-h5 font-semibold text-text-primary">
                  {guide?.title}
                </h3>
              </div>
              <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
                {guide?.instructions}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-24 md:p-32">
        <div className="flex gap-18">
          <Icon name="LightBulbIcon" size={24} className="text-accent flex-shrink-0" />
          <div className="space-y-12">
            <h4 className="font-heading text-base md:text-lg font-semibold text-text-primary">
              Pro Tips for Accurate Measurements
            </h4>
            <ul className="space-y-6 font-body text-sm md:text-base text-text-secondary">
              <li className="flex items-start gap-12">
                <span className="text-accent mt-6">•</span>
                <span>Use a soft measuring tape, not a rigid ruler</span>
              </li>
              <li className="flex items-start gap-12">
                <span className="text-accent mt-6">•</span>
                <span>Keep the tape snug but not tight against your body</span>
              </li>
              <li className="flex items-start gap-12">
                <span className="text-accent mt-6">•</span>
                <span>Measure over fitted clothing or undergarments, not bulky layers</span>
              </li>
              <li className="flex items-start gap-12">
                <span className="text-accent mt-6">•</span>
                <span>Ask someone to help you for the most accurate results</span>
              </li>
              <li className="flex items-start gap-12">
                <span className="text-accent mt-6">•</span>
                <span>Take measurements at the end of the day when your body is at its largest</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

MeasurementGuide.propTypes = {
  measurementGuide: PropTypes?.arrayOf(
    PropTypes?.shape({
      title: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      instructions: PropTypes?.string?.isRequired,
      illustration: PropTypes?.string
    })
  )?.isRequired
};