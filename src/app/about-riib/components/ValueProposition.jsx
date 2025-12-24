import AppImage from '@/components/ui/AppImage';
import PropTypes from 'prop-types';

export default function ValueProposition({ valueData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-24 md:space-y-32">
            <div className="space-y-12 md:space-y-18">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                {valueData?.title}
              </h2>
              <div className="w-24 md:w-32 h-1 bg-accent"></div>
            </div>

            <div className="space-y-18 md:space-y-24">
              {valueData?.points?.map((point, index) => (
                <div key={index} className="space-y-12">
                  <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-medium text-text-primary">
                    {point?.heading}
                  </h3>
                  <p className="font-body text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed">
                    {point?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg shadow-warm-lg">
            <AppImage
              src={valueData?.image}
              alt={valueData?.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ValueProposition.propTypes = {
  valueData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    image: PropTypes?.string?.isRequired,
    alt: PropTypes?.string?.isRequired,
    points: PropTypes?.arrayOf(
      PropTypes?.shape({
        heading: PropTypes?.string?.isRequired,
        description: PropTypes?.string?.isRequired
      })
    )?.isRequired
  })?.isRequired
};