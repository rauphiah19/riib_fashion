import MainNavigation from '@/components/common/MainNavigation';
import BrandHero from './components/BrandHero';
import BrandStory from './components/BrandStory';
import ValueProposition from './components/ValueProposition';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import FounderStory from './components/FounderStory';
import QualityCommitment from './components/QualityCommitment';
import CallToAction from './components/CallToAction';

export const metadata = {
  title: 'About RIIB - Elegant Modesty, Made in Nigeria | RIIB Fashion',
  description: 'Discover the story behind RIIB Fashion, a Nigerian modest fashion brand celebrating elegant hijabs and ready-to-wear collections crafted with local artisan heritage and premium quality.'
};

export default function AboutRIIBPage() {
  const heroData = {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1073e8bde-1764705856495.png",
    alt: "Nigerian woman in elegant modest fashion hijab standing in traditional textile workshop with colorful fabrics",
    title: "Elegant Modesty, Made in Nigeria",
    subtitle: "Celebrating the beauty of modest fashion through premium craftsmanship and Nigerian heritage"
  };

  const storyData = {
    title: "Our Story",
    paragraphs: [
    "RIIB Fashion was born from a vision to redefine modest fashion in Nigeria and beyond. Founded in 2020, we recognized a gap in the market for premium, locally-made modest wear that celebrates both elegance and cultural heritage. Our journey began with a simple belief: that modesty and style are not mutually exclusive, but rather complementary expressions of personal identity.",
    "What started as a small collection of handcrafted hijabs has grown into a comprehensive modest fashion brand, offering ready-to-wear pieces that blend contemporary design with traditional Nigerian craftsmanship. Each piece in our collection tells a story of dedication, quality, and the skilled hands of local artisans who pour their expertise into every stitch.",
    "Today, RIIB Fashion stands as a testament to the power of local production and the beauty of modest fashion. We continue to push boundaries, creating pieces that empower women to express their faith, culture, and personal style with confidence and grace."]

  };

  const valueData = {
    title: "Made in Nigeria",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1073e8bde-1764705856495.png",
    alt: "Close-up of skilled Nigerian artisan hands carefully sewing intricate patterns on premium fabric in bright workshop",
    points: [
    {
      heading: "Local Sourcing",
      description: "We prioritize sourcing premium fabrics and materials from Nigerian suppliers, supporting local businesses and ensuring the highest quality standards. Our commitment to local sourcing strengthens the Nigerian textile industry and creates sustainable economic opportunities within our communities."
    },
    {
      heading: "Artisan Craftsmanship",
      description: "Every RIIB piece is crafted by skilled Nigerian artisans who bring generations of textile expertise to their work. We invest in training and fair compensation, preserving traditional techniques while embracing modern design innovations that set our collections apart."
    },
    {
      heading: "Community Impact",
      description: "By choosing RIIB, you support Nigerian families and communities. We create employment opportunities, provide skills training, and contribute to the growth of local fashion industry. Our success is measured not just in sales, but in the positive impact we create for those who craft our beautiful pieces."
    }]

  };

  const craftsmanshipData = {
    title: "Our Craftsmanship Process",
    description: "From concept to creation, every RIIB piece undergoes a meticulous process that ensures exceptional quality and attention to detail.",
    features: [
    {
      title: "Design & Selection",
      description: "Our design team carefully selects premium fabrics and creates patterns that blend contemporary aesthetics with modest fashion principles, ensuring each piece is both beautiful and functional.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_195bbb59f-1765697988354.png",
      alt: "Fashion designer sketching modest wear designs on paper with fabric swatches and color palette samples spread on table"
    },
    {
      title: "Artisan Production",
      description: "Skilled artisans bring designs to life through precise cutting, sewing, and finishing techniques. Each piece receives individual attention to ensure perfect construction and lasting quality.",
      image: "https://images.unsplash.com/photo-1620359200079-9329b8af9e1d",
      alt: "Nigerian seamstress working on industrial sewing machine creating elegant hijab with focused concentration in workshop"
    },
    {
      title: "Quality Assurance",
      description: "Every finished piece undergoes rigorous quality checks to ensure it meets our exacting standards. We inspect stitching, fabric quality, and overall finish before any item reaches our customers.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_10202005b-1764660484309.png",
      alt: "Quality control inspector examining finished modest fashion garment under bright light checking seams and details"
    }]

  };

  const founderData = {
    title: "Meet Our Founder",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeb5946c-1763295793040.png",
    alt: "Professional portrait of RIIB Fashion founder, confident Nigerian woman in elegant hijab and business attire smiling warmly",
    story: [
    "Fatima Abubakar founded RIIB Fashion with a clear mission: to create a modest fashion brand that celebrates Nigerian heritage while meeting international quality standards. Growing up in Lagos, she witnessed the gap between the demand for premium modest wear and the available local options.",
    "With a background in fashion design and business management, Fatima combined her passion for modest fashion with her commitment to supporting local artisans. She spent years learning traditional Nigerian textile techniques, building relationships with skilled craftspeople, and developing a vision for what RIIB could become.",
    "Under her leadership, RIIB Fashion has grown from a small startup to a recognized name in Nigerian modest fashion. Fatima's commitment to quality, ethical production, and community empowerment continues to guide every decision we make as a brand."],

    founderName: "Fatima Abubakar",
    founderTitle: "Founder & Creative Director"
  };

  const commitmentData = {
    title: "Our Quality Commitment",
    commitments: [
    {
      icon: "SparklesIcon",
      title: "Premium Materials",
      description: "We use only the finest fabrics and materials, carefully selected for comfort, durability, and beauty."
    },
    {
      icon: "ShieldCheckIcon",
      title: "Quality Assurance",
      description: "Every piece undergoes rigorous quality checks to ensure it meets our exacting standards before reaching you."
    },
    {
      icon: "HeartIcon",
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We stand behind every piece we create and are committed to your happiness."
    },
    {
      icon: "GlobeAltIcon",
      title: "Ethical Production",
      description: "We ensure fair wages, safe working conditions, and respect for all artisans who contribute to our collections."
    }]

  };

  const ctaData = {
    title: "Experience RIIB Fashion",
    description: "Discover our latest collections and find the perfect pieces to express your elegant modest style. Connect with us on WhatsApp to learn more about our products and place your order.",
    whatsappMessage: "Hello! I just read about RIIB Fashion and would love to learn more about your collections and how to place an order."
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-[60px]">
        <BrandHero heroData={heroData} />
        <BrandStory storyData={storyData} />
        <ValueProposition valueData={valueData} />
        <CraftsmanshipSection craftsmanshipData={craftsmanshipData} />
        <FounderStory founderData={founderData} />
        <QualityCommitment commitmentData={commitmentData} />
        <CallToAction ctaData={ctaData} />
      </main>
      <footer className="w-full py-8 md:py-12 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="font-caption text-sm md:text-base text-text-secondary">
              © {new Date()?.getFullYear()} RIIB Fashion. All rights reserved.
            </p>
            <p className="font-caption text-xs md:text-sm text-accent">
              Elegant Modesty, Made in Nigeria
            </p>
          </div>
        </div>
      </footer>
    </div>);

}