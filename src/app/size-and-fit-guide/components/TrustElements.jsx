'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function TrustElements({ trustElements }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36">
      <div className="bg-success/10 border border-success/30 rounded-lg p-24 md:p-32 space-y-18">
        <div className="flex items-center gap-12">
          <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-success flex items-center justify-center">
            <Icon name="ShieldCheckIcon" size={24} className="text-success-foreground" />
          </div>
          <h3 className="font-heading text-h5 font-semibold text-text-primary">
            Fit Guarantee
          </h3>
        </div>
        <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
          {trustElements?.fitGuarantee}
        </p>
      </div>

      <div className="bg-accent/10 border border-accent/30 rounded-lg p-24 md:p-32 space-y-18">
        <div className="flex items-center gap-12">
          <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-accent flex items-center justify-center">
            <Icon name="ArrowPathIcon" size={24} className="text-accent-foreground" />
          </div>
          <h3 className="font-heading text-h5 font-semibold text-text-primary">
            Exchange Policy
          </h3>
        </div>
        <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
          {trustElements?.exchangePolicy}
        </p>
      </div>
    </section>
  );
}

TrustElements.propTypes = {
  trustElements: PropTypes?.shape({
    fitGuarantee: PropTypes?.string?.isRequired,
    exchangePolicy: PropTypes?.string?.isRequired
  })?.isRequired
};