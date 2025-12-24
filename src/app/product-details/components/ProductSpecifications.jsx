import PropTypes from 'prop-types';

export default function ProductSpecifications({ specifications }) {
  return (
    <div className="bg-card rounded-lg p-24 md:p-32 shadow-warm space-y-24">
      <h2 className="font-heading text-h4 font-semibold text-text-primary">
        Product Specifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-18">
        {specifications?.map((spec, index) => (
          <div key={index} className="space-y-6">
            <dt className="font-caption text-sm font-medium text-text-secondary uppercase tracking-wide">
              {spec?.label}
            </dt>
            <dd className="font-body text-base text-text-primary">
              {spec?.value}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductSpecifications.propTypes = {
  specifications: PropTypes?.arrayOf(
    PropTypes?.shape({
      label: PropTypes?.string?.isRequired,
      value: PropTypes?.string?.isRequired
    })
  )?.isRequired
};