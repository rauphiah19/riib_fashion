'use client';

import PropTypes from 'prop-types';
import HeroSection from './HeroSection';
import FeaturedCollections from './FeaturedCollections';
import BrandStoryTeaser from './BrandStoryTeaser';

export default function HomeInteractive({ heroData, featuredProducts, brandStory }) {
  return (
    <div className="w-full">
      <HeroSection heroData={heroData} />
      <FeaturedCollections collections={featuredProducts} />
      <BrandStoryTeaser storyData={brandStory} />
    </div>
  );
}

HomeInteractive.propTypes = {
  heroData: PropTypes?.shape({
    backgroundImage: PropTypes?.string?.isRequired,
    imageAlt: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    subtitle: PropTypes?.string?.isRequired,
    whatsappMessage: PropTypes?.string?.isRequired
  })?.isRequired,
  featuredProducts: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string,
      price: PropTypes?.number?.isRequired,
      originalPrice: PropTypes?.number,
      image: PropTypes?.string?.isRequired,
      badge: PropTypes?.string
    })
  )?.isRequired,
  brandStory: PropTypes?.shape({
    image: PropTypes?.string?.isRequired,
    imageAlt: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    description: PropTypes?.string?.isRequired,
    highlights: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
  })?.isRequired
};