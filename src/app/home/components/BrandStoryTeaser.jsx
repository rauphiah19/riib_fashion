'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function BrandStoryTeaser({ storyData }) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full py-48 md:py-64 lg:py-80 px-4 md:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 md:gap-48 lg:gap-60 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-warm-lg">
            <AppImage
              src={imageError ? '/assets/images/no_image.png' : storyData?.image}
              alt={storyData?.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            <div className="space-y-18 md:space-y-24">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
                {storyData?.title}
              </h2>
              <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">
                {storyData?.description}
              </p>
            </div>

            <div className="space-y-18">
              {storyData?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-start gap-18">
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon 
                      name="CheckIcon" 
                      size={16} 
                      variant="solid" 
                      className="text-accent"
                    />
                  </div>
                  <p className="font-body text-sm md:text-base text-text-secondary pt-4">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about-riib"
              className="inline-flex items-center gap-12 font-caption font-medium text-base md:text-lg text-primary hover:text-accent transition-smooth group"
            >
              <span>Learn More About RIIB</span>
              <Icon 
                name="ArrowRightIcon" 
                size={20} 
                className="transition-smooth group-hover:translate-x-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

BrandStoryTeaser.propTypes = {
  storyData: PropTypes?.shape({
    image: PropTypes?.string?.isRequired,
    imageAlt: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    description: PropTypes?.string?.isRequired,
    highlights: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
  })?.isRequired
};