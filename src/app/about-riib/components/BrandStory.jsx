import PropTypes from 'prop-types';

export default function BrandStory({ storyData }) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-24 md:space-y-32 lg:space-y-48">
        <div className="text-center space-y-12 md:space-y-18">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
            {storyData?.title}
          </h2>
          <div className="w-24 md:w-32 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-18 md:space-y-24">
          {storyData?.paragraphs?.map((paragraph, index) => (
            <p 
              key={index}
              className="font-body text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

BrandStory.propTypes = {
  storyData: PropTypes?.shape({
    title: PropTypes?.string?.isRequired,
    paragraphs: PropTypes?.arrayOf(PropTypes?.string)?.isRequired
  })?.isRequired
};