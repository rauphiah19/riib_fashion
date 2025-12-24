'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import AppImage from '@/components/ui/AppImage';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function HeroSection({ heroData }) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <div className="absolute inset-0 bg-muted">
        <AppImage
          src={imageError ? '/assets/images/no_image.png' : heroData?.backgroundImage}
          alt={heroData?.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      </div>
      <div className="relative h-full flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-24 md:space-y-32 lg:space-y-36">
          <div className="space-y-18 md:space-y-24">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              {heroData?.title}
            </h1>
            <p className="font-body text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto">
              {heroData?.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-18 md:gap-24">
            <WhatsAppButton
              messageTemplate={heroData?.whatsappMessage}
              variant="primary"
              size="large"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  heroData: PropTypes?.shape({
    backgroundImage: PropTypes?.string?.isRequired,
    imageAlt: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    subtitle: PropTypes?.string?.isRequired,
    whatsappMessage: PropTypes?.string?.isRequired
  })?.isRequired
};