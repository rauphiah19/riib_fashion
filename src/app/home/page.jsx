import MainNavigation from '@/components/common/MainNavigation';
import HomeInteractive from './components/HomeInteractive';

export const metadata = {
  title: 'RIIB Fashion - Elegant Modesty, Made in Nigeria',
  description: 'Discover premium modest fashion and hijabs crafted with care in Nigeria. Shop our elegant collections of ready-to-wear pieces and accessories.'
};

export default function HomePage() {
  const heroData = {
    backgroundImage: "https://images.unsplash.com/photo-1726661795843-3a197dde3a21",
    imageAlt: 'Elegant woman in flowing beige hijab and modest dress standing in sunlit room with natural lighting',
    title: 'Elegant Modesty, Made in Nigeria',
    subtitle: 'Discover premium hijabs and ready-to-wear collections that celebrate modest fashion with Nigerian craftsmanship',
    whatsappMessage: 'Hello RIIB Fashion! I would like to explore your elegant modest fashion collections.'
  };

  const featuredProducts = [
  {
    id: 1,
    name: 'Premium Silk Hijab - Champagne',
    description: 'Luxurious silk hijab with smooth texture and elegant drape, perfect for special occasions',
    price: 8500,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1631663026797-0622bf8ccb13",
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Cotton Jersey Hijab Set - Earth Tones',
    description: 'Comfortable everyday hijab set in warm earth tones, breathable and easy to style',
    price: 6500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15017de38-1766535526575.png",
    badge: 'New Arrival'
  },
  {
    id: 3,
    name: 'Chiffon Evening Hijab - Dusty Rose',
    description: 'Lightweight chiffon hijab with delicate texture, ideal for evening events and celebrations',
    price: 7200,
    originalPrice: 9500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1adcc9d5a-1764672693803.png",
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'Modest Abaya Dress - Charcoal',
    description: 'Elegant full-length abaya with modern cut and premium fabric, perfect for daily wear',
    price: 15000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a3a22304-1764661337219.png",
    badge: 'Featured'
  },
  {
    id: 5,
    name: 'Printed Voile Hijab - Floral Garden',
    description: 'Beautiful printed voile hijab featuring delicate floral patterns in soft pastel colors',
    price: 5800,
    image: "https://images.unsplash.com/photo-1688958727814-9334415f3322",
    badge: null
  },
  {
    id: 6,
    name: 'Luxury Satin Hijab - Midnight Blue',
    description: 'Premium satin hijab with rich color and lustrous finish, adds sophistication to any outfit',
    price: 9200,
    originalPrice: 11500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d36c0684-1765370500412.png",
    badge: 'Limited Edition'
  },
  {
    id: 7,
    name: 'Everyday Cotton Hijab - Olive Green',
    description: 'Soft cotton hijab in versatile olive green, perfect for daily wear with maximum comfort',
    price: 4500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2c09926-1765220549006.png",
    badge: null
  },
  {
    id: 8,
    name: 'Embroidered Formal Hijab - Ivory',
    description: 'Exquisite embroidered hijab with intricate detailing, perfect for weddings and formal events',
    price: 12500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e8278dc-1766535526087.png",
    badge: 'Premium'
  }];


  const brandStory = {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1073e8bde-1764705856495.png",
    imageAlt: 'Nigerian artisan woman carefully crafting elegant modest fashion pieces in bright workshop with traditional fabrics',
    title: 'Crafted with Nigerian Excellence',
    description: 'RIIB Fashion celebrates the rich heritage of Nigerian craftsmanship while embracing modern modest fashion. Each piece is thoughtfully designed and carefully crafted by skilled artisans who pour their expertise and passion into every stitch.',
    highlights: [
    'Handcrafted by skilled Nigerian artisans with decades of experience',
    'Premium quality fabrics sourced ethically and sustainably',
    'Modern designs that honor traditional modest fashion values',
    'Supporting local communities through fair trade practices']

  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-[60px]">
        <HomeInteractive
          heroData={heroData}
          featuredProducts={featuredProducts}
          brandStory={brandStory} />

      </main>
    </div>);

}