'use client';

import PropTypes from 'prop-types';
import Icon from '@/components/ui/AppIcon';

export default function SocialShare({ product }) {
  const shareUrl = typeof window !== 'undefined' ? window.location?.href : '';
  const shareText = `Check out ${product?.name} from RIIB Fashion - ₦${product?.price?.toLocaleString()}`;

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${shareText}\n${shareUrl}`);
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    if (navigator.clipboard && shareUrl) {
      navigator.clipboard?.writeText(shareUrl)?.then(() => {
        alert('Link copied to clipboard!');
      })?.catch(() => {
        alert('Failed to copy link');
      });
    }
  };

  return (
    <div className="bg-card rounded-lg p-24 md:p-32 shadow-warm space-y-18">
      <h3 className="font-heading text-h5 font-semibold text-text-primary">
        Share This Product
      </h3>

      <div className="flex items-center gap-12">
        <button
          onClick={handleWhatsAppShare}
          className="flex items-center justify-center gap-12 px-24 py-12 bg-accent text-accent-foreground rounded-md font-caption font-medium text-sm transition-smooth hover-lift press-scale focus-ring shadow-warm hover:shadow-warm-md"
          aria-label="Share on WhatsApp"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-12 px-24 py-12 border-2 border-border text-text-primary rounded-md font-caption font-medium text-sm transition-smooth hover-lift press-scale focus-ring hover:bg-muted"
          aria-label="Copy link"
        >
          <Icon name="LinkIcon" size={20} />
          <span>Copy Link</span>
        </button>
      </div>
    </div>
  );
}

SocialShare.propTypes = {
  product: PropTypes?.shape({
    name: PropTypes?.string?.isRequired,
    price: PropTypes?.number?.isRequired
  })?.isRequired
};