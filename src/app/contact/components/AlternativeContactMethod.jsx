import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function AlternativeContactMethod({ method }) {
  const handleClick = () => {
    if (method?.type === 'email') {
      window.location.href = `mailto:${method?.value}`;
    } else if (method?.type === 'phone') {
      window.location.href = `tel:${method?.value}`;
    } else if (method?.type === 'social') {
      window.open(method?.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-18 p-18 md:p-24 bg-card rounded-lg shadow-warm hover:shadow-warm-md transition-smooth hover-lift press-scale focus-ring w-full text-left"
    >
      <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 bg-accent/10 rounded-lg flex items-center justify-center">
        <Icon 
          name={method?.icon} 
          size={24} 
          variant="solid" 
          className="text-accent"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-caption text-sm md:text-base font-medium text-text-secondary mb-3">
          {method?.label}
        </p>
        <p className="text-text-primary text-sm md:text-base font-body line-clamp-1">
          {method?.value}
        </p>
      </div>
      <Icon 
        name="ChevronRightIcon" 
        size={20} 
        className="text-text-secondary flex-shrink-0"
      />
    </button>
  );
}

AlternativeContactMethod.propTypes = {
  method: PropTypes?.shape({
    icon: PropTypes?.string?.isRequired,
    label: PropTypes?.string?.isRequired,
    value: PropTypes?.string?.isRequired,
    type: PropTypes?.oneOf(['email', 'phone', 'social', 'address'])?.isRequired,
    link: PropTypes?.string
  })?.isRequired
};