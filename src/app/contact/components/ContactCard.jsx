'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function ContactCard({ contact, index }) {
  const animationDelay = `${index * 150}ms`;

  return (
    <div 
      className="bg-card rounded-lg p-24 md:p-32 lg:p-36 shadow-warm hover:shadow-warm-lg transition-smooth hover-lift stagger-reveal"
      style={{ animationDelay }}
    >
      <div className="flex items-start gap-18 mb-24">
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon 
            name={contact?.icon} 
            size={24} 
            variant="solid" 
            className="text-accent"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-h5 md:text-h4 font-semibold text-text-primary mb-6 line-clamp-2">
            {contact?.title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base line-clamp-2">
            {contact?.description}
          </p>
        </div>
      </div>
      <div className="space-y-18 mb-24">
        {contact?.details?.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-12">
            <Icon 
              name={detail?.icon} 
              size={18} 
              className="text-accent flex-shrink-0 mt-3"
            />
            <p className="text-text-primary text-sm md:text-base font-body">
              {detail?.text}
            </p>
          </div>
        ))}
      </div>
      <WhatsAppButton 
        messageTemplate={contact?.whatsappMessage}
        variant="primary"
        size="default"
        className="w-full"
      />
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes?.shape({
    icon: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    description: PropTypes?.string?.isRequired,
    details: PropTypes?.arrayOf(
      PropTypes?.shape({
        icon: PropTypes?.string?.isRequired,
        text: PropTypes?.string?.isRequired
      })
    )?.isRequired,
    whatsappMessage: PropTypes?.string?.isRequired
  })?.isRequired,
  index: PropTypes?.number?.isRequired
};