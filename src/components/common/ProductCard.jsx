'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import WhatsAppButton from './WhatsAppButton';

export default function ProductCard({ product, index = 0 }) {
  const [imageError, setImageError] = useState(false);

  if (!product) return null;

  const animationDelay = `${index * 150}ms`;

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-smooth hover-lift stagger-reveal"
      style={{ animationDelay }}
    >
      <Link href={`/product-details?id=${product?.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <AppImage
            src={imageError ? '/assets/images/no_image.png' : product?.image}
            alt={product?.name}
            fill
            className="object-cover transition-smooth group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
          
          {product?.badge && (
            <div className="absolute top-18 right-18 bg-accent text-accent-foreground px-18 py-6 rounded-md font-caption font-medium text-sm shadow-warm">
              {product?.badge}
            </div>
          )}
        </div>
      </Link>
      <div className="p-24 space-y-18">
        <Link href={`/product-details?id=${product?.id}`}>
          <h3 className="font-heading text-h5 font-semibold text-text-primary line-clamp-2 transition-smooth group-hover:text-primary">
            {product?.name}
          </h3>
        </Link>

        {product?.description && (
          <p className="text-text-secondary text-sm line-clamp-3 font-body">
            {product?.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-12 border-t border-border">
          <div className="space-y-6">
            <p className="font-data text-data font-medium text-primary text-lg">
              ₦{product?.price?.toLocaleString()}
            </p>
            {product?.originalPrice && (
              <p className="font-data text-data text-sm text-text-secondary line-through">
                ₦{product?.originalPrice?.toLocaleString()}
              </p>
            )}
          </div>

          <WhatsAppButton 
            product={product}
            variant="outline"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}