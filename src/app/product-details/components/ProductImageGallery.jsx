'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function ProductImageGallery({ images, productName }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images?.length - 1 : prev - 1));
    setImageError(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images?.length - 1 ? 0 : prev + 1));
    setImageError(false);
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    setImageError(false);
  };

  return (
    <div className="space-y-18">
      <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-warm-md">
        <AppImage
          src={imageError ? '/assets/images/no_image.png' : images?.[selectedImageIndex]?.url}
          alt={images?.[selectedImageIndex]?.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onError={() => setImageError(true)}
        />

        {images?.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-18 top-1/2 -translate-y-1/2 w-48 h-48 bg-background/90 hover:bg-background rounded-full shadow-warm-md transition-smooth hover-lift press-scale focus-ring flex items-center justify-center"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeftIcon" size={24} className="text-text-primary" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-18 top-1/2 -translate-y-1/2 w-48 h-48 bg-background/90 hover:bg-background rounded-full shadow-warm-md transition-smooth hover-lift press-scale focus-ring flex items-center justify-center"
              aria-label="Next image"
            >
              <Icon name="ChevronRightIcon" size={24} className="text-text-primary" />
            </button>

            <div className="absolute bottom-18 left-1/2 -translate-x-1/2 bg-background/90 px-18 py-6 rounded-full shadow-warm">
              <span className="font-caption text-sm text-text-primary">
                {selectedImageIndex + 1} / {images?.length}
              </span>
            </div>
          </>
        )}
      </div>
      {images?.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-12">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-md overflow-hidden transition-smooth hover-lift press-scale focus-ring ${
                selectedImageIndex === index
                  ? 'ring-3 ring-accent shadow-warm-md'
                  : 'opacity-60 hover:opacity-100'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <AppImage
                src={image?.url}
                alt={image?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 16vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

ProductImageGallery.propTypes = {
  images: PropTypes?.arrayOf(
    PropTypes?.shape({
      url: PropTypes?.string?.isRequired,
      alt: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  productName: PropTypes?.string?.isRequired
};