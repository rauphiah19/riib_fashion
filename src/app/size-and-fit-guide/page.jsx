import MainNavigation from '@/components/common/MainNavigation';
import SizeFitInteractive from './components/SizeFitInteractive';

export const metadata = {
  title: 'Size and Fit Guide - RIIB Fashion',
  description: 'Find your perfect fit with our comprehensive sizing guide for hijabs, abayas, and ready-to-wear modest fashion. Includes measurement instructions and personalized recommendations.'
};

export default function SizeAndFitGuidePage() {
  const sizeCharts = [
  {
    category: 'Hijabs',
    icon: 'SparklesIcon',
    description: 'Standard hijab dimensions for various styling options',
    sizes: [
    { size: 'Standard', lengthCm: 180, widthCm: 70, lengthIn: 71, widthIn: 28, fitNote: 'Universal fit for most styling techniques' },
    { size: 'Large', lengthCm: 200, widthCm: 90, lengthIn: 79, widthIn: 35, fitNote: 'Extra coverage for fuller draping styles' },
    { size: 'Square', lengthCm: 110, widthCm: 110, lengthIn: 43, widthIn: 43, fitNote: 'Perfect for Turkish and layered styles' }]

  },
  {
    category: 'Ready-to-Wear',
    icon: 'ShoppingBagIcon',
    description: 'Modest fashion pieces with comfortable, loose-fit styling',
    sizes: [
    { size: 'XS', bust: '81-86', waist: '66-71', hips: '89-94', fitNote: 'Relaxed fit with modest coverage' },
    { size: 'S', bust: '86-91', waist: '71-76', hips: '94-99', fitNote: 'Comfortable loose fit' },
    { size: 'M', bust: '91-97', waist: '76-81', hips: '99-104', fitNote: 'Standard modest fit' },
    { size: 'L', bust: '97-102', waist: '81-86', hips: '104-109', fitNote: 'Generous loose fit' },
    { size: 'XL', bust: '102-109', waist: '86-94', hips: '109-117', fitNote: 'Extra room for comfort' },
    { size: '2XL', bust: '109-117', waist: '94-102', hips: '117-124', fitNote: 'Plus size with elegant drape' }],

    measurements: 'All measurements in centimeters. Garments designed with 5-10cm ease for modest, comfortable fit.'
  },
  {
    category: 'Abayas',
    icon: 'HomeIcon',
    description: 'Traditional and contemporary abaya styles',
    sizes: [
    { size: '52', height: '155-160', length: 140, shoulder: 38, fitNote: 'Petite fit' },
    { size: '54', height: '160-165', length: 145, shoulder: 40, fitNote: 'Standard fit' },
    { size: '56', height: '165-170', length: 150, shoulder: 42, fitNote: 'Regular fit' },
    { size: '58', height: '170-175', length: 155, shoulder: 44, fitNote: 'Tall fit' },
    { size: '60', height: '175-180', length: 160, shoulder: 46, fitNote: 'Extra tall fit' }],

    measurements: 'Height in cm, length from shoulder to hem, shoulder width across back.'
  }];


  const measurementGuide = [
  {
    title: 'Bust Measurement',
    icon: 'ArrowsPointingOutIcon',
    instructions: 'Measure around the fullest part of your bust, keeping the tape parallel to the floor. Wear a well-fitted bra for accuracy.',
    illustration: "https://img.rocket.new/generatedImages/rocket_gen_img_13780a4ae-1765368309828.png"
  },
  {
    title: 'Waist Measurement',
    icon: 'ArrowsPointingInIcon',
    instructions: 'Measure around your natural waistline, typically the narrowest part of your torso, about 2-3 cm above your belly button.',
    illustration: "https://img.rocket.new/generatedImages/rocket_gen_img_163421814-1764643325253.png"
  },
  {
    title: 'Hip Measurement',
    icon: 'ArrowsRightLeftIcon',
    instructions: 'Measure around the fullest part of your hips and buttocks, keeping the tape parallel to the floor.',
    illustration: "https://img.rocket.new/generatedImages/rocket_gen_img_13780a4ae-1765368309828.png"
  },
  {
    title: 'Height & Length',
    icon: 'ArrowLongUpIcon',
    instructions: 'Stand straight against a wall. For abayas, measure from shoulder to desired hem length. For hijabs, consider your preferred styling method.',
    illustration: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5618ae2-1765247571243.png"
  }];


  const fitNotes = [
  {
    title: 'Loose-Fit Styling',
    description: 'Our ready-to-wear pieces are designed with 5-10cm of ease for modest, comfortable coverage. Expect a relaxed, flowing silhouette.',
    icon: 'SparklesIcon'
  },
  {
    title: 'Stretch Fabrics',
    description: 'Items with stretch content (jersey, modal blends) offer flexibility. If between sizes, choose the smaller size for stretch fabrics.',
    icon: 'ArrowsPointingOutIcon'
  },
  {
    title: 'Traditional Cuts',
    description: 'Abayas follow traditional sizing (52-60). These numbers represent garment length and proportional fit rather than body measurements.',
    icon: 'HomeIcon'
  },
  {
    title: 'Fabric Weight',
    description: 'Heavier fabrics (silk, crepe) drape differently than lightweight materials (chiffon, cotton). Consider fabric type when selecting size.',
    icon: 'SwatchIcon'
  }];


  const faqs = [
  {
    question: 'What if I\'m between two sizes?',
    answer: 'For our modest wear designs, we recommend sizing up if you\'re between sizes. Our garments are designed with a relaxed fit, and the larger size will provide more comfortable coverage. For stretch fabrics, you can choose the smaller size as the fabric will accommodate your measurements.'
  },
  {
    question: 'How do I measure myself accurately?',
    answer: 'Use a soft measuring tape and wear fitted clothing or undergarments. Keep the tape snug but not tight, parallel to the floor. For best results, have someone help you measure. Take measurements at the end of the day when your body is at its largest, and always refer to our measurement guide illustrations above.'
  },
  {
    question: 'Do your garments shrink after washing?',
    answer: 'When cared for properly according to our care instructions, minimal shrinkage occurs (typically 2-3%). We account for this in our sizing. Always follow the care label: hand wash or gentle cycle in cold water, and air dry flat. Avoid high heat which can cause excessive shrinkage.'
  },
  {
    question: 'Can I exchange if the size doesn\'t fit?',
    answer: 'Yes! We offer hassle-free exchanges within 14 days of delivery for unworn, unwashed items with original tags. Contact us via WhatsApp with your order number and we\'ll arrange the exchange. Please note that custom or personalized items cannot be exchanged.'
  },
  {
    question: 'Are hijab sizes universal?',
    answer: 'Our standard hijab (180cm x 70cm) works for most styling techniques and head sizes. The large size (200cm x 90cm) is ideal if you prefer fuller coverage or more elaborate draping styles. Square hijabs (110cm x 110cm) are perfect for Turkish-style wrapping and layered looks.'
  },
  {
    question: 'How do abaya sizes work?',
    answer: 'Abaya sizes (52, 54, 56, 58, 60) indicate the garment length in inches and correspond to height ranges. Size 54 fits heights 160-165cm, size 56 fits 165-170cm, etc. Choose based on your height and preferred hem length. Shoulder width increases proportionally with each size.'
  }];


  const trustElements = {
    fitGuarantee: 'We stand behind our sizing. If your first order doesn\'t fit perfectly, we\'ll help you find the right size with free exchange shipping.',
    exchangePolicy: '14-day hassle-free exchange policy for all standard items. Simply contact us via WhatsApp to initiate an exchange.'
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <SizeFitInteractive
        sizeCharts={sizeCharts}
        measurementGuide={measurementGuide}
        fitNotes={fitNotes}
        faqs={faqs}
        trustElements={trustElements} />

    </div>);

}