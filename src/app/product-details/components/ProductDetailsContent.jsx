'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PropTypes from 'prop-types';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import ProductSpecifications from './ProductSpecifications';
import CareInstructions from './CareInstructions';
import SocialShare from './SocialShare';
import RelatedProducts from './RelatedProducts';
import WhatsAppButton from '@/components/common/WhatsAppButton';

function ProductDetailsInner({ allProducts }) {
  const searchParams = useSearchParams();
  const productId = searchParams?.get('id');

  const product = allProducts?.find(p => p?.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-18">
          <h1 className="font-heading text-h2 font-semibold text-text-primary">
            Product Not Found
          </h1>
          <p className="font-body text-base text-text-secondary">
            The product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts?.filter(p => p?.id !== product?.id && p?.category === product?.category)?.slice(0, 4);

  return (
    <div className="space-y-64 md:space-y-96">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 md:gap-48">
        <ProductImageGallery images={product?.images} productName={product?.name} />

        <div className="space-y-32">
          <ProductInfo product={product} />

          <WhatsAppButton
            product={product}
            variant="primary"
            size="large"
            className="w-full"
          />

          <SocialShare product={product} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32">
        <ProductSpecifications specifications={product?.specifications} />
        <CareInstructions instructions={product?.careInstructions} />
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}

ProductDetailsInner.propTypes = {
  allProducts: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      price: PropTypes?.number?.isRequired,
      category: PropTypes?.string?.isRequired,
      images: PropTypes?.arrayOf(
        PropTypes?.shape({
          url: PropTypes?.string?.isRequired,
          alt: PropTypes?.string?.isRequired
        })
      )?.isRequired,
      specifications: PropTypes?.arrayOf(
        PropTypes?.shape({
          label: PropTypes?.string?.isRequired,
          value: PropTypes?.string?.isRequired
        })
      )?.isRequired,
      careInstructions: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
    })
  )?.isRequired
};

export default function ProductDetailsContent({ allProducts }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-18">
          <div className="w-64 h-64 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="font-caption text-base text-text-secondary">Loading product details...</p>
        </div>
      </div>
    }>
      <ProductDetailsInner allProducts={allProducts} />
    </Suspense>
  );
}

ProductDetailsContent.propTypes = {
  allProducts: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      price: PropTypes?.number?.isRequired,
      category: PropTypes?.string?.isRequired
    })
  )?.isRequired
};