'use client';

import Icon from '@/components/ui/AppIcon';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function ConsultationCTA() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-36 md:p-48 text-center space-y-24">
      <div className="flex justify-center">
        <div className="w-[72px] h-[72px] rounded-full bg-accent flex items-center justify-center shadow-warm-lg">
          <Icon name="ChatBubbleLeftRightIcon" size={36} className="text-accent-foreground" variant="solid" />
        </div>
      </div>
      
      <div className="space-y-18 max-w-[600px] mx-auto">
        <h2 className="font-heading text-h3 md:text-h2 font-bold text-text-primary">
          Still Unsure About Your Size?
        </h2>
        <p className="font-body text-base md:text-lg text-text-secondary">
          Our sizing experts are here to help! Get personalized recommendations via WhatsApp. We typically respond within 2-4 hours during business hours.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-18 justify-center items-center">
        <WhatsAppButton 
          messageTemplate="Hello RIIB Fashion! I need help finding the right size. Could you assist me with personalized sizing recommendations?"
          variant="primary"
          size="large"
        />
      </div>

      <div className="pt-24 border-t border-border/50 space-y-12">
        <p className="font-caption text-sm text-text-secondary">
          <Icon name="ClockIcon" size={16} className="inline mr-6" />
          Available Mon-Sat, 9 AM - 6 PM WAT
        </p>
      </div>
    </section>
  );
}