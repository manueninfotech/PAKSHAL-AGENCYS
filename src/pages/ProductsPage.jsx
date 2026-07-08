import React, { useState, useEffect } from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import {
  Trees,
  FlaskConical,
  Lock,
  Layers,
  Droplets,
  Ruler,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Settings,
  RefreshCw,
  Bug,
  Leaf,
  Shield,
  Ban,
  Dumbbell
} from 'lucide-react';
import plywoodImg from '../assets/royalclub.png';
import royalClubImg from '../assets/royalclub.png';
import royalClub2Img from '../assets/royalclub2.png';
import marineClubImg from '../assets/marineclub.png';
import laminatesImg from '../assets/laminates.png';
import laminates2Img from '../assets/laminates2.png';
import laminates3Img from '../assets/laminates3.png';
import acrylicPanelsImg from '../assets/acrylicpanels.png';
import acrylicPanels2Img from '../assets/acrylicpanels2.png';
import acrylicPanels3Img from '../assets/acrylicpanels3.png';
import acrylicPanels4Img from '../assets/acrylicpanels4.png';
import acrylicPanels5Img from '../assets/acrylicpanels5.png';
import acrylicPanels6Img from '../assets/acrylicpanels6.png';
import hardwareImg from '../assets/hardwarefittings.png';
import accessoriesImg from '../assets/kitchenaccessories.png';
import slidingChannelsImg from '../assets/slidingchannels.png';
import gurjanStarImg from '../assets/gurjanstar.jpg';
import tandemBoxImg from '../assets/tandembox.png';
import fancyDoorsImg from '../assets/fancydoors.png';
import doorFittingsImg from '../assets/door_fittings.png';
import veneer2Img from '../assets/veneer2.png';
import veneer3Img from '../assets/veneer3.png';
import veneer4Img from '../assets/veneer4.png';
import kitchensCardImg from '../assets/kitchens-card.jpg';
import wardrobesCardImg from '../assets/wardrobes-card.jpg';
import officefurniture from '../assets/officefurniture.jpg';
import interiorpanels from '../assets/interiorpanels.png';
import hardwareFittings1 from '../assets/productspage-hardware&fittings.png';
import hydraulicHingeImg from '../assets/hydraulichinge.png';
import hardwareFittings2 from '../assets/productspage-hardware&fittings2.png';
import drawerChannelImg from '../assets/drawerchannel.jpg';
import hardwareFittings3 from '../assets/productspage-hardware&fittings3.png';
import kitchenBasketImg from '../assets/kitchenbasket.jpg';
import hardwareFittings4 from '../assets/productspage-hardware&fittings4.png';
import tandemBoxNewImg from '../assets/tandembox.jpg';
import hardwareFittings5 from '../assets/productspage-hardware&fittings5.png';

const SPREADS = [
  {
    id: 1,
    brandId: 'royal-club',
    category: 'Plywood',
    pageNumLeft: 1,
    pageNumRight: 2,
    badge: 'Premium Collection',
    title: 'Unrivaled\nStrength.',
    tagline: "The Architect's Choice Since 1994",
    image: royalClubImg,
    brandName: 'Royal Club',
    desc: 'Crafted from 100% selected Gurjan timber, Royal Club stands as the pinnacle of structural integrity and aesthetic endurance.',
    thicknesses: ['6mm', '9mm', '12mm', '18mm', '25mm'],
    defaultThickness: '18mm',
    features: ['100% BWP Grade', 'Termite Proof', 'Borer Resistant'],
    applications: ['Kitchens', 'Wardrobes', 'Exteriors'],
    specs: {
      'Core Material': 'Imported Gurjan',
      'Bonding Adhesive': 'Phenolic Formaldehyde',
      'Manufacturer Warranty': 'Lifetime Guarantee*'
    },
    heroSub: 'PREMIUM QUALITY. TIMELESS STRENGTH.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Crafted from 100% selected Gurjan timber, Royal Club stands as the pinnacle of structural integrity and aesthetic endurance.',
    heroTags: [
      { text: '100% Gurjan Core', icon: 'wood' },
      { text: 'BWP Grade', icon: 'droplet' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '100% Gurjan Core', desc: 'Selected premium Gurjan timber', icon: 'wood' },
      { title: 'BWP Grade', desc: 'Boiling Water Proof certified', icon: 'droplet' },
      { title: 'Termite Proof', desc: 'Highly resistant to termites & borers', icon: 'bug' },
      { title: 'Lifetime Warranty', desc: 'Long lasting performance', icon: 'shield' },
      { title: 'Eco Friendly', desc: 'Sustainable & environment safe', icon: 'leaf' }
    ]
  },
  {
    id: 12,
    brandId: 'royal-club-premium',
    category: 'Plywood',
    pageNumLeft: 3,
    pageNumRight: 4,
    hideFromIndex: true,
    parentBrandId: 'royal-club',
    badge: 'Exotic Collection',
    title: 'Calibrated\nPerfection.',
    tagline: 'Precision engineered for high-end carpentry',
    image: royalClub2Img,
    brandName: 'Royal Club',
    desc: 'Double-pressed and calibrated on both sides, Royal Club Premium offers the absolute smoothest surfaces and zero core gaps.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'Zero Core Gaps', 'Phenolic Bonded'],
    applications: ['Luxury Kitchens', 'Wardrobe Shutters', 'Wall Paneling'],
    specs: {
      'Core Material': 'Premium Gurjan',
      'Press Type': 'Double Hot Pressed',
      'Calibrated Tolerance': '± 0.2mm'
    },
    heroSub: 'DOUBLE PRESSED. CALIBRATED PERFECTION.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Double-pressed and calibrated on both sides, Royal Club Premium offers the absolute smoothest surfaces and zero core gaps for luxury cabinetry.',
    heroTags: [
      { text: '100% Calibrated', icon: 'calibrate' },
      { text: 'Zero Core Gaps', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Uniform thickness tolerance ±0.2mm', icon: 'calibrate' },
      { title: '100% Gurjan Core', desc: 'Selected imported premium plies', icon: 'wood' },
      { title: 'Boiling Water Proof', desc: 'Withstands heavy moisture exposure', icon: 'droplet' },
      { title: 'Zero Core Gaps', desc: 'No overlapping plies or voids', icon: 'wood' },
      { title: 'Lifetime Warranty', desc: 'Assured product warranty protection', icon: 'shield' }
    ]
  },
  {
    id: 2,
    brandId: 'marine-club',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    badge: 'Marine Grade',
    title: 'Waterproof\nShield.',
    tagline: 'Defending against moisture and water damage',
    image: marineClubImg,
    brandName: 'Marine Club',
    desc: 'Engineered specifically for high-moisture zones, Marine Club offers superior boiling-water-proof (BWP) protection.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['BWP Marine Grade', 'High Density Wood', 'Weather Proof'],
    applications: ['Bathrooms', 'Kitchen Cabinets', 'Outdoor Decks'],
    specs: {
      'Wood Species': 'Hardwood Core',
      'Bonding Glue': 'Marine Grade BWP Glue',
      'Manufacturer Warranty': '25 Years Warranty'
    },
    heroSub: 'WATERPROOF SHIELD. UNCOMPROMISING GRADE.',
    heroTitle: 'MARINE CLUB',
    heroDesc: 'Engineered specifically for high-moisture zones, Marine Club offers superior boiling-water-proof (BWP) protection.',
    heroTags: [
      { text: 'BWP Marine Grade', icon: 'droplet' },
      { text: 'High Density Wood', icon: 'wood' },
      { text: 'Weather Proof', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Boiling Water Proof', desc: 'Certified BWP grade protection', icon: 'droplet' },
      { title: 'Hardwood Core', desc: 'High-density select hardwood plies', icon: 'wood' },
      { title: 'No-Warp Design', desc: 'Stable block core construction', icon: 'calibrate' },
      { title: '25 Years Warranty', desc: 'Long term performance assurance', icon: 'shield' },
      { title: 'Eco Safe Resin', desc: 'Low emissions polymer bond', icon: 'leaf' }
    ]
  },
  {
    id: 3,
    brandId: 'indigo-exotic',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    badge: 'Design Accents',
    title: 'Vibrant\nFinishes.',
    tagline: 'Colors and textures for high-end styling',
    image: laminatesImg,
    brandName: 'Indigo',
    desc: 'Modern high-pressure laminates offering scratch-resistant surfaces, stylish textures, and brilliant colors.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Scratch Resistant', 'UV Protection', 'Anti-Fingerprint'],
    applications: ['Tabletops', 'Cabinets', 'Wall Paneling'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Suede / Glossy',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'VIBRANT FINISHES. DESIGN ACCENTS.',
    heroTitle: 'INDIGO',
    heroDesc: 'Modern high-pressure laminates offering scratch-resistant surfaces, stylish textures, and brilliant colors for luxury spaces.',
    heroTags: [
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'UV Protection', icon: 'shield' },
      { text: 'Anti-Fingerprint', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Scratch Resistant', desc: 'Protective top wear layer', icon: 'sparkles' },
      { title: 'UV Protected', desc: 'Zero color fading under sunlight', icon: 'shield' },
      { title: 'Anti-Fingerprint', desc: 'Stays clean and smudge-free', icon: 'sparkles' },
      { title: 'Heat Proof', desc: 'Resists hot items up to 180°C', icon: 'droplet' },
      { title: 'Eco Safe Kraft', desc: 'Non-toxic raw raw materials', icon: 'leaf' }
    ]
  },
  {
    id: 11,
    brandId: 'indigo-premium',
    category: 'Laminates',
    pageNumLeft: 9,
    pageNumRight: 10,
    hideFromIndex: true,
    parentBrandId: 'indigo-exotic',
    badge: 'Premium Finishes',
    title: 'Exotic\nTextures.',
    tagline: 'Premium designs that redefine luxury and style',
    image: laminates2Img,
    brandName: 'Indigo',
    desc: 'Exquisite designs that redefine luxury with outstanding durability, premium textures, and anti-fingerprint technology.',
    thicknesses: ['1.0mm', '1.2mm', '1.5mm'],
    defaultThickness: '1.0mm',
    features: ['Super Matt Finish', 'Anti-Fingerprint', 'Stain Resistant'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Executive Desks'],
    specs: {
      'Material': 'Premium Phenolic Kraft',
      'Surface Finish': 'Super Matt / Texture',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'EXOTIC TEXTURES. PREMIUM FINISHES.',
    heroTitle: 'INDIGO',
    heroDesc: 'Exquisite designs that redefine luxury with outstanding durability, premium textures, and anti-fingerprint technology for high-end interiors.',
    heroTags: [
      { text: 'Super Matt Finish', icon: 'sparkles' },
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Super Matt Finish', desc: 'Ultra smooth low-glare elegance', icon: 'sparkles' },
      { title: 'Anti-Fingerprint', desc: 'Stays clean and smudge-free', icon: 'sparkles' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 14,
    brandId: 'indigo-exotic-3',
    category: 'Laminates',
    pageNumLeft: 11,
    pageNumRight: 12,
    hideFromIndex: true,
    parentBrandId: 'indigo-exotic',
    badge: 'Premium Textures',
    title: 'Luxurious\nPatterns.',
    tagline: 'Stunning designs inspired by natural woods and stones',
    image: laminates3Img,
    brandName: 'Indigo',
    desc: 'Indigo Luxurious Laminates offer textured suede finishes that emulate wood grains and stone patterns, bringing nature into your interiors.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Textured Finishes', 'Heat Resistant', 'Eco Sourced'],
    applications: ['Tabletops', 'Cabinets', 'Accent Walls'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Textured / Woodgrain',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'LUXURIOUS PATTERNS. TEXTURED FINISHES.',
    heroTitle: 'INDIGO',
    heroDesc: 'Indigo Luxurious Laminates offer textured suede finishes that emulate wood grains and stone patterns, bringing nature into your interiors.',
    heroTags: [
      { text: 'Textured Finishes', icon: 'sparkles' },
      { text: 'Heat Resistant', icon: 'shield' },
      { text: 'Eco Sourced', icon: 'leaf' }
    ],
    overviewFeatures: [
      { title: 'Textured Finish', desc: 'Natural woodgrain and stone details', icon: 'sparkles' },
      { title: 'Heat Proof', desc: 'Resists hot items up to 180°C', icon: 'droplet' },
      { title: 'Anti-Fingerprint', desc: 'Stays clean and smudge-free', icon: 'sparkles' },
      { title: 'High Durability', desc: 'Long-lasting structural surface', icon: 'shield' },
      { title: 'Eco Friendly', desc: 'Sustainable organic core resins', icon: 'leaf' }
    ]
  },
  {
    id: 4,
    brandId: 'armani',
    category: 'Acrylic Panels',
    pageNumLeft: 13,
    pageNumRight: 14,
    badge: 'Luxury Interiors',
    title: 'Luxury\nDesign.',
    tagline: 'Italian-inspired elegance for sophisticated spaces',
    image: acrylicPanelsImg,
    brandName: 'Armani',
    desc: 'Premium Italian-inspired decorative panels and textured laminates that bring timeless elegance to your interiors.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Luxury Matt Finish', 'Eco-Friendly Core', 'Stain Resistant'],
    applications: ['Living Rooms', 'Lobbies', 'Executive Desks'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'LUXURY INTERIORS. ITALIAN-INSPIRED ELEGANCE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Premium Italian-inspired decorative panels and textured laminates that bring timeless elegance to your modern interiors.',
    heroTags: [
      { text: 'Luxury Matt Finish', icon: 'sparkles' },
      { text: 'Eco-Friendly Core', icon: 'wood' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Super Matt Finish', desc: 'Ultra smooth, low-glare elegance', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 13,
    brandId: 'armani-premium',
    category: 'Acrylic Panels',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Exotic Finishes',
    title: 'Seamless\nReflection.',
    tagline: 'High-gloss acrylic panels for premium wardrobes',
    image: acrylicPanels2Img,
    brandName: 'Armani',
    desc: 'Offering high UV resistance and brilliant glass-like reflections, Armani Premium Acrylic panels are scratch-resistant and eco-friendly.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Glass-like Gloss', 'Scratch Resistant', 'UV Stabilized'],
    applications: ['Kitchen Shutters', 'Wardrobes', 'Wall Paneling'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'HIGH GLOSS. SEAMLESS REFLECTION.',
    heroTitle: 'ARMANI',
    heroDesc: 'Offering high UV resistance and brilliant glass-like reflections, Armani Premium Acrylic panels are scratch-resistant and eco-friendly.',
    heroTags: [
      { text: 'Glass-like Gloss', icon: 'sparkles' },
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'UV Stabilized', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Glass-like Gloss', desc: 'Brilliant mirror-like reflections', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 15,
    brandId: 'armani-premium-3',
    category: 'Acrylic Panels',
    pageNumLeft: 17,
    pageNumRight: 18,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Elegant Collection',
    title: 'Elegant\nTextures.',
    tagline: 'Textured acrylic panels for sophisticated look',
    image: acrylicPanels3Img,
    brandName: 'Armani',
    desc: 'Offering textured matte finishes and excellent scratch resistance, Armani Textured Acrylic panels are perfect for modern living spaces.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Elegant Matte', 'Scratch Resistant', 'Highly Durable'],
    applications: ['Living Rooms', 'Accent Walls', 'Office Cabinetry'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'ELEGANT TEXTURES. REFINED STYLE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Offering textured matte finishes and excellent scratch resistance, Armani Textured Acrylic panels are perfect for modern living spaces.',
    heroTags: [
      { text: 'Elegant Matte', icon: 'sparkles' },
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'Highly Durable', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Elegant Matte', desc: 'Textured matte look and feel', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 16,
    brandId: 'armani-premium-4',
    category: 'Acrylic Panels',
    pageNumLeft: 19,
    pageNumRight: 20,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Vibrant Collection',
    title: 'Vibrant\nHues.',
    tagline: 'Bold and beautiful colors to elevate kitchen design',
    image: acrylicPanels4Img,
    brandName: 'Armani',
    desc: 'Armani Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Dynamic Colors', 'Glass-like Gloss', 'UV Resistant'],
    applications: ['Kitchen Cabinets', 'Wardrobes', 'Retail Fixtures'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'DYNAMIC COLORS. MIRROR SHINE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Armani Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
    heroTags: [
      { text: 'Dynamic Colors', icon: 'sparkles' },
      { text: 'Glass-like Gloss', icon: 'sparkles' },
      { text: 'UV Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Dynamic Colors', desc: 'Rich, deep pigment saturation', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 17,
    brandId: 'armani-premium-5',
    category: 'Acrylic Panels',
    pageNumLeft: 21,
    pageNumRight: 22,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Contemporary Collection',
    title: 'Modern\nMinimalism.',
    tagline: 'Sleek, clean aesthetic for contemporary workspaces',
    image: acrylicPanels5Img,
    brandName: 'Armani',
    desc: 'Combining high-impact resistance with an anti-fingerprint surface, Armani Minimalist Acrylic panels are ideal for tables and desks.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Fingerprint', 'Sleek Minimal', 'Impact Resistant'],
    applications: ['Executive Desks', 'Tabletops', 'Wall Panels'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'ANTI-FINGERPRINT. MINIMAL DESIGN.',
    heroTitle: 'ARMANI',
    heroDesc: 'Combining high-impact resistance with an anti-fingerprint surface, Armani Minimalist Acrylic panels are ideal for tables and desks.',
    heroTags: [
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Sleek Minimal', icon: 'sparkles' },
      { text: 'Impact Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Anti-Fingerprint', desc: 'Stays clean and smudge-free', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 18,
    brandId: 'armani-premium-6',
    category: 'Acrylic Panels',
    pageNumLeft: 23,
    pageNumRight: 24,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Shield Collection',
    title: 'Ultimate\nDurability.',
    tagline: 'Extra-thick acrylic protection for high-traffic zones',
    image: acrylicPanels6Img,
    brandName: 'Armani',
    desc: 'Specifically engineered for maximum wear resistance, Armani Shield panels combine heavy-duty thickness with elegant surface depth.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Extra-Thick Coat', 'Maximum Wear', 'Italian Quality'],
    applications: ['Showrooms', 'Lobbies', 'Luxury Furniture'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'MAXIMUM WEAR RESISTANCE. SHIELD COAT.',
    heroTitle: 'ARMANI',
    heroDesc: 'Specifically engineered for maximum wear resistance, Armani Shield panels combine heavy-duty thickness with elegant surface depth.',
    heroTags: [
      { text: 'Extra-Thick Coat', icon: 'sparkles' },
      { text: 'Maximum Wear', icon: 'sparkles' },
      { text: 'Italian Quality', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Shield Coating', desc: 'Enhanced surface protection film', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 5,
    brandId: 'architecture',
    category: 'Veneers',
    pageNumLeft: 25,
    pageNumRight: 26,
    badge: 'Exotic Timber',
    title: 'Natural\nGrains.',
    tagline: 'Handpicked real wood veneers for architectural wonders',
    image: doorFittingsImg,
    brandName: 'Architecture',
    desc: 'Exquisite hand-selected natural wood veneers featuring rich textures and authentic wood grains from sustainable forests.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Group Matched Grains', 'Natural Timber', 'Easy Polishable'],
    applications: ['High-end Furniture', 'Main Doors', 'Wall Feature Panels'],
    specs: {
      'Wood Group': 'Exotic Hardwoods',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'NATURAL GRAINS. EXOTIC TIMBERS.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Exquisite hand-selected natural wood veneers featuring rich textures and authentic wood grains from sustainable forests.',
    heroTags: [
      { text: 'Group Matched Grains', icon: 'wood' },
      { text: 'Natural Timber', icon: 'wood' },
      { text: 'Easy Polishable', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 19,
    brandId: 'architecture-premium-2',
    category: 'Veneers',
    pageNumLeft: 27,
    pageNumRight: 28,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Luxury Woods',
    title: 'Exotic\nHardwoods.',
    tagline: 'Premium imported wood veneers for designer furniture',
    image: veneer2Img,
    brandName: 'Architecture',
    desc: 'Handpicked exotic wood veneers boasting striking patterns and rich color tones, sourced from sustainable global timber tracks.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Striking Patterns', 'Exotic Hardwoods', 'High Stability'],
    applications: ['Luxury Furniture', 'Wall Paneling', 'Main Doors'],
    specs: {
      'Wood Group': 'Premium Exotic Hardwoods',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'EXOTIC WOODS. STRIKING PATTERNS.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Handpicked exotic wood veneers boasting striking patterns and rich color tones, sourced from sustainable global timber tracks.',
    heroTags: [
      { text: 'Striking Patterns', icon: 'wood' },
      { text: 'Exotic Hardwoods', icon: 'wood' },
      { text: 'High Stability', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 20,
    brandId: 'architecture-premium-3',
    category: 'Veneers',
    pageNumLeft: 29,
    pageNumRight: 30,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Elite Collection',
    title: 'Flawless\nFinishes.',
    tagline: 'Sanded smooth to perfection for effortless polishing',
    image: veneer3Img,
    brandName: 'Architecture',
    desc: 'Pre-sanded and fleece-backed, Architecture Elite Veneers provide maximum durability and ease of polishing for premium modular components.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Pre-Sanded Smooth', 'Fleece Backed', 'Effortless Polish'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Executive Desks'],
    specs: {
      'Wood Group': 'Select European Timber',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'PRE-SANDED SMOOTH. FLEECE BACKED.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Pre-sanded and fleece-backed, Architecture Elite Veneers provide maximum durability and ease of polishing for premium modular components.',
    heroTags: [
      { text: 'Pre-Sanded Smooth', icon: 'wood' },
      { text: 'Fleece Backed', icon: 'wood' },
      { text: 'Effortless Polish', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 21,
    brandId: 'architecture-premium-4',
    category: 'Veneers',
    pageNumLeft: 31,
    pageNumRight: 32,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Artisan Selection',
    title: 'Timeless\nElegance.',
    tagline: 'Distinctive architectural veneers that stand out',
    image: veneer4Img,
    brandName: 'Architecture',
    desc: 'Featuring unique burl patterns and figure grains, our Artisan collection veneers are designed to create focus areas in luxury residences.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Unique Burl Grains', 'Figure Grains', 'Timeless Appeal'],
    applications: ['Feature Walls', 'TV Consoles', 'Main Entrance Doors'],
    specs: {
      'Wood Group': 'Artisan Selection Burl',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'UNIQUE BURL GRAINS. TIMELSS APPEAL.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Featuring unique burl patterns and figure grains, our Artisan collection veneers are designed to create focus areas in luxury residences.',
    heroTags: [
      { text: 'Unique Burl Grains', icon: 'wood' },
      { text: 'Figure Grains', icon: 'wood' },
      { text: 'Timeless Appeal', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 6,
    brandId: 'steel-wood',
    category: 'Architectural Hardware',
    pageNumLeft: 33,
    pageNumRight: 34,
    badge: 'Precision Hardware',
    title: 'Perfect\nEngineering.',
    tagline: 'Heavy-duty architectural hardware built to last',
    image: hardwareImg,
    brandName: 'Steel Wood',
    desc: 'Heavy-duty cabinet hinges, drawer runners, and modular fittings designed for silent operation and longevity.',
    thicknesses: ['Standard', 'Heavy Duty'],
    defaultThickness: 'Heavy Duty',
    features: ['Soft-Close Cushioning', 'Rust-Proof SS 304', 'Cycle Tested 100k+'],
    applications: ['Kitchen Drawers', 'Wardrobe Doors', 'Pantry Units'],
    specs: {
      'Material Grade': 'SS 304 Stainless Steel',
      'Load Capacity': 'Up to 45 kg',
      'Opening Angle': '110 Degrees'
    },
    heroSub: 'PRECISION ENGINEERING. PERFECT FUNCTIONALITY.',
    heroTitle: 'STEEL WOOD',
    heroDesc: 'Heavy-duty cabinet hinges, drawer runners, and modular fittings designed for silent operation, soft-close, and lifelong durability.',
    heroTags: [
      { text: 'Soft-Close Cushioning', icon: 'gear' },
      { text: 'SS 304 Grade', icon: 'gear' },
      { text: 'Cycle Tested 100k+', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Soft-Close Tech', desc: 'Quiet and smooth hydraulic dampening', icon: 'gear' },
      { title: 'SS 304 Grade', desc: 'Maximum rust and corrosion resistance', icon: 'gear' },
      { title: '100k Cycle Tested', desc: 'Built to withstand lifetime usage', icon: 'shield' },
      { title: 'Heavy Load Capacity', desc: 'Holds up to 45 kg weight easily', icon: 'calibrate' },
      { title: 'Modern Styling', desc: 'Sleek look for modular interiors', icon: 'sparkles' }
    ]
  },
  {
    id: 7,
    brandId: 'gurjan-club',
    category: 'Plywood',
    pageNumLeft: 35,
    pageNumRight: 36,
    badge: 'Structural Plywood',
    title: 'Elite Core\nIntegrity.',
    tagline: 'High load-bearing calibrated plywood',
    image: plywoodImg,
    brandName: 'Gurjan Club',
    desc: '100% pure Gurjan core plywood, calibrated for uniform thickness and exceptional strength for heavy load-bearing furniture.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'Super Strength Core', 'No Warp Guarantee'],
    applications: ['Heavy Cabinets', 'Beds & Sofa Frames', 'Office Partitions'],
    specs: {
      'Calibrated Tolerance': '± 0.2mm',
      'Wood Species': 'Premium Gurjan',
      'Adhesive': 'Phenolic PF Resin'
    },
    heroSub: 'ELITE INTEGRITY. STRUCTURAL GRADE.',
    heroTitle: 'GURJAN CLUB',
    heroDesc: '100% pure Gurjan core plywood, calibrated for uniform thickness and exceptional strength for heavy load-bearing furniture.',
    heroTags: [
      { text: '100% Calibrated', icon: 'calibrate' },
      { text: 'Super Strength Core', icon: 'wood' },
      { text: 'No Warp Guarantee', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Uniform thickness tolerance ±0.2mm', icon: 'calibrate' },
      { title: '100% Gurjan Core', desc: 'Selected imported premium plies', icon: 'wood' },
      { title: 'BWP Adhesive', desc: 'Bonded with pure Phenolic PF resin', icon: 'droplet' },
      { title: 'No-Warp Frame', desc: 'Perfect for custom modular units', icon: 'calibrate' },
      { title: 'Lifetime Guarantee', desc: 'Assured product warranty protection', icon: 'shield' }
    ]
  },
  {
    id: 8,
    brandId: 'gurjan-king',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    badge: 'Premium Calibrated',
    title: 'The King of\nPlywoods.',
    tagline: 'Double-pressed flat surfaces for modular designs',
    image: fancyDoorsImg,
    brandName: 'Gurjan King',
    desc: 'Double-pressed calibrated plywood offering unmatched flat surfaces and zero-core gaps. The ultimate choice for modular kitchens.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Zero Core Gaps', 'Sanded Smooth Finish', 'Moisture Resistant'],
    applications: ['Modular Kitchens', 'Wardrobes', 'Ceiling Panels'],
    specs: {
      'Press Type': 'Double Hot Pressed',
      'Core Plies': 'Selected Gurjan',
      'MR Rating': 'Water Resistant'
    },
    heroSub: 'DOUBLE PRESS. THE KING OF PLYWOODS.',
    heroTitle: 'GURJAN KING',
    heroDesc: 'Double-pressed calibrated plywood offering unmatched flat surfaces and zero-core gaps. The ultimate choice for modular kitchens.',
    heroTags: [
      { text: 'Zero Core Gaps', icon: 'calibrate' },
      { text: 'Sanded Smooth Finish', icon: 'sparkles' },
      { text: 'Moisture Resistant', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Smooth uniform sanding on faces', icon: 'calibrate' },
      { title: 'Zero Core Gaps', desc: 'No overlapping plies or voids', icon: 'wood' },
      { title: 'Boiling Water Proof', desc: 'Withstands heavy moisture exposure', icon: 'droplet' },
      { title: 'Screw Holding', desc: 'Superior grip strength for hinges', icon: 'gear' },
      { title: 'Green Standard', desc: 'Safe for kitchen modular storage', icon: 'leaf' }
    ]
  },
  {
    id: 9,
    brandId: 'hydraulic-hinge',
    category: 'Hardware&Fittings',
    pageNumLeft: 39,
    pageNumRight: 40,
    badge: 'Soft-Close Mechanism',
    title: 'Silent\nMovement.',
    tagline: 'Premium auto-close hydraulic hinges',
    image: hydraulicHingeImg,
    brandName: 'Hydraulic Hinge',
    desc: 'Premium grade auto-close hydraulic hinges crafted with high-strength stainless steel. Designed for silent cushioning and durable cabinetry operation.',
    thicknesses: ['Standard', 'Heavy Duty'],
    defaultThickness: 'Standard',
    features: ['Hydraulic Dampening', 'SS 304 Construction', '100k Cycle Tested'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Office Cabinets'],
    specs: {
      'Material': 'SS 304 Stainless Steel',
      'Opening Angle': '110 Degrees',
      'Mounting Type': 'Clip-on Base'
    },
    heroSub: 'SOFT-CLOSE MECHANISM. SILENT MOVEMENT.',
    heroTitle: 'HYDRAULIC HINGE',
    heroDesc: 'Premium grade auto-close hydraulic hinges crafted with high-strength stainless steel. Designed for silent cushioning and durable cabinetry operation.',
    heroTags: [
      { text: 'Soft-Close Dampening', icon: 'gear' },
      { text: 'SS 304 Grade', icon: 'shield' },
      { text: '100k Cycles Tested', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Hydraulic Cushioning', desc: 'Slam-free smooth soft closing', icon: 'gear' },
      { title: 'Rust Proof SS 304', desc: 'Maximum durability in humid conditions', icon: 'shield' },
      { title: 'Full Overlay Design', desc: 'Perfect clean alignment for doors', icon: 'calibrate' },
      { title: '100k Cycle Tested', desc: 'Engineered for decades of reliable use', icon: 'shield' },
      { title: 'Easy Installation', desc: 'Clip-on mechanism for quick mounts', icon: 'gear' }
    ]
  },
  {
    id: 13,
    brandId: 'drawer-channel',
    category: 'Hardware&Fittings',
    pageNumLeft: 41,
    pageNumRight: 42,
    badge: 'Precision Slides',
    title: 'Smooth\nGlide.',
    tagline: 'Telescopic ball-bearing drawer slides',
    image: drawerChannelImg,
    brandName: 'Drawer Channel',
    desc: 'Heavy-duty telescopic drawer runners with precision ball-bearings, soft-close cushioning, and full extension travel for heavy drawers.',
    thicknesses: ['35kg Rating', '45kg Rating'],
    defaultThickness: '45kg Rating',
    features: ['Full Extension Travel', 'Soft-Close Mechanism', 'Carbon Steel Body'],
    applications: ['Kitchen Drawers', 'Office Storage', 'Modular Closets'],
    specs: {
      'Slide Type': 'Telescopic Ball-bearing',
      'Weight Capacity': '45 kg',
      'Extension': 'Full Extension'
    },
    heroSub: 'PRECISION SLIDES. SMOOTH GLIDE.',
    heroTitle: 'DRAWER CHANNEL',
    heroDesc: 'Heavy-duty telescopic drawer runners with precision ball-bearings, soft-close cushioning, and full extension travel for heavy modular drawer units.',
    heroTags: [
      { text: 'Full Extension', icon: 'calibrate' },
      { text: 'Soft-Close Action', icon: 'gear' },
      { text: '45kg Load Rating', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Telescopic Action', desc: 'Three-fold smooth full extension slides', icon: 'calibrate' },
      { title: 'Soft-Close Dampener', desc: 'Prevents rebound and closes silently', icon: 'gear' },
      { title: 'Hardened Steel Balls', desc: 'Maintains lateral stability under load', icon: 'shield' },
      { title: '45kg Weight Support', desc: 'Holds heavy cookware baskets with ease', icon: 'shield' },
      { title: 'Quick Release Lever', desc: 'Easy drawer removal and cleaning access', icon: 'gear' }
    ]
  },
  {
    id: 14,
    brandId: 'kitchen-basket',
    category: 'Hardware&Fittings',
    pageNumLeft: 43,
    pageNumRight: 44,
    badge: 'Modular Kitchen',
    title: 'Organized\nSpaces.',
    tagline: 'Stainless steel modular wire basket systems',
    image: kitchenBasketImg,
    brandName: 'Kitchen Basket',
    desc: 'Premium food-grade stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and utensil load distribution.',
    thicknesses: ['Wire Basket', 'Perforated Sheet'],
    defaultThickness: 'Wire Basket',
    features: ['Anti-Rust Chrome', 'Easy to Clean', 'High Load Capacity'],
    applications: ['Under-counter Storage', 'Pantry Organizers', 'Pull-out Units'],
    specs: {
      'Basket Material': 'SS 304 Food-grade',
      'Finish Type': 'Chrome Electroplated',
      'Rust Resistance': 'Lifetime Warranty'
    },
    heroSub: 'MODULAR KITCHEN. ORGANIZED SPACES.',
    heroTitle: 'KITCHEN BASKET',
    heroDesc: 'Premium food-grade stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and heavy modular kitchen setups.',
    heroTags: [
      { text: 'Anti-Rust Chrome', icon: 'sparkles' },
      { text: 'Food-grade SS 304', icon: 'shield' },
      { text: 'High Load Capacity', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'SS 304 Food-grade', desc: 'Completely safe and hygienic structure', icon: 'shield' },
      { title: 'Electroplated Chrome', desc: 'Mirror finish with extreme scratch resistance', icon: 'sparkles' },
      { title: 'Heavy Wire Mesh', desc: 'Deep welds for structural load bearing', icon: 'wood' },
      { title: 'Easy Slide Mounts', desc: 'Seamlessly compatible with telescopic runners', icon: 'gear' },
      { title: 'Optimum Ventilation', desc: 'Open mesh prevents moisture and odors', icon: 'droplet' }
    ]
  },
  {
    id: 15,
    brandId: 'tandem-box',
    category: 'Hardware&Fittings',
    pageNumLeft: 45,
    pageNumRight: 46,
    badge: 'Double-wall System',
    title: 'Luxury\nDrawers.',
    tagline: 'Premium double-wall modular drawer system',
    image: tandemBoxNewImg,
    brandName: 'Tandem Box',
    desc: 'German-engineered double-wall metal drawer systems with synchronized smooth action runners, built-in soft-close dampeners, and sleek modern side profile walls.',
    thicknesses: ['Slimline Wall', 'Standard Metal Wall'],
    defaultThickness: 'Standard Metal Wall',
    features: ['Synchronized Movement', 'Soft-Close Silent', 'Premium Metallic Sides'],
    applications: ['High-end Kitchens', 'Premium Closets', 'Luxury Office Credenzas'],
    specs: {
      'System Type': 'Double-Wall Metallic Drawer',
      'Dynamic Capacity': '65 kg',
      'Height Options': '90mm / 180mm'
    },
    heroSub: 'DOUBLE-WALL SYSTEM. LUXURY DRAWERS.',
    heroTitle: 'TANDEM BOX',
    heroDesc: 'German-engineered double-wall metal drawer systems with synchronized smooth action runners, built-in soft-close dampeners, and sleek modern side profile walls.',
    heroTags: [
      { text: 'Synchronized Run', icon: 'gear' },
      { text: '65kg Dynamic Load', icon: 'shield' },
      { text: 'Soft-Close Silent', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Sleek Double-Wall', desc: 'Saves internal space with ultra-thin profiles', icon: 'calibrate' },
      { title: 'Synchronized Slide', desc: 'Fluid movement without sag or friction', icon: 'gear' },
      { title: '65kg Dynamic Load', desc: 'Built for very heavy drawer drawer units', icon: 'shield' },
      { title: 'Soft-Close System', desc: 'Hydraulic mechanism for silent cushioning', icon: 'gear' },
      { title: 'Modern Colors', desc: 'Anthracite, grey, and metallic white finishes', icon: 'sparkles' }
    ]
  },
  {
    id: 16,
    brandId: 'corner-carousel',
    category: 'Hardware&Fittings',
    pageNumLeft: 47,
    pageNumRight: 48,
    badge: 'Space Optimization',
    title: 'Maximum\nAccess.',
    tagline: 'Blind corner swing-out shelf organizer',
    image: hardwareFittings5,
    brandName: 'Corner Carousel',
    desc: 'Innovative blind corner hardware systems designed to maximize kitchen corner cabinets, providing easy swing-out access to deep shelves.',
    thicknesses: ['Left Hand Swing', 'Right Hand Swing'],
    defaultThickness: 'Right Hand Swing',
    features: ['Anti-slip Shelves', 'Full Swing-out Mechanism', 'Soft-Close Swing Action'],
    applications: ['Blind Corner Cabinets', 'Deep Corner Pantries', 'L-shaped Kitchens'],
    specs: {
      'Shelf Type': 'Anti-slip Wooden / Wire Shelves',
      'Shelves Count': '2 Rotary Shelves',
      'Weight Capacity': '20 kg per shelf'
    },
    heroSub: 'SPACE OPTIMIZATION. MAXIMUM ACCESS.',
    heroTitle: 'CORNER CAROUSEL',
    heroDesc: 'Innovative blind corner hardware systems designed to maximize kitchen corner cabinets, providing easy swing-out access to deep shelves.',
    heroTags: [
      { text: 'Anti-slip Shelves', icon: 'sparkles' },
      { text: 'Full Swing-out', icon: 'calibrate' },
      { text: '20kg per Shelf', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Swing-out Access', desc: 'Brings all stored items out of the corner cabinet', icon: 'calibrate' },
      { title: 'Anti-slip Surface', desc: 'Keeps kitchenware securely in place during rotation', icon: 'sparkles' },
      { title: 'Height Adjustable', desc: 'Shelves can be raised or lowered to fit tall items', icon: 'gear' },
      { title: '20kg Capacity', desc: 'Strong steel support arms hold heavy cookware', icon: 'shield' },
      { title: 'Soft Closing Swing', desc: 'Pulls back into the cabinet with gentle dampening', icon: 'gear' }
    ]
  },
  {
    id: 10,
    brandId: 'gurjan-star',
    category: 'Plywood',
    pageNumLeft: 49,
    pageNumRight: 50,
    badge: 'Flexible Design',
    title: 'Flexible\nSolutions.',
    tagline: 'Specially formulated bendable plywood for curved counters',
    image: gurjanStarImg,
    brandName: 'Gurjan Star',
    desc: 'Specially formulated bendable plywood designed for creating curved shapes, round counters, and architectural arches.',
    thicknesses: ['4mm', '6mm', '9mm', '12mm', '16mm'],
    defaultThickness: '6mm',
    features: ['360° Flexibility', 'Grain Parallel Bending', 'No Splitting'],
    applications: ['Reception Desks', 'Curved Pillars', 'Decorative Arches'],
    specs: {
      'Bending Radius': 'Min 10 cm',
      'Core Material': 'Flexible Gurjan',
      'Bonding': 'Flexible Resin adhesive'
    },
    heroSub: 'FLEXIBLE SOLUTIONS. BENDABLE DESIGN.',
    heroTitle: 'GURJAN STAR',
    heroDesc: 'Specially formulated bendable plywood designed for creating curved shapes, round counters, and architectural arches.',
    heroTags: [
      { text: '360° Flexibility', icon: 'flex' },
      { text: 'Grain Parallel Bending', icon: 'flex' },
      { text: 'No Splitting', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '360° Flexi Bending', desc: 'Arches, curved counters, columns', icon: 'flex' },
      { title: 'Grain Parallel Ply', desc: 'Uniform bend without splitting', icon: 'flex' },
      { title: 'Gurjan Quality Core', desc: 'Strong selected flexible plies', icon: 'wood' },
      { title: 'Resin Bonded', desc: 'Flexible polymer adhesive coat', icon: 'droplet' },
      { title: 'Zero Cracking', desc: 'Smooth seamless curved surfaces', icon: 'shield' }
    ]
  }
];

export const ProductsPage = ({ onNavigate, search }) => {
  useDocumentMetadata(
    "Plywood, Cabinet Fittings & Kitchen Accessories | Pakshal",
    "Explore our extensive catalog of Hettich, Ebco, Dorset, and Hafele modular kitchen accessories, drawer channels, tandem boxes, and premium doors."
  );
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCatalogScale = () => {
    if (windowDimensions.width < 768) return { scale: 1, marginBot: 0 };

    const targetWidth = windowDimensions.width >= 1280 ? 1328 : 960;
    const scaleWidth = (windowDimensions.width - 48) / targetWidth;

    const targetHeight = windowDimensions.width >= 1280 ? 720 : 640;
    const scaleHeight = (windowDimensions.height - 120) / targetHeight;

    let scale = Math.min(scaleWidth, scaleHeight);
    scale = Math.min(1.0, Math.max(0.5, scale));

    const heightReduction = 600 * (1 - scale);
    const marginBot = -heightReduction + 16;

    return { scale, marginBot };
  };

  const { scale, marginBot } = getCatalogScale();
  const renderHeroTagIcon = (iconName) => {
    switch (iconName) {
      case 'wood':
        return <Trees className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'droplet':
        return <Droplets className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'gear':
        return <Settings className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'calibrate':
        return <Ruler className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'flex':
        return <RefreshCw className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
    }
  };

  const renderOverviewTagIcon = (iconName) => {
    switch (iconName) {
      case 'wood':
        return <Trees className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'droplet':
        return <Droplets className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'bug':
        return <Bug className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'shield':
        return <ShieldCheck className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'leaf':
        return <Leaf className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'calibrate':
        return <Ruler className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'gear':
        return <Settings className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'flex':
        return <RefreshCw className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
    }
  };

  const getOverviewTitle = (spread) => {
    const brand = spread.brandName;
    const cat = spread.category;
    const lowerBrand = brand.toLowerCase();
    const lowerCat = cat.toLowerCase();

    if (
      lowerBrand.includes(lowerCat) ||
      (lowerCat === 'acrylic panels' && lowerBrand.includes('panels')) ||
      (lowerCat === 'architectural hardware' && lowerBrand.includes('hardware')) ||
      lowerBrand.includes('plywood') ||
      lowerBrand.includes('laminate') ||
      lowerBrand.includes('veneer') ||
      lowerBrand.includes('hardware&fittings')
    ) {
      return brand;
    }
    return `${brand} ${cat}`;
  };

  const getBrandApplications = (spread) => {
    const cat = spread.category;

    if (cat === 'Plywood') {
      return [
        {
          title: 'KITCHENS',
          desc: 'Modular kitchen cabinets & shutters',
          image: kitchensCardImg
        },
        {
          title: 'WARDROBES',
          desc: 'Premium wardrobes & storage solutions',
          image: wardrobesCardImg
        },
        {
          title: 'OFFICE FURNITURE',
          desc: 'Desks, partitions & office interiors',
          image: officefurniture
        },
        {
          title: 'INTERIOR PANELS',
          desc: 'Wall cladding & decorative panels',
          image: interiorpanels
        }
      ];
    } else if (cat === 'Laminates' || cat === 'Acrylic Panels' || cat === 'Veneers') {
      return [
        {
          title: 'KITCHENS',
          desc: 'High-gloss cabinet shutters & panels',
          image: kitchensCardImg
        },
        {
          title: 'WARDROBES',
          desc: 'Decorative wardrobe doors & frontages',
          image: wardrobesCardImg
        },
        {
          title: 'WALL PANELING',
          desc: 'Feature walls & luxury architectural accents',
          image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'LUXURY FURNITURE',
          desc: 'Tabletops, TV consoles & premium joinery',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
        }
      ];
    } else {
      // Architectural Hardware etc.
      return [
        {
          title: 'KITCHEN DRAWERS',
          desc: 'Soft-close drawer systems & runners',
          image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'WARDROBE SYSTEMS',
          desc: 'Smooth sliding channels & door fittings',
          image: wardrobesCardImg
        },
        {
          title: 'OFFICE DESKS',
          desc: 'Ergonomic cable managers & brackets',
          image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'MAIN DOORS',
          desc: 'Designer pull handles & security locks',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
        }
      ];
    }
  };

  const getTechnicalSpecs = (spread) => {
    const cat = spread.category;

    if (cat === 'Plywood') {
      return {
        specs: [
          { label: 'Core Material', value: spread.specs['Core Material'] || spread.specs['Wood Species'] || 'Imported Gurjan', icon: 'tree' },
          { label: 'Adhesive', value: spread.specs['Bonding Adhesive'] || spread.specs['Bonding Glue'] || 'Phenolic Formaldehyde', icon: 'glue' },
          { label: 'Grade', value: spread.brandId.includes('marine') ? 'BWP Marine Grade (IS 710)' : 'BWP (Boiling Water Proof)', icon: 'grade' },
          { label: 'Density', value: 'High Density Hardwood', icon: 'layers' },
          { label: 'Moisture Content', value: 'Below 12%', icon: 'moisture' },
          { label: 'Thickness Tolerance', value: '±0.5mm', icon: 'ruler' },
          { label: 'Warranty', value: spread.specs['Manufacturer Warranty'] || 'Lifetime Guarantee*', icon: 'warranty' },
          { label: 'Certification', value: 'ISO 9001:2015 Certified', icon: 'cert' }
        ],
        highlights: [
          { title: 'Water Proof', desc: 'Withstands boiling water conditions', icon: 'water-proof' },
          { title: 'Termite Proof', desc: 'Special treatment for termite resistance', icon: 'termite-proof' },
          { title: 'Borer Resistant', desc: 'Highly resistant to borers & fungi', icon: 'borer-proof' },
          { title: 'High Strength', desc: 'Superior load bearing capacity', icon: 'strength' },
          { title: 'Smooth Finish', desc: 'Calibrated & uniform thickness', icon: 'finish' }
        ]
      };
    } else if (cat === 'Laminates' || cat === 'Acrylic Panels' || cat === 'Veneers') {
      return {
        specs: [
          { label: 'Base Material', value: 'Phenolic Resin Kraft / Acrylic', icon: 'layers' },
          { label: 'Surface Finish', value: spread.specs['Surface Finish'] || 'Matt / Glossy / Textured', icon: 'finish' },
          { label: 'Thickness', value: spread.defaultThickness || '1.0mm', icon: 'ruler' },
          { label: 'Heat Resistance', value: 'Up to 180°C', icon: 'moisture' },
          { label: 'Stain Resistance', value: 'Excellent (Wipe Clean)', icon: 'cert' },
          { label: 'Scratch Rating', value: '4H Hardness (High Scratch Res.)', icon: 'grade' },
          { label: 'Warranty', value: '10 Years Warranty', icon: 'warranty' },
          { label: 'Eco Certification', value: 'GreenGuard Certified / Non-Toxic', icon: 'tree' }
        ],
        highlights: [
          { title: 'Scratch Resistant', desc: 'Protective top wear layer prevents scuffs', icon: 'grade' },
          { title: 'Stain Proof', desc: 'Does not absorb household liquids or stains', icon: 'cert' },
          { title: 'Heat Proof', desc: 'Resists thermal damage up to 180°C', icon: 'water-proof' },
          { title: 'UV Stabilized', desc: 'No color fading under standard indoor sunlight', icon: 'finish' },
          { title: 'Eco Friendly', desc: 'Sourced from sustainable wood pulp matrices', icon: 'tree' }
        ]
      };
    } else {
      // Architectural Hardware etc.
      return {
        specs: [
          { label: 'Material Grade', value: spread.specs['Material Grade'] || 'SS 304 Stainless Steel', icon: 'layers' },
          { label: 'Mechanism', value: 'Hydraulic soft-close damping', icon: 'glue' },
          { label: 'Load Capacity', value: spread.specs['Load Capacity'] || '45 kg per pair', icon: 'strength' },
          { label: 'Cycle Testing', value: '100,000+ opening cycles', icon: 'cert' },
          { label: 'Opening Angle', value: spread.specs['Opening Angle'] || '110 Degrees', icon: 'ruler' },
          { label: 'Finish', value: 'Satin Finish / Electroplated Black', icon: 'finish' },
          { label: 'Rust Protection', value: 'Rust-free salt spray tested', icon: 'grade' },
          { label: 'Warranty', value: 'Lifetime Rust-Free Guarantee', icon: 'warranty' }
        ],
        highlights: [
          { title: 'Soft Close Tech', desc: 'Integrated silent closure mechanism', icon: 'water-proof' },
          { title: 'SS 304 Grade', desc: 'Superior rust and corrosion resistance', icon: 'cert' },
          { title: 'Cycle Tested', desc: 'Tested to withstand daily kitchen/room use', icon: 'grade' },
          { title: 'Heavy Load Rating', desc: 'Excellent support for wider drawer panels', icon: 'strength' },
          { title: '3D Adjustability', desc: 'Easy alignment and leveling controls', icon: 'finish' }
        ]
      };
    }
  };

  const renderSpecIcon = (iconName) => {
    switch (iconName) {
      case 'tree':
        return <Trees className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'glue':
        return <FlaskConical className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'grade':
        return <Lock className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'moisture':
        return <Droplets className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'ruler':
        return <Ruler className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'warranty':
        return <ShieldCheck className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'cert':
        return <BadgeCheck className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      default:
        return null;
    }
  };

  const renderHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'water-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Droplets className="absolute w-4 h-4 text-[#006e2f] top-[9px] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'termite-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'borer-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#006e2f] rotate-90 shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'strength':
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'finish':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Layers className="w-6 h-6 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Sparkles className="absolute top-0 right-0 w-3.5 h-3.5 text-amber-500 shrink-0" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
          </div>
        );
    }
  };

  const getIndexFromSearch = (searchStr) => {
    const params = new URLSearchParams(searchStr || '');
    const category = params.get('category');
    if (!category) return 0;
    switch (category.toLowerCase()) {
      case 'plywood': return 0;
      case 'laminates': return 3;
      case 'fancy-doors': return 24;
      case 'hardware': return 19;
      case 'hardware-fittings': return 19;
      case 'hardware&fittings': return 19;
      case 'door-fittings': return 12;
      case 'kitchen-accessories': return 6;
      case 'sliding-channels': return 20;
      case 'tandem-boxes': return 22;
      default: return 0;
    }
  };

  const [currentSpreadIdx, setCurrentSpreadIdx] = useState(() => {
    return getIndexFromSearch(search || window.location.search);
  });
  const [prevSpreadIdx, setPrevSpreadIdx] = useState(currentSpreadIdx);

  useEffect(() => {
    const targetIdx = getIndexFromSearch(search || window.location.search);
    if (targetIdx !== currentSpreadIdx) {
      setCurrentSpreadIdx(targetIdx);
      setPrevSpreadIdx(targetIdx);
    }
  }, [search]);
  const [flipState, setFlipState] = useState('idle'); // 'idle', 'flipping-next', 'flipping-prev'
  const [selectedThicknesses, setSelectedThicknesses] = useState({});
  const [selectedSize, setSelectedSize] = useState('8 x 4');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({
    'Plywood': true
  });

  useEffect(() => {
    setSelectedSize('8 x 4');
  }, [currentSpreadIdx]);

  // Group spreads by category
  const categories = SPREADS.reduce((acc, spread, idx) => {
    if (spread.hideFromIndex) return acc;
    if (!acc[spread.category]) {
      acc[spread.category] = [];
    }
    acc[spread.category].push({ spread, idx });
    return acc;
  }, {});

  const toggleCategory = (catName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));

    const firstMatch = SPREADS.findIndex(s => s.category === catName && !s.hideFromIndex);
    if (firstMatch !== -1) {
      handleThumbnailClick(firstMatch);
    }
  };

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const activeSpread = SPREADS[currentSpreadIdx];
  const activeCategorySpreads = SPREADS.filter(s => s.category === activeSpread.category);
  const activeCatIdx = activeCategorySpreads.findIndex(s => s.id === activeSpread.id);

  useEffect(() => {
    if (activeSpread && activeSpread.category) {
      setExpandedCategories(prev => ({
        ...prev,
        [activeSpread.category]: true
      }));
    }
  }, [currentSpreadIdx, activeSpread]);

  // Update default message whenever active brand, thickness, or size changes
  useEffect(() => {
    const thicknessStr = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;
    const sizeStr = selectedSize ? ` (${selectedSize} ft)` : '';
    setEnquiryForm(prev => ({
      ...prev,
      message: `I am interested in ${activeSpread.brandName} (${thicknessStr}${sizeStr}). Please share pricing and availability.`
    }));
  }, [currentSpreadIdx, selectedThicknesses, activeSpread, selectedSize]);

  const handleThicknessSelect = (thickness) => {
    setSelectedThicknesses(prev => ({
      ...prev,
      [currentSpreadIdx]: thickness
    }));
  };

  const handleGetQuote = () => {
    const isPlywoodOrBoard = activeSpread.category === 'Plywood';
    const thicknessStr = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;
    const sizeStr = selectedSize ? ` (${selectedSize} ft)` : '';

    let message = '';
    if (isPlywoodOrBoard) {
      message = `I am interested in ${activeSpread.brandName} Plywood - ${thicknessStr}${sizeStr}. Please share pricing and availability.`;
    } else {
      message = `I am interested in ${getOverviewTitle(activeSpread)} (${thicknessStr}). Please share pricing and availability.`;
    }

    // Update path to /contact with parameters
    const searchParams = new URLSearchParams();
    searchParams.set('subject', 'quote');
    searchParams.set('message', message);

    window.history.pushState({}, '', `/contact?${searchParams.toString()}`);
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const triggerFlip = (nextIdx, direction) => {
    setPrevSpreadIdx(currentSpreadIdx);
    setCurrentSpreadIdx(nextIdx);
    setFlipState(direction === 'next' ? 'flipping-next' : 'flipping-prev');

    // Reset flip state after animation completes
    setTimeout(() => {
      setFlipState('idle');
    }, 700);
  };

  const handlePrev = () => {
    if (activeCatIdx > 0 && flipState === 'idle') {
      const prevSpread = activeCategorySpreads[activeCatIdx - 1];
      const prevGlobalIdx = SPREADS.findIndex(s => s === prevSpread);
      if (prevGlobalIdx !== -1) {
        triggerFlip(prevGlobalIdx, 'prev');
      }
    }
  };

  const handleNext = () => {
    if (activeCatIdx < activeCategorySpreads.length - 1 && flipState === 'idle') {
      const nextSpread = activeCategorySpreads[activeCatIdx + 1];
      const nextGlobalIdx = SPREADS.findIndex(s => s === nextSpread);
      if (nextGlobalIdx !== -1) {
        triggerFlip(nextGlobalIdx, 'next');
      }
    }
  };

  const handleThumbnailClick = (idx) => {
    if (idx !== currentSpreadIdx && flipState === 'idle') {
      triggerFlip(idx, idx > currentSpreadIdx ? 'next' : 'prev');
    }
  };

  const handleDownload = () => {
    setToastMsg(`Preparing ${activeSpread.brandName} Catalogue PDF...`);
    setTimeout(() => {
      setToastMsg(`Catalog PDF for ${activeSpread.brandName} downloaded successfully!`);
      setTimeout(() => {
        setToastMsg('');
      }, 2500);
    }, 1500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToastMsg('Thank you! Your enquiry has been received.');
    setShowEnquiryModal(false);
    setTimeout(() => {
      setToastMsg('');
    }, 4000);
  };

  const activeThickness = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;

  const renderLeftPage = (idx) => {
    const spread = SPREADS[idx];
    if (!spread) return null;
    const catSpreads = SPREADS.filter(s => s.category === spread.category);
    const catIdx = catSpreads.findIndex(s => s === spread);
    const canGoPrev = catIdx > 0 && flipState === 'idle';
    return (
      <div
        onClick={() => {
          if (canGoPrev) {
            handlePrev();
          }
        }}
        className={`page-content page-content-left flex-1 border-r border-slate-100 p-6 lg:p-8 flex flex-col relative overflow-hidden bg-[#fdfdfa] text-left w-full ${canGoPrev ? 'lg:cursor-pointer' : ''}`}
      >
        {/* Page curvature effect */}
        <div className="page-curvature-left" style={{ width: '60px' }} />

        {/* Left Page Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase italic mb-0.5 text-slate-800">
              Pakshal <span className="text-[#006e2f]">Agencies</span>
            </span>
          </div>
          <div className="text-right">
            <div className="text-slate-800 font-black text-xs mb-0.5">{spread.brandName.toUpperCase()}</div>
            <div className="text-[#006e2f] font-bold text-[10px]">+91 9247449522</div>
          </div>
        </div>

        {/* Large Product Showcase Image */}
        <div className="relative flex-grow rounded-xl overflow-hidden mb-4 shadow-inner min-h-[180px] md:min-h-[200px] lg:min-h-[210px] bg-slate-50 border border-slate-100">
          <img
            alt={spread.brandName}
            className="w-full h-full object-cover"
            src={spread.image}
          />
        </div>

        {/* Bottom Page Number */}
        <div className="absolute bottom-4 left-8 text-[10px] font-black text-slate-400 z-20">Pg. {spread.pageNumLeft}</div>
      </div>
    );
  };

  const renderRightPage = (idx) => {
    const spread = SPREADS[idx];
    if (!spread) return null;
    const thickness = selectedThicknesses[idx] || spread.defaultThickness;
    const catSpreads = SPREADS.filter(s => s.category === spread.category);
    const catIdx = catSpreads.findIndex(s => s === spread);
    const canGoNext = catIdx !== -1 && catIdx < catSpreads.length - 1 && flipState === 'idle';
    return (
      <div
        onClick={() => {
          if (canGoNext) {
            handleNext();
          }
        }}
        className={`page-content page-content-right flex-1 p-6 lg:p-8 flex flex-col relative overflow-hidden bg-[#fdfdfa] text-left w-full ${canGoNext ? 'lg:cursor-pointer' : ''}`}
      >
        {/* Page curvature effect */}
        <div className="page-curvature-right" style={{ width: '60px' }} />

        {/* Right Page Header */}
        <div className="flex justify-between items-baseline mb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-none mb-1">{spread.brandName}</h2>
            <div className="h-1.5 w-12 bg-[#006e2f] mb-2 rounded-full" />
            <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed max-w-sm">
              {spread.desc}
            </p>
          </div>
        </div>

        <div className="space-y-4">

          {/* Thickness Selection Chips */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Available Thickness</h3>
            <div className="flex flex-wrap gap-2">
              {spread.thicknesses.map(thick => (
                <span
                  key={thick}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-white text-slate-700 select-none"
                >
                  {thick}
                </span>
              ))}
            </div>
          </div>

          {/* Core Features & Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Core Features</h3>
              <div className="space-y-2">
                {spread.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#006e2f] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-bold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Applications</h3>
              <div className="flex flex-wrap gap-1.5">
                {spread.applications.map((app, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-[9px] font-black uppercase tracking-wider">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Technical Specifications</h3>
              <span className="text-[8px] font-black text-[#006e2f] px-2 py-0.5 bg-white border border-green-700/20 rounded-full uppercase tracking-wider">
                Premium Quality
              </span>
            </div>
            <div className="space-y-2">
              {Object.entries(spread.specs).map(([key, val]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:justify-between text-[11px] border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0 gap-1 sm:gap-2">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">{key}</span>
                  <span className="text-slate-900 font-black uppercase sm:text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Page Number */}
        <div className="absolute bottom-4 right-8 text-[10px] font-black text-slate-400 z-20">Pg. {spread.pageNumRight}</div>
      </div>
    );
  };

  const renderSidebarContent = () => {
    return (
      <div className="space-y-4 flex-grow overflow-y-auto pr-1 pb-4 min-h-0 custom-scrollbar max-h-[calc(100vh-180px)] lg:max-h-[calc(100vh-280px)]">
        {Object.entries(categories).map(([catName, items]) => {
          const isExpanded = !!expandedCategories[catName];
          return (
            <div key={catName} className="border-b border-slate-100/50 pb-2 last:border-b-0">
              {/* Category Dropdown Header */}
              <button
                onClick={() => toggleCategory(catName)}
                className="w-full flex items-center justify-between py-2 text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 cursor-pointer select-none"
              >
                <span>{catName}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Brands List (Dropdown Content) */}
              <div
                className={`space-y-1 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-60 opacity-100 mt-1 pb-1' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
              >
                {items.map(({ spread, idx }) => {
                  const isActive = idx === currentSpreadIdx ||
                    (SPREADS[currentSpreadIdx].parentBrandId && SPREADS[currentSpreadIdx].parentBrandId === spread.brandId);
                  return (
                    <button
                      key={spread.id}
                      onClick={() => {
                        handleThumbnailClick(idx);
                        setShowSidebar(false);
                      }}
                      className={`w-full text-left py-2 px-3 rounded-lg text-[13px] transition-all flex items-center justify-between cursor-pointer ${isActive
                        ? 'bg-[#C9A44C]/10 text-[#C9A44C] font-black'
                        : 'bg-transparent text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                        }`}
                    >
                      <span className="truncate pr-1">{spread.brandName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F6] font-sans pt-[86px] pb-4 select-none text-slate-800">

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/50 px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-scale-up font-bold text-xs uppercase tracking-wider">
          <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l3.293-3.293a1 1 0 011.414 1.414z" />
          </svg>
          {toastMsg}
        </div>
      )}



      {/* Dynamic Catalog Hero Banner (Full Bleed) */}
      <div className="w-full bg-[#F5EDE0] text-slate-800 relative min-h-[260px] flex items-stretch border-b border-[#FAF2DF] animate-fade-in mb-12 shadow-xs">
        {/* Centered layout container to align contents with page grid */}
        <div className="max-w-[1280px] mx-auto w-full px-6 flex flex-col md:flex-row items-stretch relative">

          {/* Left side text contents - solid background is defined on parent wrapper */}
          <div className="flex-1 py-10 md:py-14 flex flex-col justify-center text-left relative z-20 md:max-w-[42%] lg:max-w-[45%]">
            <span className="text-[10px] text-[#8c6d23] tracking-[0.25em] font-black uppercase mb-2 block animate-pulse">
              {activeSpread.heroSub || 'PREMIUM QUALITY. TIMELESS STRENGTH.'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight uppercase tracking-tight font-sans">
              {activeSpread.heroTitle || activeSpread.brandName}
            </h2>
            <p className="text-slate-650 font-medium text-xs sm:text-sm leading-relaxed mt-4 max-w-xl">
              {activeSpread.heroDesc || activeSpread.desc}
            </p>

            {/* Row of dynamic tags */}
            <div className="flex flex-wrap gap-4 mt-6">
              {(activeSpread.heroTags || []).map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#C9A44C]/35 flex items-center justify-center shrink-0 shadow-xs">
                    {renderHeroTagIcon(tag.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 tracking-wide">{tag.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image showcase with slanted cut matching the user's line */}
          <div
            className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden pointer-events-none z-10"
            style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            <img
              src={activeSpread.image}
              className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-10000"
              alt={activeSpread.brandName}
            />
          </div>

        </div>
      </div>

      {/* Brochure Section Heading */}
      <div className="max-w-[1280px] mx-auto px-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
          <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm">
            <svg className="w-4 h-4 text-[#006e2f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">Product Catalogue</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
            <span className="text-[10px] font-bold text-slate-400">Browse by Brand</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-slate-200 to-transparent" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 flex flex-col xl:flex-row gap-4 items-start relative">
        {/* Desktop Sidebar Navigation */}
        <aside 
          className="catalog-sidebar hidden xl:block w-80 sticky top-32 flex-shrink-0 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200/40 shadow-sm h-[600px] flex flex-col overflow-hidden" 
          style={windowDimensions.width >= 1280 ? {
            transform: `translateX(${-16 * scale}px) scale(${scale})`,
            transformOrigin: 'top left'
          } : { transform: 'translateX(-16px)' }}
        >
          {/* Desktop Title Header */}
          <div className="mb-5 pb-3 border-b border-slate-200/60 flex-shrink-0 text-left">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#C9A44C]">
              Catalogue Index
            </h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">
              Select Brand to View Page
            </p>
          </div>
          {renderSidebarContent()}
        </aside>

        {/* Main booklet area wrapper */}
        <div className="flex-1 w-full min-w-0 flex flex-col">
          {/* The Open Book */}
          <div className="w-full pb-8 mb-4 overflow-hidden md:overflow-visible">
            <div 
              className="book-outer-wrap flex-shrink-0 relative"
              style={windowDimensions.width >= 768 ? {
                width: '960px',
                left: '50%',
                transform: `translate(-50%, 0) scale(${scale})`,
                transformOrigin: 'top center',
                marginBottom: `${marginBot}px`
              } : {}}
            >
              <div className="book-container book-shadow-3d relative">

                {/* Hardcover structural base wrapping the stacks */}
                <div className="book-hardcover-base" style={{ inset: '-4px -18px -18px -18px' }} />

                {/* Realistic Page Stack Effect (Left, Right, and Bottom edges) */}
                {/* Right Side Pages Stack */}
                <div className="absolute top-[2px] bottom-[2px] right-[-3px] w-[3px] bg-[#fdfdfa] border-r-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-r-md" style={{ zIndex: -10 }} />
                <div className="absolute top-[4px] bottom-[4px] right-[-6px] w-[3px] bg-[#fdfdfa] border-r-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-r-md" style={{ zIndex: -20 }} />
                <div className="absolute top-[6px] bottom-[6px] right-[-9px] w-[3px] bg-[#fdfdfa] border-r-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-r-md" style={{ zIndex: -30 }} />
                <div className="absolute top-[8px] bottom-[8px] right-[-12px] w-[3px] bg-[#fdfdfa] border-r-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-r-md" style={{ zIndex: -40 }} />
                <div className="absolute top-[10px] bottom-[10px] right-[-15px] w-[3px] bg-[#fdfdfa] border-r-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-r-md" style={{ zIndex: -50 }} />

                {/* Left Side Pages Stack */}
                <div className="absolute top-[2px] bottom-[2px] left-[-3px] w-[3px] bg-[#fdfdfa] border-l-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-l-md" style={{ zIndex: -10 }} />
                <div className="absolute top-[4px] bottom-[4px] left-[-6px] w-[3px] bg-[#fdfdfa] border-l-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-l-md" style={{ zIndex: -20 }} />
                <div className="absolute top-[6px] bottom-[6px] left-[-9px] w-[3px] bg-[#fdfdfa] border-l-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-l-md" style={{ zIndex: -30 }} />
                <div className="absolute top-[8px] bottom-[8px] left-[-12px] w-[3px] bg-[#fdfdfa] border-l-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-l-md" style={{ zIndex: -40 }} />
                <div className="absolute top-[10px] bottom-[10px] left-[-15px] w-[3px] bg-[#fdfdfa] border-l-2 border-[#000000]/25 border-b border-[#000000]/10 pointer-events-none rounded-l-md" style={{ zIndex: -50 }} />

                {/* Bottom Pages Stack */}
                <div className="absolute bottom-[-3px] left-[2px] right-[2px] h-[3px] bg-[#fdfdfa] border-b-2 border-[#000000]/25 pointer-events-none rounded-b-md" style={{ zIndex: -10 }} />
                <div className="absolute bottom-[-6px] left-[4px] right-[4px] h-[3px] bg-[#fdfdfa] border-b-2 border-[#000000]/25 pointer-events-none rounded-b-md" style={{ zIndex: -20 }} />
                <div className="absolute bottom-[-9px] left-[6px] right-[6px] h-[3px] bg-[#fdfdfa] border-b-2 border-[#000000]/25 pointer-events-none rounded-b-md" style={{ zIndex: -30 }} />
                <div className="absolute bottom-[-12px] left-[8px] right-[8px] h-[3px] bg-[#fdfdfa] border-b-2 border-[#000000]/25 pointer-events-none rounded-b-md" style={{ zIndex: -40 }} />
                <div className="absolute bottom-[-15px] left-[10px] right-[10px] h-[3px] bg-[#fdfdfa] border-b-2 border-[#000000]/25 pointer-events-none rounded-b-md" style={{ zIndex: -50 }} />

                {/* Realistic Spine Elements */}
                <div className="book-spine" />
                <div className="spine-binding" />

                <div className="flex flex-col md:flex-row relative">

                  {/* Left Page (static under flip overlay) */}
                  {renderLeftPage(flipState === 'flipping-next' ? prevSpreadIdx : currentSpreadIdx)}

                  {/* Right Page (static under flip overlay) */}
                  {renderRightPage(flipState === 'flipping-prev' ? prevSpreadIdx : currentSpreadIdx)}

                  {/* 3D Page Turning Card Overlay */}
                  {flipState !== 'idle' && (
                    <div className={`hidden md:block flip-card ${flipState === 'flipping-next' ? 'flip-card-next' : 'flip-card-prev'}`}>
                      {/* Front of the flipping page */}
                      <div className="flip-front">
                        {flipState === 'flipping-next'
                          ? renderRightPage(prevSpreadIdx)
                          : renderLeftPage(prevSpreadIdx)
                        }
                      </div>
                      {/* Back of the flipping page */}
                      <div className="flip-back">
                        {flipState === 'flipping-next'
                          ? renderLeftPage(currentSpreadIdx)
                          : renderRightPage(currentSpreadIdx)
                        }
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              disabled={activeCatIdx === 0 || flipState !== 'idle'}
              className="flex items-center gap-2 group text-slate-800 font-bold text-xs cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span className="hidden sm:inline tracking-tight">Previous Spread</span>
            </button>

            <div className="px-6 py-2 bg-white rounded-full shadow-sm border border-slate-100 font-black text-xs text-slate-800">
              {activeSpread.pageNumLeft} - {activeSpread.pageNumRight} <span className="text-slate-400 font-medium mx-1.5">in</span> {activeSpread.category}
            </div>

            <button
              onClick={handleNext}
              disabled={activeCatIdx === activeCategorySpreads.length - 1 || flipState !== 'idle'}
              className="flex items-center gap-2 group text-slate-800 font-bold text-xs cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline tracking-tight">Next Spread</span>
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Overview Section - Interactive Selection Component */}
      {(() => {
        const isPlywoodOrBoard = activeSpread.category === 'Plywood';

        if (!isPlywoodOrBoard) {
          // Render the standard Product Overview card for Laminates, Hardware, Veneers, etc.
          return (
            <div className="max-w-[1280px] mx-auto px-4 mt-16 mb-16 animate-fade-in">
              <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-8 md:p-12 hover:shadow-md transition-all duration-300">
                <div className="text-center mb-12">
                  <span className="text-[11px] font-black tracking-[0.25em] text-[#006e2f] uppercase block mb-2">
                    Product Overview
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {getOverviewTitle(activeSpread)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 justify-items-stretch text-center mb-12">
                  {(activeSpread.overviewFeatures || []).map((feature, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        {renderOverviewTagIcon(feature.icon)}
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <h4 className="text-[15px] font-black text-slate-900 leading-tight tracking-tight">
                          {feature.title}
                        </h4>
                        <p className="text-[12.5px] font-semibold text-slate-500 mt-1.5 leading-snug max-w-[185px]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full border-t border-slate-100 pt-10">
                  <button
                    onClick={handleGetQuote}
                    className="w-full sm:w-auto px-10 py-4 bg-[#006e2f] hover:bg-[#005c26] text-white text-[11px] font-black tracking-widest uppercase rounded-lg shadow-sm transition-all flex items-center justify-center gap-3 cursor-pointer hover:shadow-md transform active:scale-95"
                  >
                    Get Quote
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <a
                    href={`https://wa.me/919247449522?text=${encodeURIComponent(`I am interested in ${getOverviewTitle(activeSpread)} (${activeThickness}). Please share pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-4 bg-white border border-[#006e2f] hover:bg-[#f0f9f4] text-[#006e2f] text-[11px] font-black tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm hover:shadow-md transform active:scale-95"
                  >
                    Whatsapp Us
                    <svg className="w-4 h-4 fill-current text-[#006e2f]" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        }

        // Otherwise, render the Plywood Interactive Visualizer Section inside the card wrapper
        const thicknessOptions = [
          { value: '25mm', thickness: '25MM', tag: 'Extra Strong', desc: 'Heavy Duty', icon: 'weight', scale: 0.72, mt: '0px', layerHeight: 'h-6' },
          { value: '18mm', thickness: '18MM', tag: 'Most Preferred', desc: 'All Purpose Use', icon: 'star', scale: 0.80, mt: '-18px', layerHeight: 'h-[18px]' },
          { value: '12mm', thickness: '12MM', tag: 'Ideal for Furniture', desc: 'Ideal for Furniture', icon: 'chair', scale: 0.88, mt: '-24px', layerHeight: 'h-[12px]' },
          { value: '9mm', thickness: '9MM', tag: 'Best for Interiors', desc: 'Best for Interiors', icon: 'door', scale: 0.94, mt: '-28px', layerHeight: 'h-[9px]' },
          { value: '6mm', thickness: '6MM', tag: 'Lightweight', desc: 'Decor Use', icon: 'leaf', scale: 1.00, mt: '-30px', layerHeight: 'h-[6px]' }
        ];

        const rawThicknesses = [...(activeSpread.thicknesses || ['6mm', '9mm', '12mm', '18mm', '25mm'])].reverse();
        const stackThicknesses = [];
        for (let i = 0; i < 5; i++) {
          stackThicknesses.push(rawThicknesses[i] || 'N/A');
        }

        const selectedSpecSize = selectedSize || '8 x 4';
        const selectedSpecGrade = activeSpread.specs['Grade'] || activeSpread.specs['Wood Species'] || activeSpread.features[0] || 'BWP';
        const selectedSpecWarranty = activeSpread.specs['Manufacturer Warranty'] || 'Lifetime';
        const selectedSpecFeature = activeSpread.features[1] || 'Boiling Water Proof';

        const renderSelectorIcon = (iconName, isSelected) => {
          const strokeColor = isSelected ? '#ffffff' : '#006e2f';
          const className = `w-5 h-5 transition-colors duration-200`;
          switch (iconName) {
            case 'weight':
              return (
                <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              );
            case 'star':
              return (
                <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              );
            case 'chair':
              return (
                <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              );
            case 'door':
              return (
                <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M5 3v18h14V3H5zm4 9h2v2H9v-2z" />
                </svg>
              );
            case 'leaf':
              return (
                <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              );
            default:
              return null;
          }
        };

        return (
          <div className="max-w-[1280px] mx-auto px-4 mt-16 mb-16 animate-fade-in text-center">
            <div className="bg-white rounded-[32px] border border-slate-200/50 shadow-xl p-6 sm:p-10 md:p-12">

              {/* HEADER SECTION */}
              <header className="text-center mb-8 md:mb-10">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <span className="h-[1px] w-8 md:w-16 bg-emerald-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs md:text-sm font-extrabold tracking-wider text-emerald-600 uppercase">AVAILABLE SIZES & THICKNESS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="h-[1px] w-8 md:w-16 bg-emerald-500"></span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight mb-2">
                  Choose the Right Fit for Your Project
                </h1>
                <p className="text-sm md:text-base text-gray-500 font-medium">
                  Premium BWP Grade Plywood in multiple thickness options
                </p>
              </header>

              {/* SIZE SELECTOR TABS */}
              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#006e2f] mb-3 block">
                  Select Plywood Size (ft)
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {['8 x 4', '7 x 4', '6 x 4', '6 x 3'].map(size => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 text-xs font-black uppercase tracking-wider rounded-xl border transition-all duration-300 cursor-pointer ${isSelected
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 shadow-sm'
                          }`}
                      >
                        {size} {size === '8 x 4' && <span className="text-[9px] opacity-75 ml-1 font-extrabold">(Standard)</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {!selectedSize ? (
                /* Hidden/Placeholder state when no size is selected */
                <div className="w-full py-16 px-6 bg-slate-50/50 rounded-[24px] border border-dashed border-slate-200/80 flex flex-col items-center justify-center text-center animate-fade-in my-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wide">No Size Selected</h3>
                  <p className="text-xs font-semibold text-slate-500 max-w-sm mt-2 leading-relaxed">
                    Please select a plywood sheet size above to visualize the available thicknesses and 3D stack.
                  </p>
                </div>
              ) : (
                /* Grid content */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center my-4 animate-fade-in">

                  {/* LEFT SELECTOR PANEL */}
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 z-20">
                    {thicknessOptions.map((opt, i) => {
                      const displayVal = stackThicknesses[i];
                      if (displayVal === 'N/A') return null;

                      const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();

                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleThicknessSelect(displayVal)}
                          className={`flex items-center space-x-4 p-3 rounded-2xl border-2 transition-all duration-300 shadow-md cursor-pointer w-full text-left outline-none ${isSelected
                            ? 'border-emerald-500 bg-[#f0f9f4]/45 shadow-md'
                            : 'border-slate-100 bg-white hover:bg-slate-50/50 shadow-sm'
                            }`}
                        >
                          <div className={`icon-circle flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-500 text-white shadow-md' : 'bg-gray-100 text-emerald-600'
                            }`}>
                            {renderSelectorIcon(opt.icon, isSelected)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0c2340]">
                              {displayVal.toUpperCase()} <span className="text-xs font-semibold text-gray-400 ml-1">THICKNESS</span>
                            </div>
                            <div className="text-xs text-gray-500 leading-tight mt-0.5">
                              {opt.value === '18mm' ? (
                                <>
                                  <span className="font-semibold text-emerald-600">Most Preferred</span> · All Purpose Use
                                </>
                              ) : opt.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* CENTER 3D STACK INTERACTIVE VISUALIZATION */}
                  <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] py-4 select-none">
                    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center space-y-2 py-8 px-4" style={{ perspective: '1200px' }}>
                      {(() => {
                        const sizeFactors = {
                          '8 x 4': { length: 1.0, width: 1.0 },
                          '7 x 4': { length: 0.875, width: 1.0 },
                          '6 x 4': { length: 0.75, width: 1.0 },
                          '6 x 3': { length: 0.75, width: 0.75 }
                        };
                        const factors = sizeFactors[selectedSize] || { length: 1.0, width: 1.0 };

                        return thicknessOptions.map((opt, i) => {
                          const displayVal = stackThicknesses[i];
                          if (displayVal === 'N/A') return null;

                          const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();
                          const isThinnest = i === 4;
                          const mtVal = parseInt(opt.mt) || 0;
                          const computedMt = `${mtVal * factors.width}px`;

                          return (
                            <div
                              key={opt.value}
                              onClick={() => handleThicknessSelect(displayVal)}
                              className={`sheet-container ply-shadow rounded bg-stone-100 transition-all duration-300 relative ${isSelected ? 'sheet-active' : ''
                                }`}
                              style={{
                                width: `${opt.scale * factors.length * 100}%`,
                                transform: 'rotateX(24deg) rotateY(-8deg) rotateZ(1deg)',
                                marginTop: computedMt,
                                zIndex: 10 + i * 10
                              }}
                            >
                              {/* Plywood surface */}
                              <div
                                className={`wood-top-grain rounded-t relative ${isThinnest ? 'pr-16 flex items-center justify-end' : ''}`}
                                style={{
                                  height: `${(isThinnest ? 72 : 64) * factors.width}px`
                                }}
                              >
                                {/* Hotspot with Label */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                  {isSelected ? (
                                    <span className="relative flex h-4 w-4 shrink-0">
                                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
                                    </span>
                                  ) : (
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-emerald-500 shrink-0"></span>
                                  )}
                                  <span className={`text-[11px] font-black uppercase tracking-wider select-none ${isSelected ? 'text-emerald-800 font-extrabold' : 'text-[#533b25]/85'}`}>
                                    {displayVal}
                                  </span>
                                </div>

                                {/* Royal Club Plywood Stamp branding for bottom layer */}
                                {isThinnest && (
                                  <div className="text-right flex flex-col items-center justify-center opacity-75 font-serif select-none pointer-events-none transform -skew-x-12 scale-90">
                                    <svg className="w-8 h-8 text-[#533b25]" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M18.89 12.18c-.46 0-.85-.35-.9-.81l-.6-5.4c-.03-.27.1-.53.33-.67.23-.14.52-.13.75.02L20.5 6.7l1.5-3.3c.12-.26.38-.4.65-.36.27.04.49.23.55.5l.77 6.9c.05.46-.27.88-.73.93-.03 0-.07.01-.1.01h-4.25zM5.11 12.18c.46 0 .85-.35.9-.81l.6-5.4c.03-.27-.1-.53-.33-.67-.23-.14-.52-.13-.75.02L3.5 6.7l-1.5-3.3c-.12-.26-.38-.4-.65-.36-.27.04-.49.23-.55.5l-.77 6.9c-.05.46.27.88.73.93.03 0 .07.01.1.01h-4.25zm6.89 2.82c.48 0 .9-.32.99-.79l1.45-8.1c.05-.28-.08-.56-.33-.69-.25-.13-.56-.09-.77.1L12 7l-1.34-1.48c-.21-.19-.52-.23-.77-.1-.25.13-.38.41-.33.69l1.45 8.1c.09.47.51.79.99.79z"></path>
                                      <rect x="2" y="16" width="20" height="2" rx="1" fill="#533b25"></rect>
                                    </svg>
                                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#533b25] mt-0.5">{activeSpread.brandName}</span>
                                    <span className="text-[8px] uppercase tracking-[0.25em] font-medium text-[#533b25]">Plywood</span>
                                  </div>
                                )}
                              </div>
                              {/* Layer Depth edges */}
                              <div className={`plywood-layers rounded-b ${opt.layerHeight}`}></div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>

                  {/* RIGHT DETAIL CARD */}
                  <div className="col-span-1 lg:col-span-3 flex justify-center z-20">
                    <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                      <div className="bg-emerald-700 text-white text-center py-3.5 px-4 text-xs font-bold tracking-widest uppercase">
                        Selected Option
                      </div>
                      <div className="p-6 md:p-8 space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-black text-[#0c2340] tracking-tight">{activeThickness.toUpperCase()}</span>
                          <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Thickness</p>
                        </div>
                        <div className="h-[1px] bg-slate-100 w-full"></div>

                        <div className="space-y-4">
                          {/* Size */}
                          <div className="flex items-center space-x-4 text-left">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Ruler className="w-5 h-5 text-[#006e2f]" />
                            </div>
                            <div className="flex-grow text-left">
                              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Size (ft)</div>
                              <div className="text-sm font-bold text-slate-800">{selectedSpecSize}</div>
                            </div>
                          </div>
                          {/* Grade */}
                          <div className="flex items-center space-x-4 text-left">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Layers className="w-5 h-5 text-[#006e2f]" />
                            </div>
                            <div className="flex-grow text-left">
                              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Grade</div>
                              <div className="text-sm font-bold text-slate-800">{selectedSpecGrade}</div>
                            </div>
                          </div>
                          {/* Warranty */}
                          <div className="flex items-center space-x-4 text-left">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Shield className="w-5 h-5 text-[#006e2f]" />
                            </div>
                            <div className="flex-grow text-left">
                              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Warranty</div>
                              <div className="text-sm font-bold text-slate-800">{selectedSpecWarranty}</div>
                            </div>
                          </div>
                          {/* Feature */}
                          <div className="flex items-center space-x-4 text-left">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Droplets className="w-5 h-5 text-[#006e2f]" />
                            </div>
                            <div className="flex-grow text-left">
                              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Feature</div>
                              <div className="text-sm font-bold text-slate-800 truncate max-w-[150px]">{selectedSpecFeature}</div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleGetQuote}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                        >
                          <span>GET QUOTE</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* BOTTOM ACCREDITATIONS BAR */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(activeSpread.overviewFeatures || []).slice(0, 4).map((feature, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100/80 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                        {renderOverviewTagIcon(feature.icon)}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-[#0c2340]">{feature.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER CERTIFICATION METRIC BADGES */}
              <footer className="mt-8 pt-6 border-t border-gray-100/80 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Other sizes available on request</span>
                </div>
                <span className="hidden md:inline text-gray-300">|</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>All thickness in mm</span>
                </div>
                <span className="hidden md:inline text-gray-300">|</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>All sizes in feet</span>
                </div>
              </footer>

            </div>
          </div>
        );
      })()}

      {/* Applications Section */}
      <div className="max-w-[1380px] mx-auto px-2 mb-16 animate-fade-in text-center">
        <span className="text-[11px] font-black tracking-[0.25em] text-[#006e2f] uppercase block mb-2">
          Applications
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight font-sans">
          Where {getOverviewTitle(activeSpread)} Fits Best
        </h3>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {getBrandApplications(activeSpread).map((app, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white border-t border-slate-100">
                <span className="text-xs font-black tracking-wider text-[#006e2f] uppercase">
                  {app.title}
                </span>
                <p className="text-[13px] font-semibold text-slate-500 mt-2 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications Section */}
      <div className="max-w-[1380px] mx-auto px-2 mb-16 animate-fade-in text-center">
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#006e2f]" />
            <div className="w-16 h-0.5 bg-[#006e2f]/40" />
          </div>
          <span className="px-6 py-2.5 bg-[#006e2f] text-white text-[11px] font-black uppercase tracking-widest rounded-md shadow-sm">
            Technical Specifications
          </span>
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-16 h-0.5 bg-[#006e2f]/40" />
            <span className="w-2 h-2 rounded-full bg-[#006e2f]" />
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight font-sans">
          Built for Strength. Made to Last.
        </h3>
        <div className="h-1 w-16 bg-[#006e2f] mx-auto mt-4 mb-12 rounded-full" />

        {/* Specifications Grid panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left card: Specifications list table */}
          <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-1">
              {getTechnicalSpecs(activeSpread).specs.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-4 w-[45%]">
                    <div className="w-10 h-10 rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0">
                      {renderSpecIcon(item.icon)}
                    </div>
                    <span className="text-[15px] font-extrabold text-slate-900 leading-tight">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-slate-300 font-light text-sm">|</span>
                  <div className="w-[50%] text-left pl-4">
                    <span className="text-[15px] font-bold text-slate-600 leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card: Highlights list or 3-and-2 cards */}
          {(() => {
            const isPlywoodOrBoard = activeSpread.category === 'Plywood';

            if (isPlywoodOrBoard) {
              const highlights = getTechnicalSpecs(activeSpread).highlights;
              const cardStyles = [
                { bg: 'bg-[#f4f7f5]' }, // Water Proof: Soft greenish-grey
                { bg: 'bg-[#edf3ed]' }, // Termite Proof: Soft sage-green
                { bg: 'bg-[#f5efe4]' }, // Borer Resistant: Soft warm beige
                { bg: 'bg-[#ebf2f2]' }, // High Strength: Soft blueish-grey
                { bg: 'bg-[#f5eae0]' }  // Smooth Finish: Soft warm wood
              ];

              return (
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-3.5 w-full self-start content-start">
                  {highlights.map((item, index) => {
                    const style = cardStyles[index] || { bg: 'bg-slate-50' };

                    let gridClass = "col-span-1 sm:col-span-2";
                    if (index === 3) {
                      gridClass = "col-span-1 sm:col-start-2 sm:col-span-2";
                    } else if (index === 4) {
                      gridClass = "col-span-1 sm:col-start-4 sm:col-span-2";
                    }

                    return (
                      <div
                        key={index}
                        className={`${style.bg} ${gridClass} rounded-[20px] border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between pt-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative h-fit sm:h-[268px]`}
                      >
                        <div className="flex flex-col items-center justify-center flex-grow">
                          {/* Icon Container */}
                          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-[0_6px_15px_-3px_rgba(0,0,0,0.06)] mx-auto relative mb-3">
                            <div className="scale-90 flex items-center justify-center">
                              {renderHighlightIcon(item.icon)}
                            </div>
                          </div>

                          {/* Title */}
                          <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 leading-tight tracking-tight text-center px-2">
                            {item.title}
                          </h4>

                          {/* Green Underline Line */}
                          <div className="w-7 h-[2px] bg-[#006e2f] rounded-full mx-auto my-2.5" />

                          {/* Description */}
                          <p className="text-[12px] sm:text-[13px] font-bold text-slate-500 leading-normal text-center px-4 max-w-[170px] mx-auto">
                            {item.desc}
                          </p>
                        </div>

                        {/* Plywood bottom layered wood strip */}
                        <div
                          className="w-full h-4 border-t border-amber-900/10 mt-4"
                          style={{
                            background: 'repeating-linear-gradient(to bottom, #bd9265 0px, #bd9265 2.5px, #865732 2.5px, #865732 5px, #caa175 5px, #caa175 7.5px, #623a1a 7.5px, #623a1a 10px, #bd9265 10px, #bd9265 12.5px)'
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }

            // For other categories, render the normal Highlights list
            return (
              <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="flex flex-col justify-between h-full py-1">
                  {getTechnicalSpecs(activeSpread).highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 py-3.5 last:py-0 last:border-b-0 border-b border-slate-100 border-dashed">
                      <div className="w-14 h-14 rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0">
                        {renderHighlightIcon(item.icon)}
                      </div>
                      <div className="flex flex-col text-left border-l-[3px] border-[#006e2f] pl-5">
                        <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 leading-tight tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-500 mt-1.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>


      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-8 z-[100] flex flex-col gap-3">
        {/* Mobile Sidebar Index Toggle */}
        <button
          onClick={() => setShowSidebar(true)}
          className="xl:hidden w-14 h-14 bg-[#006e2f] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
          title="Browse Catalogue Index"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <a
          href="https://wa.me/919247449522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25d366] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
          title="WhatsApp Support"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
          </svg>
        </a>
        <a
          href="tel:+919247449522"
          className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
          title="Call Direct"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
        <button
          onClick={handleGetQuote}
          className="w-14 h-14 bg-white text-slate-800 border border-slate-200 rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
          title="Inquiry Form"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Slide-over Drawer */}
      {showSidebar && (
        <div className="fixed inset-0 z-[130] lg:hidden">
          {/* Backdrop shadow */}
          <div
            onClick={() => setShowSidebar(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />
          {/* Slide-over panel */}
          <div className="absolute top-0 bottom-0 left-0 w-80 bg-[#FAF8F5] shadow-2xl p-6 flex flex-col animate-fade-in text-left border-r border-slate-200/50">
            <div className="flex justify-between items-center mb-5 border-b border-slate-200/60 pb-3 flex-shrink-0">
              <div className="flex flex-col text-left">
                <span className="text-sm font-black uppercase tracking-widest text-[#C9A44C]">Catalogue Index</span>
                <span className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Select Brand to View Page</span>
              </div>
              <button
                onClick={() => setShowSidebar(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderSidebarContent()}
          </div>
        </div>
      )}

    </div>
  );
};