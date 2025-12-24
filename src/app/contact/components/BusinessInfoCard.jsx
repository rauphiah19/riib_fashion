import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function BusinessInfoCard({ info }) {
  return (
    <div className="bg-card rounded-lg p-24 md:p-32 lg:p-36 shadow-warm">
      <div className="flex items-start gap-18 mb-24">
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon 
            name={info?.icon} 
            size={24} 
            variant="solid" 
            className="text-primary"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-h5 md:text-h4 font-semibold text-text-primary mb-6 line-clamp-2">
            {info?.title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base line-clamp-2">
            {info?.subtitle}
          </p>
        </div>
      </div>
      <div className="space-y-18">
        {info?.items?.map((item, idx) => (
          <div key={idx} className="flex items-start gap-12">
            <Icon 
              name="CheckCircleIcon" 
              size={18} 
              className="text-accent flex-shrink-0 mt-3"
            />
            <p className="text-text-primary text-sm md:text-base font-body">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

BusinessInfoCard.propTypes = {
  info: PropTypes?.shape({
    icon: PropTypes?.string?.isRequired,
    title: PropTypes?.string?.isRequired,
    subtitle: PropTypes?.string?.isRequired,
    items: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
  })?.isRequired
};