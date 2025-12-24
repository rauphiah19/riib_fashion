import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function ProductInfo({ product }) {
  const usdPrice = (product?.price / 1650)?.toFixed(2);

  return (
    <div className="space-y-24">
      <div className="space-y-12">
        <h1 className="font-heading text-h2 md:text-h1 font-semibold text-text-primary">
          {product?.name}
        </h1>
        
        {product?.badge && (
          <span className="inline-block bg-accent text-accent-foreground px-18 py-6 rounded-md font-caption font-medium text-sm shadow-warm">
            {product?.badge}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-18 pb-24 border-b border-border">
        <div className="space-y-6">
          <p className="font-data text-data font-semibold text-primary text-3xl md:text-4xl">
            ₦{product?.price?.toLocaleString()}
          </p>
          <p className="font-caption text-sm text-text-secondary">
            Approximately ${usdPrice} USD
          </p>
        </div>
        
        {product?.originalPrice && (
          <p className="font-data text-data text-xl text-text-secondary line-through">
            ₦{product?.originalPrice?.toLocaleString()}
          </p>
        )}
      </div>
      <div className="space-y-18">
        <div className="flex items-center gap-12">
          <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
          <span className="font-caption text-base text-text-primary">
            {product?.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex items-center gap-12">
          <Icon name="TruckIcon" size={20} className="text-accent" />
          <span className="font-caption text-base text-text-secondary">
            Ships within 2-3 business days
          </span>
        </div>

        <div className="flex items-center gap-12">
          <Icon name="MapPinIcon" size={20} className="text-accent" />
          <span className="font-caption text-base text-text-secondary">
            Made in Nigeria
          </span>
        </div>
      </div>
      <div className="pt-24 space-y-12">
        <h2 className="font-heading text-h4 font-semibold text-text-primary">
          Description
        </h2>
        <p className="font-body text-base text-text-secondary leading-relaxed">
          {product?.description}
        </p>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes?.shape({
    name: PropTypes?.string?.isRequired,
    price: PropTypes?.number?.isRequired,
    originalPrice: PropTypes?.number,
    description: PropTypes?.string?.isRequired,
    badge: PropTypes?.string,
    inStock: PropTypes?.bool?.isRequired
  })?.isRequired
};