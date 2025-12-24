import MainNavigation from '@/components/common/MainNavigation';
import CollectionsInteractive from './components/CollectionsInteractive';

export const metadata = {
  title: 'Collections - RIIB Fashion',
  description: 'Browse our complete collection of premium modest fashion including hijabs and ready-to-wear pieces. Elegant modesty, made in Nigeria.'
};

export default function CollectionsPage() {
  const mockProducts = [
  {
    id: 1,
    name: "Premium Silk Hijab - Emerald",
    description: "Luxurious silk hijab with smooth texture and elegant drape. Perfect for special occasions and everyday elegance.",
    price: 8500,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1568299273577-64c090fb8354",
    alt: "Elegant emerald green silk hijab draped on mannequin with soft lighting",
    category: "hijabs",
    badge: "Sale",
    featured: true,
    dateAdded: "2024-12-20"
  },
  {
    id: 2,
    name: "Chiffon Hijab Set - Dusty Rose",
    description: "Set of 3 lightweight chiffon hijabs in complementary shades. Breathable and comfortable for all-day wear.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1679610050610-b327b8cb1c4a",
    alt: "Three dusty rose chiffon hijabs arranged artistically on white background",
    category: "hijabs",
    featured: true,
    dateAdded: "2024-12-18"
  },
  {
    id: 3,
    name: "Modest Abaya - Black Elegance",
    description: "Classic black abaya with modern cut and subtle embroidery details. Timeless sophistication for any occasion.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1728487236137-99cb96ed0f04",
    alt: "Black abaya with delicate embroidery worn by model in elegant pose",
    category: "ready-to-wear",
    badge: "New",
    featured: true,
    dateAdded: "2024-12-22"
  },
  {
    id: 4,
    name: "Cotton Jersey Hijab - Navy",
    description: "Soft cotton jersey hijab with excellent stretch and coverage. Ideal for active lifestyles and daily comfort.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1728413272538-351b2c833c26",
    alt: "Navy blue cotton jersey hijab styled on model with natural makeup",
    category: "hijabs",
    featured: false,
    dateAdded: "2024-12-15"
  },
  {
    id: 5,
    name: "Embroidered Kaftan - Ivory",
    description: "Flowing ivory kaftan with intricate gold embroidery. Perfect for celebrations and formal gatherings.",
    price: 35000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1629934621503-0e71559b91ac",
    alt: "Ivory kaftan with gold embroidery details displayed on dress form",
    category: "ready-to-wear",
    badge: "Sale",
    featured: false,
    dateAdded: "2024-12-10"
  },
  {
    id: 6,
    name: "Instant Hijab - Charcoal Gray",
    description: "Easy-to-wear instant hijab with built-in cap. Quick styling solution for busy mornings.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1671084891783-38c455897602",
    alt: "Charcoal gray instant hijab worn by smiling woman in casual setting",
    category: "hijabs",
    featured: false,
    dateAdded: "2024-12-12"
  },
  {
    id: 7,
    name: "Modest Tunic Set - Sage Green",
    description: "Two-piece tunic and pants set in soft sage green. Comfortable and stylish for everyday wear.",
    price: 28000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18f0df86b-1765195942658.png",
    alt: "Sage green modest tunic set worn by model in outdoor garden setting",
    category: "ready-to-wear",
    badge: "New",
    featured: true,
    dateAdded: "2024-12-23"
  },
  {
    id: 8,
    name: "Satin Hijab - Burgundy",
    description: "Rich burgundy satin hijab with lustrous finish. Adds a touch of luxury to any outfit.",
    price: 9000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df7b7b76-1766535526139.png",
    alt: "Burgundy satin hijab with glossy finish draped elegantly on display",
    category: "hijabs",
    featured: false,
    dateAdded: "2024-12-08"
  },
  {
    id: 9,
    name: "Maxi Dress - Terracotta",
    description: "Flowing maxi dress in warm terracotta shade. Modest cut with elegant silhouette and comfortable fit.",
    price: 32000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f846e862-1766535527999.png",
    alt: "Terracotta maxi dress with modest design worn by model in studio",
    category: "ready-to-wear",
    featured: false,
    dateAdded: "2024-12-05"
  },
  {
    id: 10,
    name: "Printed Hijab - Floral Blush",
    description: "Delicate floral print hijab in soft blush tones. Adds feminine charm to your modest wardrobe.",
    price: 7000,
    image: "https://images.unsplash.com/photo-1651986380716-55f6f2858d07",
    alt: "Blush pink hijab with delicate floral pattern arranged artistically",
    category: "hijabs",
    featured: false,
    dateAdded: "2024-12-01"
  },
  {
    id: 11,
    name: "Modest Jumpsuit - Olive",
    description: "Contemporary olive jumpsuit with modest coverage and modern design. Perfect for versatile styling.",
    price: 38000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e989a5b2-1766535526372.png",
    alt: "Olive green modest jumpsuit with contemporary cut on fashion model",
    category: "ready-to-wear",
    badge: "New",
    featured: false,
    dateAdded: "2024-12-21"
  },
  {
    id: 12,
    name: "Crinkle Hijab - Midnight Blue",
    description: "Textured crinkle hijab in deep midnight blue. No-iron convenience with sophisticated appearance.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1728413272538-351b2c833c26",
    alt: "Midnight blue crinkle texture hijab styled on model with elegant makeup",
    category: "hijabs",
    featured: false,
    dateAdded: "2024-11-28"
  }];


  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <main className="pt-[60px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-48 md:py-64 lg:py-80">
          <div className="w-full px-24 md:px-36 lg:px-48">
            <div className="max-w-3xl">
              <h1 className="font-heading text-h2 md:text-h1 font-bold text-text-primary mb-18 md:mb-24">
                Our Collections
              </h1>
              <p className="font-body text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl">
                Discover our curated selection of premium modest fashion. From elegant hijabs to sophisticated ready-to-wear pieces, each item is crafted with care in Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-48 md:py-64 lg:py-80">
          <div className="w-full px-24 md:px-36 lg:px-48">
            <CollectionsInteractive initialProducts={mockProducts} />
          </div>
        </section>
      </main>
    </div>);

}