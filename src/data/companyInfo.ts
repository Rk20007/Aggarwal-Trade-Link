export interface CompanyInfo {
  name: string;
  tagline: string;
  proprietor: string;
  establishedYear: number;
  phone: string;
  phoneFormatted: string;
  secondaryPhone: string;
  secondaryPhoneFormatted: string;
  whatsappNumber: string;
  whatsappDirectUrl: string;
  email: string;
  gstin: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    industrialCluster: string;
  };
  googleMapsUrl: string;
  embedCoordinates: {
    lat: number;
    lng: number;
  };
  rating: {
    score: number;
    maxScore: number;
    totalReviews: number;
    googleRating: number;
    justdialRating: number;
  };
  operatingHours: {
    days: string;
    hours: string;
    sunday: string;
  };
  keyStats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Aggarwal Trade Link",
  tagline: "Industrial Packaging & Protective Solutions Specialist",
  proprietor: "Mr. Ashutosh Mittal",
  establishedYear: 2016,
  phone: "+919812456789",
  phoneFormatted: "+91 98124 56789",
  secondaryPhone: "+919416255555",
  secondaryPhoneFormatted: "+91 94162 55555",
  whatsappNumber: "919812456789",
  whatsappDirectUrl: "https://wa.me/919812456789?text=Hello%20Aggarwal%20Trade%20Link%2C%20I%20am%20interested%20in%20packaging%20supplies%20quotation.",
  email: "sales@aggarwaltradelink.com",
  gstin: "08AAGFA9812K1Z9",
  address: {
    line1: "TA-329, Capital Galleria Complex",
    line2: "Gaurav Path, In front of UIT",
    landmark: "Near Police Chauki / Thana",
    city: "Bhiwadi",
    state: "Rajasthan",
    pincode: "301019",
    industrialCluster: "Bhiwadi - Khushkhera - Tapukara - Neemrana Industrial Belt"
  },
  googleMapsUrl: "https://www.google.com/maps/place/Aggarwal+Trade+Link/@28.2025833,76.8261213,3070m/data=!3m1!1e3!4m10!1m2!2m1!1sagrawal+trades+bhiwadi!3m6!1s0x390d37eb059bdcd3:0x9316d1e4b7fab2b0!8m2!3d28.2025833!4d76.8451757!15sChZhZ3Jhd2FsIHRyYWRlcyBiaGl3YWRpWhgiFmFncmF3YWwgdHJhZGVzIGJoaXdhZGmSARZwYWNrYWdpbmdfc3VwcGx5X3N0b3Jl4AEA!16s%2Fg%2F11f3gtgtz0?entry=ttu",
  embedCoordinates: {
    lat: 28.2025833,
    lng: 76.8451757
  },
  rating: {
    score: 4.8,
    maxScore: 5.0,
    totalReviews: 83,
    googleRating: 4.7,
    justdialRating: 4.8
  },
  operatingHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 7:30 PM",
    sunday: "Open on Prior Warehouse Appointment"
  },
  keyStats: [
    { label: "Client Satisfaction", value: "4.8 / 5.0", detail: "80+ Verified B2B Reviews" },
    { label: "Bhiwadi Cluster Fleet", value: "Same-Day", detail: "Express local factory delivery" },
    { label: "Operating Experience", value: "9+ Years", detail: "Serving NCR manufacturers since 2016" },
    { label: "Product Inventory", value: "50+ SKUs", detail: "Ready stock at Bhiwadi depot" }
  ]
};

export const TARGET_INDUSTRIES = [
  {
    title: "Automotive & Auto Ancillary",
    description: "Anti-rust VCI film, heavy-duty 29-micron machine stretch wrap for palletized shock absorbers, engine blocks, and wire harnesses.",
    focusProducts: "Stretch Wrap, PET Straps, Bubble Pouches"
  },
  {
    title: "Electronics & Electricals",
    description: "Anti-static pink bubble rolls, EPE foam sheets, and zero-residue surface protection films for high-end PCB and LED assemblies.",
    focusProducts: "Pink Bubble Wrap, EPE Sheets, Surface Protection Film"
  },
  {
    title: "Pharmaceuticals & Healthcare",
    description: "Hygienic dust-proof secondary packaging, tamper-evident printed BOPP tape, and moisture barrier stretch wraps for sterile consignments.",
    focusProducts: "Printed BOPP Tape, Heavy Cartons, LLDPE Wrap"
  },
  {
    title: "Heavy Engineering & Metal Fabrication",
    description: "High-break load polyester (PET) strapping band (up to 950 kgf) and serrated steel clips to replace dangerous rusting steel bands.",
    focusProducts: "PET Strapping, Metal Clips, 7-Ply Cartons"
  },
  {
    title: "Consumer Goods & E-Commerce",
    description: "Custom branded sealing tapes, 3-ply and 5-ply dispatch boxes, and high-efficiency manual stretch dispensers for dispatch lines.",
    focusProducts: "Custom Tapes, Corrugated Cartons, Air Bubble Rolls"
  }
];
