import WhatsAppButton from '@/components/common/WhatsAppButton';
import PropTypes from 'prop-types';

export default function CallToAction({ ctaData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-24 md:space-y-32">
        <div className="space-y-12 md:space-y-18">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground">
            {ctaData?.title}
          </h2>
          <p className="font-body text-sm md:text-base lg:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {ctaData?.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <WhatsAppButton 
            messageTemplate={ctaData?.whatsappMessage}
            variant="default"
            size="large"
          />
        </div>
      </div>
    </section>
  );
}

CallToAction.propTypes = {
  ctaData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    description: PropTypes?.string?.isRequired,
    whatsappMessage: PropTypes?.string?.isRequired
  })?.isRequired
};