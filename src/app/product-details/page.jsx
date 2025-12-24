import MainNavigation from '@/components/common/MainNavigation';
import ProductDetailsContent from './components/ProductDetailsContent';

export const metadata = {
  title: 'Product Details - RIIB Fashion',
  description: 'View detailed information about our premium modest fashion products. Made in Nigeria with elegant craftsmanship.'
};

const mockProducts = [
{
  id: 1,
  name: "Premium Silk Hijab - Midnight Blue",
  price: 15000,
  originalPrice: 18000,
  category: "hijabs",
  badge: "Best Seller",
  inStock: true,
  description: "Experience luxury with our premium silk hijab in midnight blue. Crafted from 100% pure mulberry silk, this hijab offers unparalleled softness and elegance. The rich midnight blue color adds sophistication to any outfit, while the breathable fabric ensures all-day comfort. Perfect for special occasions or everyday wear, this hijab drapes beautifully and stays in place throughout the day.",
  images: [
  {
    url: "https://images.unsplash.com/photo-1667324861319-7e8468ed47df",
    alt: "Young Muslim woman wearing midnight blue silk hijab with elegant draping in natural lighting"
  },
  {
    url: "https://images.unsplash.com/photo-1707280133279-640ac7371787",
    alt: "Close-up detail of midnight blue silk hijab fabric showing luxurious texture and sheen"
  },
  {
    url: "https://images.unsplash.com/photo-1607780078814-46456b0ac5c4",
    alt: "Side view of midnight blue hijab styled with modern modest outfit"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1cedab387-1764658327240.png",
    alt: "Back view showing how midnight blue silk hijab drapes elegantly"
  }],

  specifications: [
  { label: "Material", value: "100% Pure Mulberry Silk" },
  { label: "Dimensions", value: "180cm x 70cm" },
  { label: "Weight", value: "Lightweight (85g)" },
  { label: "Color", value: "Midnight Blue" },
  { label: "Origin", value: "Made in Nigeria" },
  { label: "Care", value: "Hand wash or dry clean" }],

  careInstructions: [
  "Hand wash in cold water with mild detergent",
  "Do not wring or twist the fabric",
  "Lay flat to dry away from direct sunlight",
  "Iron on low heat while slightly damp",
  "Store folded in a cool, dry place",
  "Avoid contact with perfumes and cosmetics"]

},
{
  id: 2,
  name: "Cotton Jersey Hijab - Rose Pink",
  price: 8500,
  category: "hijabs",
  badge: "New Arrival",
  inStock: true,
  description: "Our cotton jersey hijab in rose pink combines comfort with style. Made from premium cotton jersey fabric, this hijab is perfect for daily wear. The soft, stretchy material provides excellent coverage while remaining breathable throughout the day. The beautiful rose pink shade complements all skin tones and adds a feminine touch to your modest wardrobe.",
  images: [
  {
    url: "https://images.unsplash.com/photo-1710227892498-f31daa2c1e33",
    alt: "Muslim woman wearing rose pink cotton jersey hijab with casual modest outfit"
  },
  {
    url: "https://images.unsplash.com/photo-1616236797570-96a7213830f3",
    alt: "Close-up of rose pink cotton jersey hijab fabric showing soft texture"
  },
  {
    url: "https://images.unsplash.com/photo-1621710579767-814684d1dee2",
    alt: "Rose pink hijab styled with modern accessories"
  }],

  specifications: [
  { label: "Material", value: "Premium Cotton Jersey" },
  { label: "Dimensions", value: "175cm x 65cm" },
  { label: "Weight", value: "Medium (120g)" },
  { label: "Color", value: "Rose Pink" },
  { label: "Origin", value: "Made in Nigeria" },
  { label: "Care", value: "Machine washable" }],

  careInstructions: [
  "Machine wash in cold water on gentle cycle",
  "Use mild detergent without bleach",
  "Tumble dry on low heat or air dry",
  "Iron on medium heat if needed",
  "Fold and store in a drawer",
  "Wash similar colors together"]

},
{
  id: 3,
  name: "Chiffon Hijab - Emerald Green",
  price: 12000,
  originalPrice: 15000,
  category: "hijabs",
  inStock: true,
  description: "Elevate your style with our luxurious chiffon hijab in emerald green. This lightweight, flowing hijab features a beautiful drape and subtle sheen that catches the light elegantly. The rich emerald green color is perfect for both formal events and everyday sophistication. Made from high-quality chiffon, it's easy to style and comfortable to wear all day long.",
  images: [
  {
    url: "https://images.unsplash.com/photo-1724396641537-8909ef098187",
    alt: "Elegant Muslim woman wearing emerald green chiffon hijab at formal event"
  },
  {
    url: "https://images.unsplash.com/photo-1631089865903-1894c87f08d2",
    alt: "Emerald green chiffon hijab fabric flowing in natural light"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c85abb73-1766002826729.png",
    alt: "Side profile showing emerald green hijab draping beautifully"
  }],

  specifications: [
  { label: "Material", value: "Premium Chiffon" },
  { label: "Dimensions", value: "185cm x 75cm" },
  { label: "Weight", value: "Lightweight (95g)" },
  { label: "Color", value: "Emerald Green" },
  { label: "Origin", value: "Made in Nigeria" },
  { label: "Care", value: "Hand wash recommended" }],

  careInstructions: [
  "Hand wash gently in cold water",
  "Use delicate fabric detergent",
  "Do not wring, press gently to remove water",
  "Hang to dry in shade",
  "Iron on lowest setting with cloth barrier",
  "Store hanging or loosely folded"]

},
{
  id: 4,
  name: "Modest Abaya Dress - Black",
  price: 35000,
  category: "ready-to-wear",
  badge: "Premium",
  inStock: true,
  description: "Our signature modest abaya dress in classic black embodies timeless elegance. Crafted from premium fabric with meticulous attention to detail, this abaya features a flattering silhouette that provides full coverage while maintaining a modern aesthetic. The flowing design ensures comfort and ease of movement, making it perfect for any occasion from daily wear to special events.",
  images: [
  {
    url: "https://images.unsplash.com/photo-1730278392119-d5c2ffff30c1",
    alt: "Muslim woman wearing elegant black abaya dress in modern setting"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_100045457-1765233438375.png",
    alt: "Full-length view of black modest abaya dress showing flowing silhouette"
  },
  {
    url: "https://images.unsplash.com/photo-1629935228612-2987c2861346",
    alt: "Detail of black abaya dress fabric and elegant stitching"
  }],

  specifications: [
  { label: "Material", value: "Premium Polyester Blend" },
  { label: "Sizes Available", value: "S, M, L, XL, XXL" },
  { label: "Length", value: "Full Length (150cm)" },
  { label: "Color", value: "Classic Black" },
  { label: "Origin", value: "Made in Nigeria" },
  { label: "Care", value: "Machine washable" }],

  careInstructions: [
  "Machine wash on gentle cycle with cold water",
  "Wash dark colors separately",
  "Use mild detergent",
  "Hang to dry or tumble dry on low",
  "Iron on medium heat if needed",
  "Store on hanger to maintain shape"]

}];


export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-[60px]">
        <div className="w-full px-24 lg:px-36 py-48 md:py-64">
          <ProductDetailsContent allProducts={mockProducts} />
        </div>
      </main>
      <footer className="bg-card border-t border-border py-32">
        <div className="w-full px-24 lg:px-36">
          <div className="text-center space-y-12">
            <p className="font-caption text-sm text-text-secondary">
              © {new Date()?.getFullYear()} RIIB Fashion. All rights reserved.
            </p>
            <p className="font-caption text-sm text-text-secondary">
              Elegant Modesty, Made in Nigeria
            </p>
          </div>
        </div>
      </footer>
    </div>);

}