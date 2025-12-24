import PropTypes from 'prop-types';
import ProductCard from '@/components/common/ProductCard';

export default function ProductGrid({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 md:gap-32 lg:gap-36">
        {[...Array(8)]?.map((_, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg overflow-hidden shadow-warm animate-pulse"
          >
            <div className="aspect-[3/4] bg-muted"></div>
            <div className="p-24 space-y-18">
              <div className="h-24 bg-muted rounded w-3/4"></div>
              <div className="h-18 bg-muted rounded w-full"></div>
              <div className="h-18 bg-muted rounded w-2/3"></div>
              <div className="flex items-center justify-between pt-12 border-t border-border">
                <div className="h-24 bg-muted rounded w-1/3"></div>
                <div className="h-36 bg-muted rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-64 md:py-96 lg:py-128 px-24">
        <div className="w-96 h-96 md:w-128 md:h-128 lg:w-160 lg:h-160 mb-32 opacity-40">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-text-secondary"
            />
          </svg>
        </div>
        <h3 className="font-heading text-h4 md:text-h3 font-semibold text-text-primary mb-12 text-center">
          No Products Found
        </h3>
        <p className="font-body text-base md:text-lg text-text-secondary text-center max-w-md">
          We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 md:gap-32 lg:gap-36">
      {products?.map((product, index) => (
        <ProductCard 
          key={product?.id} 
          product={product} 
          index={index}
        />
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string,
      price: PropTypes?.number?.isRequired,
      originalPrice: PropTypes?.number,
      image: PropTypes?.string?.isRequired,
      category: PropTypes?.string?.isRequired,
      badge: PropTypes?.string,
      featured: PropTypes?.bool,
      dateAdded: PropTypes?.string
    })
  )?.isRequired,
  isLoading: PropTypes?.bool?.isRequired
};