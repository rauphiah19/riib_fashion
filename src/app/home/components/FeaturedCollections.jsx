'use client';

import PropTypes from 'prop-types';
import ProductCard from '@/components/common/ProductCard';

export default function FeaturedCollections({ collections }) {
  return (
    <section className="w-full py-48 md:py-64 lg:py-80 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-18 md:space-y-24 mb-36 md:mb-48 lg:mb-60">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
            Featured Collections
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our handpicked selection of elegant modest fashion pieces, crafted with care in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 md:gap-32 lg:gap-36">
          {collections?.map((product, index) => (
            <ProductCard 
              key={product?.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

FeaturedCollections.propTypes = {
  collections: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string,
      price: PropTypes?.number?.isRequired,
      originalPrice: PropTypes?.number,
      image: PropTypes?.string?.isRequired,
      badge: PropTypes?.string
    })
  )?.isRequired
};