import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function CareInstructions({ instructions }) {
  return (
    <div className="bg-card rounded-lg p-24 md:p-32 shadow-warm space-y-24">
      <h2 className="font-heading text-h4 font-semibold text-text-primary">
        Care Instructions
      </h2>
      <ul className="space-y-18">
        {instructions?.map((instruction, index) => (
          <li key={index} className="flex items-start gap-12">
            <Icon 
              name="SparklesIcon" 
              size={20} 
              className="text-accent flex-shrink-0 mt-3" 
            />
            <span className="font-body text-base text-text-secondary">
              {instruction}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

CareInstructions.propTypes = {
  instructions: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
};