'use client';

import Icon from '@/components/ui/AppIcon';

export default function WhatsAppButton({ 
  product = null, 
  messageTemplate = null,
  variant = 'default',
  className = '',
  size = 'default'
}) {
  const phoneNumber = '2348012345678';

  const generateMessage = () => {
    if (messageTemplate) {
      return messageTemplate;
    }
    
    if (product) {
      return `Hello! I'm interested in the ${product?.name}. Price: ₦${product?.price?.toLocaleString()}. Could you provide more details?`;
    }
    
    return 'Hello! I would like to inquire about your products.';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(generateMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const sizeClasses = {
    small: 'px-24 py-12 text-sm',
    default: 'px-32 py-18 text-base',
    large: 'px-36 py-18 text-lg'
  };

  const variantClasses = {
    default: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm hover:shadow-warm-md',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:shadow-warm-md',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground'
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        inline-flex items-center justify-center gap-12 
        font-caption font-medium rounded-md
        transition-smooth hover-lift press-scale
        focus-ring
        ${sizeClasses?.[size]}
        ${variantClasses?.[variant]}
        ${className}
      `}
      aria-label="Contact via WhatsApp"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
      <span>WhatsApp Us</span>
    </button>
  );
}