'use client';

import ContactCard from './ContactCard';
import AlternativeContactMethod from './AlternativeContactMethod';
import BusinessInfoCard from './BusinessInfoCard';
import FAQSection from './FAQSection';
import MapSection from './MapSection';

export default function ContactInteractive({ contactOptions, alternativeMethods, businessInfo, faqs }) {
  return (
    <div className="space-y-48 md:space-y-64 lg:space-y-80">
      <section>
        <div className="text-center mb-36 md:mb-48">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-12 md:mb-18">
            Get in Touch via WhatsApp
          </h2>
          <p className="text-text-secondary text-sm md:text-base lg:text-lg font-body max-w-2xl mx-auto">
            We respond within 2-4 hours during business hours. Choose your preferred contact method below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-32 lg:gap-36">
          {contactOptions?.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>
      </section>
      <section>
        <div className="text-center mb-36 md:mb-48">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-12 md:mb-18">
            Alternative Contact Methods
          </h2>
          <p className="text-text-secondary text-sm md:text-base lg:text-lg font-body max-w-2xl mx-auto">
            Reach us through email, phone, or social media platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-24 max-w-4xl mx-auto">
          {alternativeMethods?.map((method, index) => (
            <AlternativeContactMethod key={index} method={method} />
          ))}
        </div>
      </section>
      <section>
        <MapSection />
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 lg:gap-36">
          {businessInfo?.map((info, index) => (
            <BusinessInfoCard key={index} info={info} />
          ))}
        </div>
      </section>
      <section>
        <div className="text-center mb-36 md:mb-48">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-12 md:mb-18">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm md:text-base lg:text-lg font-body max-w-2xl mx-auto">
            Quick answers to common questions about ordering and shipping.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </div>
  );
}