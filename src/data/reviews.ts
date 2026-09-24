export interface Review {
  id: string;
  author: string;
  companyRole: string;
  companyName: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'Justdial' | 'Verified B2B Client';
  text: string;
  highlightedSpec: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rajiv Sharma',
    companyRole: 'Materials & Dispatch Manager',
    companyName: 'Precision Auto Systems Ltd.',
    location: 'Bhiwadi Industrial Area, Phase II',
    rating: 5,
    date: '2 months ago',
    source: 'Google Reviews',
    text: 'Very professional and competitive service. Aggarwal Trade Link is our regular supplier for 23-micron stretch film and PET strapping bands. Their dispatch is prompt, usually delivering to our factory within 3 hours of order confirmation. High tensile strength, zero complaints.',
    highlightedSpec: '23-Micron Stretch Film & PET Strapping'
  },
  {
    id: 'rev-2',
    author: 'Manoj Singhal',
    companyRole: 'Procurement Head',
    companyName: 'Apex Polychem & Electronics',
    location: 'Khushkhera Industrial Cluster',
    rating: 5,
    date: '4 months ago',
    source: 'Justdial',
    text: 'One stop shop for all packaging needs in Bhiwadi. Dealing with best quality, rates and commitment. Mr. Ashutosh Mittal provided us custom printed BOPP tape with our company branding. The print sharpness and glue stickiness are superior to what we used to source from Delhi.',
    highlightedSpec: 'Custom Printed BOPP Tape'
  },
  {
    id: 'rev-3',
    author: 'Vikram Choudhary',
    companyRole: 'Plant Operations Supervisor',
    companyName: 'Sterling Engineering Solutions',
    location: 'Chopanki Industrial Area',
    rating: 5,
    date: '6 months ago',
    source: 'Google Reviews',
    text: 'We shifted from steel strapping to their 16mm PET strap and serrated clips on our export pallets. We saved nearly 40% on packaging costs while eliminating rust marks on export machinery. Honest billing, correct micron thickness, and transparent dealing.',
    highlightedSpec: '16mm PET Strapping & Serrated Clips'
  },
  {
    id: 'rev-4',
    author: 'Sunil K. Verma',
    companyRole: 'Warehouse & Logistics Lead',
    companyName: 'Nova Medipack',
    location: 'Bhiwadi (Near Capital Galleria)',
    rating: 4,
    date: '8 months ago',
    source: 'Google Reviews',
    text: 'Convenient location right on Gaurav Path opposite UIT. Excellent ready stock of air bubble rolls and EPE foam sheets. Whenever our night shift runs short on packaging rolls, Aggarwal Trade Link arranges urgent delivery without delay.',
    highlightedSpec: 'Air Bubble Rolls & EPE Foam'
  }
];
