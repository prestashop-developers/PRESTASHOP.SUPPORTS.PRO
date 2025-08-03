export type PortfolioCase = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
};

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'fashion',
    title: 'Premium Fashion Store',
    subtitle: 'Fashion Store',
    description: 'Custom PrestaShop theme with advanced filtering, wishlist functionality, and mobile optimization',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tags: ['e-commerce', 'fashion', 'custom'],
    stack: ['PrestaShop 8', 'Custom Modules', 'Responsive Design'],
  },
  {
    id: 'electronics',
    title: 'Electronics Marketplace',
    subtitle: 'Electronics Store',
    description: 'Multi-vendor PrestaShop platform with custom inventory management and automated order processing',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg',
    tags: ['e-commerce', 'electronics', 'marketplace'],
    stack: ['PrestaShop 8', 'Multi-vendor', 'API Integration'],
  },
  {
    id: 'food',
    title: 'Food Delivery Platform',
    subtitle: 'Food Delivery',
    description: 'PrestaShop-based food delivery system with real-time order tracking and payment integration',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    tags: ['food', 'delivery', 'custom'],
    stack: ['PrestaShop 8', 'Real-time Tracking', 'Payment Gateway'],
  },
  {
    id: 'b2b',
    title: 'B2B Wholesale Portal',
    subtitle: 'Wholesale B2B',
    description: 'Custom B2B portal for wholesale clients with tiered pricing and bulk order management',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',
    tags: ['b2b', 'wholesale', 'custom'],
    stack: ['PrestaShop 8', 'Tiered Pricing', 'Bulk Orders'],
  },
  {
    id: 'auto',
    title: 'Auto Parts Marketplace',
    subtitle: 'Auto Parts',
    description: 'Marketplace for car parts with VIN search and supplier integration',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
    tags: ['auto', 'marketplace', 'integration'],
    stack: ['PrestaShop 8', 'VIN Search', 'Supplier API'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Cosmetics',
    subtitle: 'Beauty Store',
    description: 'Cosmetics e-commerce with loyalty program and influencer integration',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    tags: ['beauty', 'cosmetics', 'loyalty'],
    stack: ['PrestaShop 8', 'Loyalty Program', 'Influencer API'],
  },
  {
    id: 'services',
    title: 'Professional Services Booking',
    subtitle: 'Services Platform',
    description: 'Online booking system for professional services with calendar integration',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    tags: ['services', 'booking', 'calendar'],
    stack: ['PrestaShop 8', 'Booking Calendar', 'Notifications'],
  },
  {
    id: 'education',
    title: 'Online Education Store',
    subtitle: 'Education Platform',
    description: 'E-learning marketplace for courses, digital downloads, and subscriptions',
    image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg',
    tags: ['education', 'e-learning', 'subscriptions'],
    stack: ['PrestaShop 8', 'Digital Downloads', 'Subscriptions'],
  }
];
