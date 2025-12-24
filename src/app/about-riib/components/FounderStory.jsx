import AppImage from '@/components/ui/AppImage';
import PropTypes from 'prop-types';

export default function FounderStory({ founderData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-lg shadow-warm-lg">
            <AppImage
              src={founderData?.image}
              alt={founderData?.alt}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            <div className="space-y-12 md:space-y-18">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                {founderData?.title}
              </h2>
              <div className="w-24 md:w-32 h-1 bg-accent"></div>
            </div>

            <div className="space-y-18 md:space-y-24">
              {founderData?.story?.map((paragraph, index) => (
                <p 
                  key={index}
                  className="font-body text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 md:pt-12 border-t border-border">
              <p className="font-caption text-sm md:text-base text-text-primary font-medium">
                {founderData?.founderName}
              </p>
              <p className="font-caption text-xs md:text-sm text-accent">
                {founderData?.founderTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FounderStory.propTypes = {
  founderData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    image: PropTypes?.string?.isRequired,
    alt: PropTypes?.string?.isRequired,
    story: PropTypes?.arrayOf(PropTypes?.string)?.isRequired,
    founderName: PropTypes?.string?.isRequired,
    founderTitle: PropTypes?.string?.isRequired
  })?.isRequired
};