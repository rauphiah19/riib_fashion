'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-18">
      {faqs?.map((faq, index) => (
        <div 
          key={index}
          className="bg-card rounded-lg shadow-warm overflow-hidden transition-smooth"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-24 md:p-32 text-left hover:bg-muted transition-smooth focus-ring"
            aria-expanded={openIndex === index}
          >
            <h4 className="font-heading text-base md:text-lg font-semibold text-text-primary pr-18 line-clamp-2">
              {faq?.question}
            </h4>
            <Icon 
              name="ChevronDownIcon" 
              size={20} 
              className={`text-accent flex-shrink-0 transition-smooth ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-24 md:px-32 pb-24 md:pb-32 pt-0">
              <p className="text-text-secondary text-sm md:text-base font-body leading-relaxed">
                {faq?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

FAQSection.propTypes = {
  faqs: PropTypes?.arrayOf(
    PropTypes?.shape({
      question: PropTypes?.string?.isRequired,
      answer: PropTypes?.string?.isRequired
    })
  )?.isRequired
};