'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function FitNotesSection({ fitNotes }) {
  return (
    <section className="space-y-36">
      <div className="text-center space-y-18">
        <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary">
          Fit & Fabric Notes
        </h2>
        <p className="font-body text-base text-text-secondary max-w-[600px] mx-auto">
          Important considerations when choosing your size
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36">
        {fitNotes?.map((note, index) => (
          <div 
            key={index}
            className="bg-card rounded-lg shadow-warm p-24 md:p-32 space-y-18 hover:shadow-warm-lg transition-smooth stagger-reveal"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-12">
              <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name={note?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-h5 font-semibold text-text-primary">
                {note?.title}
              </h3>
            </div>
            <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
              {note?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

FitNotesSection.propTypes = {
  fitNotes: PropTypes?.arrayOf(
    PropTypes?.shape({
      title: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired
    })
  )?.isRequired
};