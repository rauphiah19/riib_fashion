import AppImage from '@/components/ui/AppImage';
import PropTypes from 'prop-types';

export default function CraftsmanshipSection({ craftsmanshipData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 md:space-y-18 mb-12 md:mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
            {craftsmanshipData?.title}
          </h2>
          <div className="w-24 md:w-32 h-1 bg-accent mx-auto"></div>
          <p className="font-body text-sm md:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto">
            {craftsmanshipData?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {craftsmanshipData?.features?.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-smooth hover-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                  src={feature?.image}
                  alt={feature?.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 lg:p-8 space-y-12 md:space-y-18">
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-medium text-text-primary line-clamp-2">
                  {feature?.title}
                </h3>
                <p className="font-body text-sm md:text-base text-text-secondary line-clamp-3">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

CraftsmanshipSection.propTypes = {
  craftsmanshipData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    description: PropTypes?.string?.isRequired,
    features: PropTypes?.arrayOf(
      PropTypes?.shape({
        title: PropTypes?.string?.isRequired,
        description: PropTypes?.string?.isRequired,
        image: PropTypes?.string?.isRequired,
        alt: PropTypes?.string?.isRequired
      })
    )?.isRequired
  })?.isRequired
};