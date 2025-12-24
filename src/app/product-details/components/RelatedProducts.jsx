import PropTypes from 'prop-types';
import ProductCard from '@/components/common/ProductCard';

export default function RelatedProducts({ products }) {
  if (!products || products?.length === 0) return null;

  return (
    <section className="py-48 md:py-64">
      <div className="space-y-32">
        <div className="text-center space-y-12">
          <h2 className="font-heading text-h3 md:text-h2 font-semibold text-text-primary">
            You May Also Like
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Discover more elegant pieces from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 md:gap-32">
          {products?.map((product, index) => (
            <ProductCard key={product?.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

RelatedProducts.propTypes = {
  products: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      price: PropTypes?.number?.isRequired,
      image: PropTypes?.string?.isRequired,
      description: PropTypes?.string
    })
  )?.isRequired
};