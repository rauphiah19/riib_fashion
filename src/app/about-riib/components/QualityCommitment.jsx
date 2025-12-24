import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function QualityCommitment({ commitmentData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12 md:space-y-18 mb-12 md:mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
            {commitmentData?.title}
          </h2>
          <div className="w-24 md:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {commitmentData?.commitments?.map((commitment, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 md:p-8 space-y-18 md:space-y-24 text-center shadow-warm hover:shadow-warm-md transition-smooth hover-lift"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon 
                    name={commitment?.icon} 
                    size={32}
                    className="text-accent"
                    variant="solid"
                  />
                </div>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-medium text-text-primary line-clamp-2">
                {commitment?.title}
              </h3>
              <p className="font-body text-sm md:text-base text-text-secondary line-clamp-3">
                {commitment?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

QualityCommitment.propTypes = {
  commitmentData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    commitments: PropTypes?.arrayOf(
      PropTypes?.shape({
        icon: PropTypes?.string?.isRequired,
        title: PropTypes?.string?.isRequired,
        description: PropTypes?.string?.isRequired
      })
    )?.isRequired
  })?.isRequired
};