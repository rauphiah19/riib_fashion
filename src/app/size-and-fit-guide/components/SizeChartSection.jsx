'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function SizeChartSection({ 
  sizeCharts, 
  selectedCategory, 
  setSelectedCategory, 
  unit, 
  setUnit 
}) {
  const selectedChart = sizeCharts?.find(chart => chart?.category === selectedCategory);

  return (
    <section className="space-y-36 stagger-reveal">
      <div className="text-center space-y-18">
        <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary">
          Size Charts
        </h2>
        <p className="font-body text-base text-text-secondary max-w-[600px] mx-auto">
          Select a category to view detailed sizing information
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-18">
        {sizeCharts?.map((chart) => (
          <button
            key={chart?.category}
            onClick={() => setSelectedCategory(chart?.category)}
            className={`flex items-center gap-12 px-24 py-18 rounded-lg font-caption font-medium transition-smooth hover-lift press-scale focus-ring ${
              selectedCategory === chart?.category
                ? 'bg-primary text-primary-foreground shadow-warm-md'
                : 'bg-card text-text-primary hover:bg-muted shadow-warm'
            }`}
          >
            <Icon name={chart?.icon} size={20} />
            <span>{chart?.category}</span>
          </button>
        ))}
      </div>

      <div className="bg-card rounded-lg shadow-warm-lg p-24 md:p-36 space-y-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-18">
          <div className="space-y-12">
            <h3 className="font-heading text-h4 font-semibold text-text-primary">
              {selectedChart?.category}
            </h3>
            <p className="font-body text-sm text-text-secondary">
              {selectedChart?.description}
            </p>
          </div>
          
          <div className="flex items-center gap-12 bg-muted rounded-md p-6">
            <button
              onClick={() => setUnit('cm')}
              className={`px-18 py-12 rounded-md font-caption font-medium text-sm transition-smooth ${
                unit === 'cm' ?'bg-accent text-accent-foreground shadow-warm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-18 py-12 rounded-md font-caption font-medium text-sm transition-smooth ${
                unit === 'in' ?'bg-accent text-accent-foreground shadow-warm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              IN
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                  Size
                </th>
                {selectedChart?.category === 'Hijabs' ? (
                  <>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Length ({unit})
                    </th>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Width ({unit})
                    </th>
                  </>
                ) : selectedChart?.category === 'Abayas' ? (
                  <>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Height (cm)
                    </th>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Length (cm)
                    </th>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Shoulder (cm)
                    </th>
                  </>
                ) : (
                  <>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Bust (cm)
                    </th>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Waist (cm)
                    </th>
                    <th className="text-center py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                      Hips (cm)
                    </th>
                  </>
                )}
                <th className="text-left py-18 px-12 font-caption font-semibold text-text-primary text-sm md:text-base">
                  Fit Note
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedChart?.sizes?.map((sizeRow, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted transition-smooth">
                  <td className="py-18 px-12 font-data text-sm md:text-base font-medium text-text-primary">
                    {sizeRow?.size}
                  </td>
                  {selectedChart?.category === 'Hijabs' ? (
                    <>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {unit === 'cm' ? sizeRow?.lengthCm : sizeRow?.lengthIn}
                      </td>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {unit === 'cm' ? sizeRow?.widthCm : sizeRow?.widthIn}
                      </td>
                    </>
                  ) : selectedChart?.category === 'Abayas' ? (
                    <>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.height}
                      </td>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.length}
                      </td>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.shoulder}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.bust}
                      </td>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.waist}
                      </td>
                      <td className="text-center py-18 px-12 font-data text-sm md:text-base text-text-secondary">
                        {sizeRow?.hips}
                      </td>
                    </>
                  )}
                  <td className="py-18 px-12 font-body text-xs md:text-sm text-text-secondary">
                    {sizeRow?.fitNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedChart?.measurements && (
          <div className="pt-18 border-t border-border">
            <p className="font-caption text-xs md:text-sm text-text-secondary italic">
              {selectedChart?.measurements}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

SizeChartSection.propTypes = {
  sizeCharts: PropTypes?.arrayOf(
    PropTypes?.shape({
      category: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      sizes: PropTypes?.array?.isRequired
    })
  )?.isRequired,
  selectedCategory: PropTypes?.string?.isRequired,
  setSelectedCategory: PropTypes?.func?.isRequired,
  unit: PropTypes?.string?.isRequired,
  setUnit: PropTypes?.func?.isRequired
};