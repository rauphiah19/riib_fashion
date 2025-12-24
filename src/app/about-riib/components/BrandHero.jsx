import AppImage from '@/components/ui/AppImage';
import PropTypes from 'prop-types';

export default function BrandHero({ heroData }) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AppImage
        src={heroData?.image}
        alt={heroData?.alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl text-center space-y-18 md:space-y-24">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {heroData?.title}
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl text-text-primary max-w-2xl mx-auto">
            {heroData?.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

BrandHero.propTypes = {
  heroData: PropTypes?.shape({
    image: PropTypes?.string?.isRequired,
    alt: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    subtitle: PropTypes?.string?.isRequired
  })?.isRequired
};