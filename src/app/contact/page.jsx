import MainNavigation from '@/components/common/MainNavigation';
import ContactInteractive from './components/ContactInteractive';

export const metadata = {
  title: 'Contact Us - RIIB Fashion',
  description: 'Get in touch with RIIB Fashion through WhatsApp, email, or visit our showroom in Lagos, Nigeria. We respond within 2-4 hours during business hours.'
};

export default function ContactPage() {
  const contactOptions = [
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'General Inquiries',
      description: 'Questions about our products, collections, or brand',
      details: [
        { icon: 'ClockIcon', text: 'Response time: 2-4 hours' },
        { icon: 'CalendarIcon', text: 'Available: Mon-Sat, 9 AM - 6 PM WAT' }
      ],
      whatsappMessage: 'Hello RIIB Fashion! I have a general inquiry about your products and collections.'
    },
    {
      icon: 'SparklesIcon',
      title: 'Custom Orders',
      description: 'Bespoke designs and personalized fashion pieces',
      details: [
        { icon: 'ClockIcon', text: 'Response time: 4-6 hours' },
        { icon: 'CalendarIcon', text: 'Consultation: By appointment' }
      ],
      whatsappMessage: 'Hello RIIB Fashion! I am interested in placing a custom order. Could you provide details about the process and pricing?'
    },
    {
      icon: 'ShoppingBagIcon',
      title: 'Order Support',
      description: 'Track orders, returns, and shipping inquiries',
      details: [
        { icon: 'ClockIcon', text: 'Response time: 1-2 hours' },
        { icon: 'CalendarIcon', text: 'Available: Mon-Sat, 9 AM - 6 PM WAT' }
      ],
      whatsappMessage: 'Hello RIIB Fashion! I need assistance with my order. Order reference: [Your Order Number]'
    }
  ];

  const alternativeMethods = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email Address',
      value: 'hello@riibfashion.com',
      type: 'email'
    },
    {
      icon: 'PhoneIcon',
      label: 'Phone Number',
      value: '+234 801 234 5678',
      type: 'phone'
    },
    {
      icon: 'GlobeAltIcon',
      label: 'Instagram',
      value: '@riibfashion',
      type: 'social',
      link: 'https://instagram.com/riibfashion'
    },
    {
      icon: 'MapPinIcon',
      label: 'Physical Address',
      value: '123 Fashion Avenue, Victoria Island, Lagos',
      type: 'address'
    }
  ];

  const businessInfo = [
    {
      icon: 'BuildingStorefrontIcon',
      title: 'Business Information',
      subtitle: 'Registered Nigerian fashion brand',
      items: [
        'CAC Registration: RC 1234567',
        'Tax ID: 12345678-0001',
        'Established: 2020',
        'Made in Nigeria with pride'
      ]
    },
    {
      icon: 'TruckIcon',
      title: 'Shipping & Delivery',
      subtitle: 'Local and international shipping available',
      items: [
        'Lagos delivery: 1-2 business days',
        'Nigeria-wide: 3-5 business days',
        'International: 7-14 business days',
        'Free shipping on orders above ₦50,000'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I place an order through WhatsApp?',
      answer: 'Simply click any "WhatsApp Us" button on our website. Send us the product details you are interested in, and our team will guide you through the ordering process, including payment options and delivery arrangements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, card payments, and mobile money transfers. Payment details will be shared via WhatsApp after you confirm your order. We ensure secure transactions for all customers.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to customers worldwide. International shipping takes 7-14 business days depending on your location. Shipping costs are calculated based on destination and package weight.'
    },
    {
      question: 'Can I return or exchange items?',
      answer: 'We accept returns and exchanges within 7 days of delivery for unworn items with original tags. Contact us via WhatsApp with your order details and reason for return. Custom orders are non-refundable.'
    },
    {
      question: 'How long does it take to create custom orders?',
      answer: 'Custom orders typically take 2-4 weeks depending on design complexity and current workload. We will provide an estimated completion date during your consultation via WhatsApp.'
    },
    {
      question: 'Are your products authentic and original?',
      answer: 'Absolutely! All RIIB Fashion products are designed and crafted in Nigeria with premium materials. We take pride in our authentic modest fashion pieces and guarantee quality craftsmanship.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-[60px]">
        <div className="bg-gradient-to-b from-accent/5 to-background py-48 md:py-64 lg:py-80">
          <div className="max-w-7xl mx-auto px-24 md:px-36 lg:px-48">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-18 md:mb-24">
                Contact RIIB Fashion
              </h1>
              <p className="text-text-secondary text-base md:text-lg lg:text-xl font-body leading-relaxed">
                We are here to help with your modest fashion needs. Reach out via WhatsApp for the fastest response, or use any of our alternative contact methods below.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-24 md:px-36 lg:px-48 py-48 md:py-64 lg:py-80">
          <ContactInteractive 
            contactOptions={contactOptions}
            alternativeMethods={alternativeMethods}
            businessInfo={businessInfo}
            faqs={faqs}
          />
        </div>

        <div className="bg-gradient-to-t from-accent/5 to-background py-48 md:py-64 lg:py-80">
          <div className="max-w-4xl mx-auto px-24 md:px-36 lg:px-48 text-center">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-18 md:mb-24">
              Ready to Elevate Your Modest Fashion?
            </h2>
            <p className="text-text-secondary text-base md:text-lg font-body mb-32 md:mb-36">
              Browse our collections and start your style journey with RIIB Fashion today.
            </p>
            <div className="flex flex-col sm:flex-row gap-18 justify-center">
              <a
                href="/collections"
                className="inline-flex items-center justify-center px-36 py-18 bg-primary text-primary-foreground font-caption font-medium rounded-md shadow-warm hover:shadow-warm-md transition-smooth hover-lift press-scale focus-ring text-base md:text-lg"
              >
                View Collections
              </a>
              <a
                href="/home"
                className="inline-flex items-center justify-center px-36 py-18 border-2 border-accent text-accent font-caption font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-smooth press-scale focus-ring text-base md:text-lg"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card border-t border-border py-36 md:py-48">
        <div className="max-w-7xl mx-auto px-24 md:px-36 lg:px-48">
          <div className="text-center">
            <p className="text-text-secondary text-sm md:text-base font-body mb-12">
              © {new Date()?.getFullYear()} RIIB Fashion. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm font-caption">
              Elegant Modesty, Made in Nigeria
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}