'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function SizeRecommendationTool({ sizeCharts }) {
  const [category, setCategory] = useState('Ready-to-Wear');
  const [measurements, setMeasurements] = useState({
    bust: '',
    waist: '',
    hips: '',
    height: ''
  });
  const [recommendation, setRecommendation] = useState(null);

  const handleInputChange = (field, value) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
    setRecommendation(null);
  };

  const calculateRecommendation = () => {
    if (category === 'Ready-to-Wear') {
      const { bust, waist, hips } = measurements;
      if (!bust || !waist || !hips) {
        setRecommendation({ error: 'Please enter all measurements' });
        return;
      }

      const bustNum = parseFloat(bust);
      const waistNum = parseFloat(waist);
      const hipsNum = parseFloat(hips);

      const chart = sizeCharts?.find(c => c?.category === 'Ready-to-Wear');
      let recommendedSize = null;
      let confidence = 'low';

      for (const size of chart?.sizes || []) {
        const [bustMin, bustMax] = size?.bust?.split('-')?.map(Number);
        const [waistMin, waistMax] = size?.waist?.split('-')?.map(Number);
        const [hipsMin, hipsMax] = size?.hips?.split('-')?.map(Number);

        const bustFits = bustNum >= bustMin && bustNum <= bustMax;
        const waistFits = waistNum >= waistMin && waistNum <= waistMax;
        const hipsFits = hipsNum >= hipsMin && hipsNum <= hipsMax;

        if (bustFits && waistFits && hipsFits) {
          recommendedSize = size?.size;
          confidence = 'high';
          break;
        } else if ((bustFits && waistFits) || (bustFits && hipsFits) || (waistFits && hipsFits)) {
          recommendedSize = size?.size;
          confidence = 'medium';
        }
      }

      if (!recommendedSize) {
        const maxSize = chart?.sizes?.[chart?.sizes?.length - 1];
        recommendedSize = maxSize?.size;
        confidence = 'low';
      }

      setRecommendation({
        size: recommendedSize,
        confidence,
        message: confidence === 'high' ?'Perfect match! This size should fit you comfortably.'
          : confidence === 'medium' ?'Good fit. Consider trying this size, though some measurements are at the edge of the range.' :'This is our best estimate. We recommend contacting us via WhatsApp for personalized advice.'
      });
    } else if (category === 'Abayas') {
      const { height } = measurements;
      if (!height) {
        setRecommendation({ error: 'Please enter your height' });
        return;
      }

      const heightNum = parseFloat(height);
      const chart = sizeCharts?.find(c => c?.category === 'Abayas');
      let recommendedSize = null;

      for (const size of chart?.sizes || []) {
        const [heightMin, heightMax] = size?.height?.split('-')?.map(Number);
        if (heightNum >= heightMin && heightNum <= heightMax) {
          recommendedSize = size?.size;
          break;
        }
      }

      if (!recommendedSize) {
        recommendedSize = heightNum < 160 ? '52' : '60';
      }

      setRecommendation({
        size: recommendedSize,
        confidence: 'high',
        message: 'Based on your height, this abaya size should provide the perfect length.'
      });
    }
  };

  return (
    <section className="space-y-36">
      <div className="text-center space-y-18">
        <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary">
          Size Recommendation Tool
        </h2>
        <p className="font-body text-base text-text-secondary max-w-[600px] mx-auto">
          Enter your measurements to get a personalized size recommendation
        </p>
      </div>
      <div className="bg-card rounded-lg shadow-warm-lg p-24 md:p-36 space-y-32">
        <div className="flex flex-wrap gap-18">
          {['Ready-to-Wear', 'Abayas']?.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setRecommendation(null);
              }}
              className={`px-24 py-18 rounded-lg font-caption font-medium transition-smooth hover-lift press-scale focus-ring ${
                category === cat
                  ? 'bg-primary text-primary-foreground shadow-warm-md'
                  : 'bg-muted text-text-primary hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {category === 'Ready-to-Wear' ? (
            <>
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Bust (cm)
                </label>
                <input
                  type="number"
                  value={measurements?.bust}
                  onChange={(e) => handleInputChange('bust', e?.target?.value)}
                  placeholder="e.g., 91"
                  className="w-full px-18 py-18 rounded-md border border-border bg-background text-text-primary font-body focus:outline-none focus:ring-3 focus:ring-accent transition-smooth"
                />
              </div>
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Waist (cm)
                </label>
                <input
                  type="number"
                  value={measurements?.waist}
                  onChange={(e) => handleInputChange('waist', e?.target?.value)}
                  placeholder="e.g., 76"
                  className="w-full px-18 py-18 rounded-md border border-border bg-background text-text-primary font-body focus:outline-none focus:ring-3 focus:ring-accent transition-smooth"
                />
              </div>
              <div className="space-y-12">
                <label className="font-caption text-sm font-medium text-text-primary">
                  Hips (cm)
                </label>
                <input
                  type="number"
                  value={measurements?.hips}
                  onChange={(e) => handleInputChange('hips', e?.target?.value)}
                  placeholder="e.g., 99"
                  className="w-full px-18 py-18 rounded-md border border-border bg-background text-text-primary font-body focus:outline-none focus:ring-3 focus:ring-accent transition-smooth"
                />
              </div>
            </>
          ) : (
            <div className="space-y-12">
              <label className="font-caption text-sm font-medium text-text-primary">
                Height (cm)
              </label>
              <input
                type="number"
                value={measurements?.height}
                onChange={(e) => handleInputChange('height', e?.target?.value)}
                placeholder="e.g., 165"
                className="w-full px-18 py-18 rounded-md border border-border bg-background text-text-primary font-body focus:outline-none focus:ring-3 focus:ring-accent transition-smooth"
              />
            </div>
          )}
        </div>

        <button
          onClick={calculateRecommendation}
          className="w-full md:w-auto px-36 py-18 bg-accent text-accent-foreground rounded-lg font-caption font-medium shadow-warm hover:shadow-warm-md transition-smooth hover-lift press-scale focus-ring"
        >
          Get Recommendation
        </button>

        {recommendation && (
          <div className={`p-24 rounded-lg border-l-4 ${
            recommendation?.error
              ? 'bg-error/10 border-error'
              : recommendation?.confidence === 'high' ?'bg-success/10 border-success'
              : recommendation?.confidence === 'medium' ?'bg-warning/10 border-warning' :'bg-muted border-border'
          }`}>
            {recommendation?.error ? (
              <p className="font-body text-sm md:text-base text-error">
                {recommendation?.error}
              </p>
            ) : (
              <div className="space-y-12">
                <div className="flex items-center gap-12">
                  <Icon 
                    name={recommendation?.confidence === 'high' ? 'CheckCircleIcon' : 'InformationCircleIcon'} 
                    size={24} 
                    className={recommendation?.confidence === 'high' ? 'text-success' : 'text-warning'}
                  />
                  <h4 className="font-heading text-lg font-semibold text-text-primary">
                    Recommended Size: {recommendation?.size}
                  </h4>
                </div>
                <p className="font-body text-sm md:text-base text-text-secondary">
                  {recommendation?.message}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

SizeRecommendationTool.propTypes = {
  sizeCharts: PropTypes?.arrayOf(
    PropTypes?.shape({
      category: PropTypes?.string?.isRequired,
      sizes: PropTypes?.array?.isRequired
    })
  )?.isRequired
};