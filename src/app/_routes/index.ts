import type { Route } from '../_types/route.types';

export const EN_Routes = [
  { title: 'Home', path: '/' },
  {
    title: 'For Sale',
    path: '/for-sale',
    subRoutes: [
      { title: 'Homes', path: '/for-sale/homes' },
      { title: 'Condominiums', path: '/for-sale/condominiums' },
      { title: 'Land', path: '/for-sale/land' },
      { title: 'Commercial', path: '/for-sale/commercial' },
    ],
  },
  {
    title: 'For Rent',
    path: '/for-rent',
    subRoutes: [
      { title: 'Long Term', path: '/for-rent/long-term' },
      { title: 'Commercial', path: '/for-rent/commercial' },
    ],
  },
  { title: 'Our Services', path: '/our-services' },
  { title: 'About Us', path: '/about-us' },
  { title: 'Contact Us', path: '/contact-us' },
] as const satisfies Route[];
