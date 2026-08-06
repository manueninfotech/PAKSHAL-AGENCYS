import React from 'react';

// Import images from assets/kitchenaccesories
import bifoldLiftUpImg from '../assets/kitchenaccesories/bifoldliftupsystem.png';
import cornerImg from '../assets/kitchenaccesories/corner.jpg';
import cutleryTrayImg from '../assets/kitchenaccesories/cutlerytray.png';
import cutleryTray2Img from '../assets/kitchenaccesories/cutlerytray2.png';
import glassBoxImg from '../assets/kitchenaccesories/glassbox.jpg';
import glassTandemBoxImg from '../assets/kitchenaccesories/glasstandembox.jpg';
import magicCornerImg from '../assets/kitchenaccesories/magiccorner.jpg';
import pullDownDishRackImg from '../assets/kitchenaccesories/pulldowndishrackelevator.jpg';
import pullDownElevatorImg from '../assets/kitchenaccesories/pulldownelevator.png';
import rollingShuttersImg from '../assets/kitchenaccesories/rollingshutters.png';
import sidePullout2Img from '../assets/kitchenaccesories/sidepulloutbox2.jpg';
import sidePulloutImg from '../assets/kitchenaccesories/sidepulloutboxes.jpg';
import slimBoxesImg from '../assets/kitchenaccesories/slimboxes.jpg';
import swingStorageImg from '../assets/kitchenaccesories/swingstoragebox.jpg';
import tandemBoxImg from '../assets/kitchenaccesories/tandembox.jpg';
import universalGlassBoxImg from '../assets/kitchenaccesories/universalglassbox.jpg';
import ventilatorImg from '../assets/kitchenaccesories/ventilator.png';
import wastebinImg from '../assets/kitchenaccesories/wastebin.png';

// Spreads dataset for ProductsPage catalogue booklet and sidebar index
export const kitchenAccessoriesSpreads = [
  {
    id: 101,
    brandId: 'pull-down-elevator',
    category: 'Kitchen Accessories',
    pageNumLeft: 71,
    pageNumRight: 72,
    badge: 'Upper Cabinet Storage',
    title: 'Pull-Down\nElevator.',
    tagline: 'Hydraulic elevator basket for overhead kitchen cabinets',
    image: pullDownElevatorImg,
    brandName: 'Pull-Down Elevator System',
    desc: 'Heavy-duty hydraulic pull-down elevator basket system allowing effortless access to high overhead cabinet storage. Features smooth dampening and multi-stage weight adjustment.',
    material: 'Dark Gray',
    thicknesses: ['560x280x560mm', '760x280x560mm', '860x280x560mm'],
    defaultThickness: '760x280x560mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Hydraulic Assist Mechanism', 'Dual Lift Capacity', 'SS 304 Rust-Proof Mesh'],
    applications: ['Overhead Cabinets', 'Pantry Storage', 'High Reach Storage'],
    specs: {},
    heroSub: 'SMART ERGONOMICS. EFFORTLESS ACCESS.',
    heroTitle: 'PULL-DOWN ELEVATOR',
    heroDesc: 'Heavy-duty hydraulic pull-down elevator basket system allowing effortless access to high overhead cabinet storage with dual lift capacity.',
    heroTags: [
      { text: 'Hydraulic Assist', icon: 'gear' },
      { text: '15kg Load Capacity', icon: 'shield' },
      { text: 'SS 304 Mesh', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Hydraulic Lift', desc: 'Smooth spring-assisted lowering & raising', icon: 'gear' },
      { title: 'Ergonomic Access', desc: 'Brings high overhead storage down to eye level', icon: 'calibrate' },
      { title: 'SS 304 Wire Mesh', desc: 'Food-grade stainless steel wire construction', icon: 'shield' },
      { title: '15kg Load Rating', desc: 'Engineered for heavy spice jars & dishes', icon: 'shield' },
      { title: 'Multi-Size Fit', desc: 'Compatible with 560mm, 760mm & 860mm units', icon: 'sparkles' }
    ]
  },
  {
    id: 102,
    brandId: 'pull-down-dishrack',
    category: 'Kitchen Accessories',
    pageNumLeft: 73,
    pageNumRight: 74,
    hideFromIndex: true,
    parentBrandId: 'pull-down-elevator',
    badge: 'Dish Storage Elevator',
    title: 'Dish Rack\nElevator.',
    tagline: 'Pull-down dish drying rack with stainless drip tray',
    image: pullDownDishRackImg,
    brandName: 'Pull-Down Dish Rack Elevator',
    desc: 'Specialized pull-down dish drying elevator with integrated water tray and plate slots. Sits neatly inside wall cabinets for space-saving dish drainage.',
    material: 'Dark Gray',
    thicknesses: ['560x280x560mm', '760x280x560mm', '860x280x560mm'],
    defaultThickness: '760x280x560mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Integrated Drip Tray', 'Plate & Bowl Dividers', 'Soft-Return Dampener'],
    applications: ['Overhead Dish Storage', 'Wet Dish Drying', 'Wall Cabinets'],
    specs: {},
    heroSub: 'OVERHEAD DISH DRYING. CLEAN HYGIENE.',
    heroTitle: 'DISH RACK ELEVATOR',
    heroDesc: 'Specialized pull-down dish drying elevator with integrated water tray and plate slots for hygienic dish storage inside wall cabinets.',
    heroTags: [
      { text: 'Drip Tray Included', icon: 'droplet' },
      { text: 'Plate Slots', icon: 'calibrate' },
      { text: 'Soft Return', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Removable Drip Tray', desc: 'Catches excess water droplets seamlessly', icon: 'droplet' },
      { title: 'SS 304 Dish Slots', desc: 'Holds plates, bowls, and glasses securely', icon: 'shield' },
      { title: 'Hydraulic Soft Return', desc: 'Pushes back up smoothly without noise', icon: 'gear' }
    ]
  },
  {
    id: 103,
    brandId: 'magic-corner',
    category: 'Kitchen Accessories',
    pageNumLeft: 75,
    pageNumRight: 76,
    badge: 'Corner Optimization',
    title: 'Magic Corner\nUnit.',
    tagline: 'Soft-close pull-out blind corner basket organizer',
    image: magicCornerImg,
    brandName: 'Magic Corner Storage',
    desc: 'Innovative magic corner pull-out basket mechanism that transforms awkward blind corner cabinets into fully accessible, dual-tier storage space.',
    material: 'Aluminum + Glass',
    thicknesses: ['900x460x600mm', '900x500x525mm'],
    defaultThickness: '900x460x600mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Synchronized Pull-out', 'Soft-Close Motion', '4 Heavy-Duty Baskets'],
    applications: ['Blind Corner Cabinets', 'L-Shape Modular Kitchens', 'Corner Pantries'],
    specs: {},
    heroSub: 'MAXIMUM CORNER UTILIZATION.',
    heroTitle: 'MAGIC CORNER UNIT',
    heroDesc: 'Innovative magic corner pull-out basket mechanism that transforms awkward blind corner cabinets into fully accessible, dual-tier storage space.',
    heroTags: [
      { text: 'Aluminum + Glass', icon: 'wood' },
      { text: '35kg Total Load', icon: 'shield' },
      { text: 'Soft-Close Motion', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Synchronized Glide', desc: 'Brings internal rear baskets forward effortlessly', icon: 'gear' },
      { title: 'Aluminum + Glass', desc: 'Tempered glass side walls with aluminum frame', icon: 'sparkles' },
      { title: '35kg Dynamic Load', desc: 'Holds large pressure cookers & utensils', icon: 'shield' }
    ]
  },
  {
    id: 104,
    brandId: 'corner-carousel-unit',
    category: 'Kitchen Accessories',
    pageNumLeft: 77,
    pageNumRight: 78,
    hideFromIndex: true,
    parentBrandId: 'magic-corner',
    badge: 'Rotary Corner Storage',
    title: 'Rotary Corner\nCarousel.',
    tagline: '360° revolving kidney tray corner storage',
    image: cornerImg,
    brandName: 'Rotary Corner Carousel',
    desc: 'Smooth 360° revolving kidney-shaped corner shelf system designed to utilize deep corner cabinet dead zones with effortless rotational access.',
    material: 'Aluminum + Glass',
    thicknesses: ['900x460x600mm', '900x500x525mm'],
    defaultThickness: '900x460x600mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['360° Rotation', 'Height Adjustable Pole', 'Chrome Steel Trim'],
    applications: ['Base Corner Cabinets', 'Pantry Corners', 'Cookware Storage'],
    specs: {},
    heroSub: '360 DEGREE REVOLVING TRAY.',
    heroTitle: 'CORNER CAROUSEL',
    heroDesc: 'Smooth 360° revolving kidney-shaped corner shelf system designed to utilize deep corner cabinet dead zones with effortless rotational access.',
    heroTags: [
      { text: '360° Rotation', icon: 'flex' },
      { text: 'Height Adjustable', icon: 'calibrate' },
      { text: '25kg per Shelf', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '360 Rotational Glide', desc: 'Rotates smoothly to reach every stored item', icon: 'flex' },
      { title: 'Adjustable Center Pole', desc: 'Fits different cabinet interior heights', icon: 'calibrate' }
    ]
  },
  {
    id: 105,
    brandId: 'cutlery-tray-organizer',
    category: 'Kitchen Accessories',
    pageNumLeft: 79,
    pageNumRight: 80,
    badge: 'Drawer Organization',
    title: 'Cutlery Tray\nOrganizers.',
    tagline: 'Modular plastic & metallic drawer insert trays',
    image: cutleryTrayImg,
    brandName: 'Cutlery Tray Organizer',
    desc: 'Precision molded food-grade plastic cutlery inserts with adjustable divider slots for spoons, forks, knives, and cooking utensils.',
    thicknesses: ['450 mm Drawer', '600 mm Drawer', '900 mm Drawer'],
    defaultThickness: '600 mm Drawer',
    thicknessLabel: 'Compatible Drawer Width',
    features: ['Food-Grade Material', 'Trimmable Edges', 'Stain & Dishwasher Safe'],
    applications: ['Kitchen Drawers', 'Cutlery Storage', 'Utensil Organization'],
    specs: {},
    heroSub: 'ORGANIZED CUTLERY. CLEAN & HYGIENIC.',
    heroTitle: 'CUTLERY TRAY ORGANIZER',
    heroDesc: 'Precision molded food-grade plastic cutlery inserts with adjustable divider slots for spoons, forks, knives, and cooking utensils.',
    heroTags: [
      { text: 'Food-Grade ABS', icon: 'shield' },
      { text: 'Trimmable Edges', icon: 'calibrate' },
      { text: 'Multiple Compartments', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Food Grade Hygiene', desc: 'BPA-free non-toxic molded material', icon: 'shield' },
      { title: 'Custom Trimmable Fit', desc: 'Can be trimmed along edges for exact fit', icon: 'calibrate' },
      { title: 'Easy Dishwashing', desc: 'Removes in seconds for effortless washing', icon: 'sparkles' }
    ]
  },
  {
    id: 106,
    brandId: 'cutlery-tray-2',
    category: 'Kitchen Accessories',
    pageNumLeft: 81,
    pageNumRight: 82,
    hideFromIndex: true,
    parentBrandId: 'cutlery-tray-organizer',
    badge: 'Premium Cutlery Series',
    title: 'Cutlery Tray\nSeries II.',
    tagline: 'Deep compartment utensil organizer tray',
    image: cutleryTray2Img,
    brandName: 'Cutlery Tray Series II',
    desc: 'Deep multi-compartment executive cutlery tray with specialized knife block, spice bottle slots, and extended utensil dividers.',
    thicknesses: ['600 mm', '800 mm', '900 mm'],
    defaultThickness: '600 mm',
    thicknessLabel: 'Drawer Size Width',
    features: ['Deep Utensil Bays', 'Scratch-Proof Matte Coat', 'Spice Bottle Bay'],
    applications: ['Chef Drawers', 'Executive Kitchens', 'Utensil Organization'],
    specs: {},
    heroSub: 'EXECUTIVE UTENSIL MANAGEMENT.',
    heroTitle: 'CUTLERY TRAY II',
    heroDesc: 'Deep multi-compartment executive cutlery tray with specialized knife block, spice bottle slots, and extended utensil dividers.',
    heroTags: [
      { text: 'Deep Bays', icon: 'calibrate' },
      { text: 'Anthracite Grey', icon: 'sparkles' },
      { text: 'Scratch-Proof', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Deep Utensil Bays', desc: 'Accommodates long spatulas and rolling pins', icon: 'calibrate' },
      { title: 'Anthracite Finish', desc: 'Sleek luxury finish for modern tandem boxes', icon: 'sparkles' }
    ]
  },
  {
    id: 107,
    brandId: 'bifold-liftup-system',
    category: 'Kitchen Accessories',
    pageNumLeft: 83,
    pageNumRight: 84,
    badge: 'Wall Cabinet Hardware',
    title: 'Bi-Fold Lift-Up\nSystem.',
    tagline: 'Parallel bi-fold door stay mechanism for upper cabinets',
    image: bifoldLiftUpImg,
    brandName: 'Bi-Fold Lift-Up System',
    desc: 'German-engineered bi-fold hydraulic lift system that folds wall cabinet doors upwards and out of the way for unrestricted overhead access.',
    thicknesses: ['Light Duty (Power 1)', 'Medium Duty (Power 2)', 'Heavy Duty (Power 3)'],
    defaultThickness: 'Medium Duty (Power 2)',
    thicknessLabel: 'Spring Power Factor',
    features: ['Smooth Variable Stop', 'Soft-Close Cushioning', 'Adjustable Power Mechanism'],
    applications: ['Overhead Kitchen Cabinets', 'Microwave Housing', 'Wall Furniture'],
    specs: {},
    heroSub: 'PARALLEL BI-FOLD ELEVATION.',
    heroTitle: 'BI-FOLD LIFT-UP SYSTEM',
    heroDesc: 'German-engineered bi-fold hydraulic lift system that folds wall cabinet doors upwards and out of the way for unrestricted overhead access.',
    heroTags: [
      { text: 'Variable Stop', icon: 'gear' },
      { text: 'Soft-Close', icon: 'gear' },
      { text: '1800mm Max Width', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Bi-Fold Elevation', desc: 'Folds two door panels upward smoothly', icon: 'gear' },
      { title: 'Multi-Position Stop', desc: 'Stops securely at any desired opening height', icon: 'calibrate' },
      { title: 'Integrated Soft-Close', desc: 'Prevents slamming when closing upper shutters', icon: 'gear' }
    ]
  },
  {
    id: 108,
    brandId: 'kitchen-rolling-shutters',
    category: 'Kitchen Accessories',
    pageNumLeft: 85,
    pageNumRight: 86,
    badge: 'Appliance Garage',
    title: 'Kitchen Rolling\nShutters.',
    tagline: 'Glass & aluminum tambour door system for kitchen counter units',
    image: rollingShuttersImg,
    brandName: 'Kitchen Rolling Shutters',
    desc: 'Sleek vertical rolling tambour shutter systems crafted from toughened glass or brushed aluminum slats. Perfect for hiding kitchen counter appliances.',
    colors: 'Silver, White, Black',
    thicknesses: ['450x1320mm', '600x1320mm'],
    defaultThickness: '600x1320mm',
    thicknessLabel: 'Available Unit Sizes (W x H)',
    features: ['Counter-balanced Spring', 'Smooth Vertical Roll', 'Space-Saving Tambour'],
    applications: ['Appliance Cabinets', 'Coffee Stations', 'Breakfast Counter Garages'],
    specs: {},
    heroSub: 'SLEEK APPLIANCE GARAGE STORAGE.',
    heroTitle: 'ROLLING SHUTTERS',
    heroDesc: 'Sleek vertical rolling tambour shutter systems crafted from toughened glass or brushed aluminum slats for kitchen counter units.',
    heroTags: [
      { text: 'Silver / White / Black', icon: 'sparkles' },
      { text: '450x1320 / 600x1320mm', icon: 'calibrate' },
      { text: 'Saves Counter Space', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Vertical Tambour Roll', desc: 'Glides vertically without swinging outwards', icon: 'flex' },
      { title: 'Appliance Concealment', desc: 'Keeps mixies, toasters & ovens hidden away', icon: 'shield' },
      { title: 'Smooth Spring Assist', desc: 'Stays balanced at any height smoothly', icon: 'gear' }
    ]
  },
  {
    id: 109,
    brandId: 'glass-tandem-box-system',
    category: 'Kitchen Accessories',
    pageNumLeft: 87,
    pageNumRight: 88,
    badge: 'Glass Side Drawers',
    title: 'Glass Tandem\nBox System.',
    tagline: 'Ultra-sleek double-wall metal drawer with tempered glass side panels',
    image: glassTandemBoxImg,
    brandName: 'Glass Tandem Box System',
    desc: 'Luxury double-wall metal drawer system featuring crystal clear tempered glass side galleries, full extension concealed runners, and silent soft-close action.',
    thicknesses: ['90 mm Height', '150 mm Height', '200 mm Height'],
    defaultThickness: '150 mm Height',
    thicknessLabel: 'Side Wall Height Profile',
    features: ['Tempered Glass Inserts', '50kg Dynamic Load Rating', 'Concealed Soft-Close Runners'],
    applications: ['Luxury Kitchen Drawers', 'Pantry Pull-outs', 'Executive Cabinetry'],
    specs: {},
    heroSub: 'CRYSTAL CLEAR GLASS SIDE GALLERIES.',
    heroTitle: 'GLASS TANDEM BOX',
    heroDesc: 'Luxury double-wall metal drawer system featuring crystal clear tempered glass side galleries and full extension concealed runners.',
    heroTags: [
      { text: 'Tempered Glass Sides', icon: 'sparkles' },
      { text: '50kg Dynamic Load', icon: 'shield' },
      { text: 'Concealed Soft-Close', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Tempered Glass Gallery', desc: 'Elegant transparent side profile wall', icon: 'sparkles' },
      { title: '50kg Dynamic Load', desc: 'Heavy load capacity with zero drawer sag', icon: 'shield' },
      { title: 'Synchronized Glide', desc: 'Ultra quiet ball bearing runner tracks', icon: 'gear' }
    ]
  },
  {
    id: 110,
    brandId: 'glass-box-drawers',
    category: 'Kitchen Accessories',
    pageNumLeft: 89,
    pageNumRight: 90,
    hideFromIndex: true,
    parentBrandId: 'glass-tandem-box-system',
    badge: 'Modern Glass Drawers',
    title: 'Glass Box\nDrawers.',
    tagline: 'Frameless glass panel drawer side profiles',
    image: glassBoxImg,
    brandName: 'Glass Box Drawers',
    desc: 'Minimalist frameless glass drawer sides with integrated LED strip ready grooves and soft-closing slide runners.',
    thicknesses: ['Standard 500mm Length'],
    defaultThickness: 'Standard 500mm Length',
    features: ['Frameless Glass Design', 'Synchronized Rails', '3D Adjustment'],
    applications: ['Wardrobes', 'Kitchen Drawers', 'Display Units'],
    specs: {},
    heroSub: 'FRAMELESS SMOKED & CLEAR GLASS.',
    heroTitle: 'GLASS BOX DRAWERS',
    heroDesc: 'Minimalist frameless glass drawer sides with integrated LED strip ready grooves and soft-closing slide runners.',
    heroTags: [
      { text: 'Frameless Glass', icon: 'sparkles' },
      { text: 'Smoked / Clear', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Smoked / Clear Options', desc: 'Sophisticated aesthetics for luxury interiors', icon: 'sparkles' }
    ]
  },
  {
    id: 111,
    brandId: 'universal-glass-box',
    category: 'Kitchen Accessories',
    pageNumLeft: 91,
    pageNumRight: 92,
    hideFromIndex: true,
    parentBrandId: 'glass-tandem-box-system',
    badge: 'Universal Drawer Series',
    title: 'Universal Glass\nBox System.',
    tagline: 'Modular glass side box drawer system',
    image: universalGlassBoxImg,
    brandName: 'Universal Glass Box System',
    desc: 'Versatile glass box drawer mechanism designed to fit both wooden and metal drawer back panels seamlessly.',
    thicknesses: ['Slim 12mm', 'Standard 16mm'],
    defaultThickness: 'Standard 16mm',
    features: ['Universal Back Adapter', 'Tool-less Assembly', 'Smooth Glide'],
    applications: ['Kitchens', 'Closets', 'Office Storage'],
    specs: {},
    heroSub: 'UNIVERSAL MODULAR DRAWER FIT.',
    heroTitle: 'UNIVERSAL GLASS BOX',
    heroDesc: 'Versatile glass box drawer mechanism designed to fit both wooden and metal drawer back panels seamlessly.',
    heroTags: [
      { text: 'Universal Fit', icon: 'calibrate' },
      { text: 'Tool-less Click', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Tool-less Fitting', desc: 'Quick snap-on assembly for rapid installation', icon: 'gear' }
    ]
  },
  {
    id: 112,
    brandId: 'slim-box-drawer-system',
    category: 'Kitchen Accessories',
    pageNumLeft: 93,
    pageNumRight: 94,
    badge: 'Ultra-Slim Side Profile',
    title: 'Slim Box\nDrawer System.',
    tagline: '13mm ultra-thin double-wall steel drawer box',
    image: slimBoxesImg,
    brandName: 'Slim Box Drawer System',
    desc: 'State-of-the-art 13mm straight-line ultra-slim metal side drawer box system. Maximizes internal drawer storage capacity with high aesthetic appeal.',
    thicknesses: ['13 mm Wall Thickness'],
    defaultThickness: '13 mm Wall Thickness',
    thicknessLabel: 'Side Wall Thickness',
    features: ['13mm Ultra-Slim Profile', 'Straight 90° Internal Walls', 'Soft-Close Synchronization'],
    applications: ['Modern Modular Kitchens', 'Minimalist Closets', 'Office Furniture'],
    specs: {},
    heroSub: '13MM ULTRA-SLIM STRAIGHT WALLS.',
    heroTitle: 'SLIM BOX SYSTEM',
    heroDesc: 'State-of-the-art 13mm straight-line ultra-slim metal side drawer box system that maximizes internal drawer storage capacity.',
    heroTags: [
      { text: '13mm Ultra-Slim', icon: 'calibrate' },
      { text: '90° Straight Inside', icon: 'calibrate' },
      { text: '65kg Dynamic Load', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '13mm Ultra-Thin Wall', desc: 'Provides up to 15% more usable drawer volume', icon: 'calibrate' },
      { title: 'Straight 90 Interior', desc: 'No rounded corners inside for maximum storage', icon: 'calibrate' },
      { title: '65kg Heavy Duty Load', desc: 'Holds heavy ceramic crockery with absolute ease', icon: 'shield' }
    ]
  },
  {
    id: 113,
    brandId: 'kitchen-tandem-box-unit',
    category: 'Kitchen Accessories',
    pageNumLeft: 95,
    pageNumRight: 96,
    hideFromIndex: true,
    parentBrandId: 'slim-box-drawer-system',
    badge: 'Double-Wall Metal Drawer',
    title: 'Kitchen Tandem\nBox.',
    tagline: 'Heavy-duty double-wall steel drawer box',
    image: tandemBoxImg,
    brandName: 'Kitchen Tandem Box',
    desc: 'Classic double-wall metallic tandem drawer box system with round railing options and high load-bearing concealed runners.',
    thicknesses: ['Low Drawer (84mm)', 'Medium Drawer (135mm)', 'High Drawer (199mm)'],
    defaultThickness: 'Medium Drawer (135mm)',
    features: ['Double-Wall Steel', 'Gallery Railings', 'Soft-Close Action'],
    applications: ['Kitchen Pots & Pans', 'Grocery Pull-outs', 'Tandem Drawers'],
    specs: {},
    heroSub: 'CLASSIC METALLIC TANDEM DRAWER.',
    heroTitle: 'KITCHEN TANDEM BOX',
    heroDesc: 'Classic double-wall metallic tandem drawer box system with round railing options and high load-bearing concealed runners.',
    heroTags: [
      { text: 'Double-Wall Steel', icon: 'shield' },
      { text: 'Gallery Rails', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Double Wall Steel', desc: 'Durable electro-galvanized metallic side walls', icon: 'shield' }
    ]
  },
  {
    id: 114,
    brandId: 'side-pullout-baskets',
    category: 'Kitchen Accessories',
    pageNumLeft: 97,
    pageNumRight: 98,
    badge: 'Spice & Bottle Pull-out',
    title: 'Side Pull-Out\nBaskets.',
    tagline: 'Multi-tier narrow cabinet spice & oil bottle organizer',
    image: sidePulloutImg,
    brandName: 'Side Pull-Out Baskets',
    desc: 'Slim 150mm and 200mm side pull-out basket organizer for storing oil bottles, spice containers, and cooking sauces right next to the stove.',
    thicknesses: ['150 mm Cabinet', '200 mm Cabinet', '300 mm Cabinet'],
    defaultThickness: '150 mm Cabinet',
    thicknessLabel: 'Base Cabinet Width',
    features: ['SS 304 Wire Structure', 'Bottom/Side Mounted Runners', 'Integrated Bottle Divider Grid'],
    applications: ['Stovetop Side Cabinets', 'Spice Storage', 'Sauce & Oil Bottles'],
    specs: {},
    heroSub: 'STOVETOP SPICE & BOTTLE ORGANIZER.',
    heroTitle: 'SIDE PULL-OUT BASKETS',
    heroDesc: 'Slim 150mm and 200mm side pull-out basket organizer for storing oil bottles, spice containers, and cooking sauces right next to the stove.',
    heroTags: [
      { text: '150/200mm Width', icon: 'calibrate' },
      { text: 'Bottle Dividers', icon: 'sparkles' },
      { text: 'SS 304 Chrome', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Bottle Divider Grid', desc: 'Prevents tall oil bottles from tipping over', icon: 'sparkles' },
      { title: 'Slim Cabinet Fit', desc: 'Fits 150mm narrow dead spaces beside hob', icon: 'calibrate' },
      { title: 'Soft-Close Runners', desc: 'Glides quietly back into cabinet body', icon: 'gear' }
    ]
  },
  {
    id: 115,
    brandId: 'side-pullout-series-2',
    category: 'Kitchen Accessories',
    pageNumLeft: 99,
    pageNumRight: 100,
    hideFromIndex: true,
    parentBrandId: 'side-pullout-baskets',
    badge: 'Sheet Base Pull-out',
    title: 'Side Pull-Out\nSeries II.',
    tagline: 'Solid wooden base side pull-out organizer',
    image: sidePullout2Img,
    brandName: 'Side Pull-Out Series II',
    desc: 'Premium solid wooden/sheet base side pull-out unit with flat chrome railing guards for easy wipe-clean maintenance.',
    thicknesses: ['150 mm', '200 mm', '300 mm'],
    defaultThickness: '200 mm',
    features: ['Solid Flat Base', 'Flat Railing Profile', 'Soft-Close Under-mount Track'],
    applications: ['Base Units', 'Pantry Bottling', 'Kitchen Counter Storage'],
    specs: {},
    heroSub: 'SOLID BASE WIPE-CLEAN PULL-OUT.',
    heroTitle: 'SIDE PULL-OUT II',
    heroDesc: 'Premium solid wooden/sheet base side pull-out unit with flat chrome railing guards for easy wipe-clean maintenance.',
    heroTags: [
      { text: 'Solid Sheet Base', icon: 'wood' },
      { text: 'Wipe-Clean', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Solid Sheet Base', desc: 'Spills wipe clean easily without dripping down', icon: 'wood' }
    ]
  },
  {
    id: 116,
    brandId: 'swing-storage-unit',
    category: 'Kitchen Accessories',
    pageNumLeft: 101,
    pageNumRight: 102,
    badge: 'Tall Pantry Storage',
    title: 'Swing Storage\nUnit.',
    tagline: 'Tandem tall pantry swing-out basket mechanism',
    image: swingStorageImg,
    brandName: 'Swing Storage Unit',
    desc: 'High-capacity tall pantry unit mechanism that swings internal rear shelves forward as the pantry door opens, providing dual-sided storage visibility.',
    thicknesses: ['450 mm Door (6 Tier)', '600 mm Door (6 Tier)'],
    defaultThickness: '450 mm Door (6 Tier)',
    thicknessLabel: 'Door Width & Tier Count',
    features: ['Dual Door & Cabinet Baskets', 'Heavy Load Swing Hinge', 'Adjustable Basket Height'],
    applications: ['Tall Pantry Cabinets', 'Bulk Grocery Storage', 'Kitchen Towers'],
    specs: {},
    heroSub: '100KG HEAVY-DUTY TALL PANTRY TOWER.',
    heroTitle: 'SWING STORAGE UNIT',
    heroDesc: 'High-capacity tall pantry unit mechanism that swings internal rear shelves forward as the pantry door opens, providing dual-sided storage visibility.',
    heroTags: [
      { text: '12 Baskets Total', icon: 'wood' },
      { text: '100kg Total Capacity', icon: 'shield' },
      { text: 'Dual Door + Body', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: '12 Tier Baskets', desc: '6 door baskets + 6 main cabinet baskets', icon: 'wood' },
      { title: '100kg Total Capacity', desc: 'Engineered for full bulk grocery storage', icon: 'shield' },
      { title: 'Synchronized Swing', desc: 'Rear shelves pull forward when door opens', icon: 'gear' }
    ]
  },
  {
    id: 117,
    brandId: 'pullout-wastebin',
    category: 'Kitchen Accessories',
    pageNumLeft: 103,
    pageNumRight: 104,
    badge: 'Waste Management',
    title: 'Pull-Out\nWaste Bin.',
    tagline: 'Built-in under-sink dual compartment pull-out waste bin',
    image: wastebinImg,
    brandName: 'Pull-Out Waste Bin',
    desc: 'Hygienic dual-bin pull-out waste management system with integrated odor lid. Mounts under kitchen sinks for wet and dry waste segregation.',
    thicknesses: ['Dual Bin (2 x 14L)', 'Dual Bin (2 x 20L)'],
    defaultThickness: 'Dual Bin (2 x 14L)',
    thicknessLabel: 'Bin Capacity Option',
    features: ['Wet/Dry Segregation', 'Auto-Closing Odor Lid', 'Full Extension Soft-Close Tracks'],
    applications: ['Under-Sink Cabinets', 'Kitchen Waste Disposal', 'Wet Waste Management'],
    specs: {},
    heroSub: 'UNDER-SINK HYGIENIC WASTE SEGREGATION.',
    heroTitle: 'PULL-OUT WASTE BIN',
    heroDesc: 'Hygienic dual-bin pull-out waste management system with integrated odor lid for wet and dry waste segregation under kitchen sinks.',
    heroTags: [
      { text: 'Dual Bin Segregation', icon: 'shield' },
      { text: 'Auto Odor Lid', icon: 'sparkles' },
      { text: 'Under-Sink Mount', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Wet & Dry Bins', desc: 'Two removable buckets for easy waste separation', icon: 'shield' },
      { title: 'Odor Control Lid', desc: 'Seals tight inside cabinet to prevent odors', icon: 'sparkles' },
      { title: 'Washable Polypropylene', desc: 'Smooth handles for effortless emptying & washing', icon: 'droplet' }
    ]
  },
  {
    id: 118,
    brandId: 'cabinet-ventilator-grills',
    category: 'Kitchen Accessories',
    pageNumLeft: 105,
    pageNumRight: 106,
    badge: 'Air Ventilation',
    title: 'Cabinet Ventilator\nGrills.',
    tagline: 'Aluminum air ventilation louvers for kitchen cabinets & appliances',
    image: ventilatorImg,
    brandName: 'Cabinet Ventilator Grills',
    desc: 'Precision extruded aluminum ventilation grills designed to dissipate heat from oven housings, refrigerator cavities, and under-sink cabinets.',
    thicknesses: ['60mm x 225mm', '80mm x 300mm', '100mm x 500mm'],
    defaultThickness: '80mm x 300mm',
    thicknessLabel: 'Grill Dimensions',
    features: ['Heat Dissipation Louvers', 'Anodized Anti-Rust Finish', 'Recessed Flush Mount'],
    applications: ['Built-in Oven Cabinets', 'Refrigerator Enclosures', 'Sink Under-Counters'],
    specs: {},
    heroSub: 'APPLIANCE HEAT DISSIPATION & AIRFLOW.',
    heroTitle: 'VENTILATOR GRILLS',
    heroDesc: 'Precision extruded aluminum ventilation grills designed to dissipate heat from oven housings, refrigerator cavities, and under-sink cabinets.',
    heroTags: [
      { text: 'Heat Dissipation', icon: 'gear' },
      { text: 'Anodized Aluminum', icon: 'shield' },
      { text: 'Flush Fit', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Heat Dissipation', desc: 'Protects expensive kitchen electronics from overheating', icon: 'gear' },
      { title: 'Anodized Anti-Rust', desc: 'Durable finish unaffected by humidity or steam', icon: 'shield' }
    ]
  }
];

// React Component showcasing Kitchen Accessories in a clean interactive showcase grid
export const KitchenAccessories = ({ onNavigate }) => {
  const handleItemClick = () => {
    if (onNavigate) {
      onNavigate('products', 'category=kitchen-accessories');
    }
  };

  return (
    <div className="w-full bg-[#fdfdfa] py-12 px-6 font-sans">
      <div className="max-w-[1280px] mx-auto text-left">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006e2f] mb-1 block">
              Modular Storage Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Kitchen Accessories
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1 max-w-2xl">
              Smart pull-outs, tandem drawers, magic corners, overhead elevators, and organizer trays engineered for modern modular kitchens.
            </p>
          </div>

          <button
            onClick={handleItemClick}
            className="mt-4 md:mt-0 px-6 py-2.5 bg-[#006e2f] hover:bg-[#005c26] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm cursor-pointer flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore Catalogue</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Grid of Kitchen Accessories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kitchenAccessoriesSpreads.filter(item => !item.hideFromIndex).map((item) => (
            <div
              key={item.id}
              onClick={handleItemClick}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="relative h-48 sm:h-52 bg-white overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.brandName}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-800 border border-slate-200/60 shadow-xs">
                  {item.badge}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#006e2f] transition-colors leading-snug">
                    {item.brandName}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#006e2f]">View Specifications</span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#006e2f] group-hover:text-white flex items-center justify-center transition-all text-slate-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default KitchenAccessories;
