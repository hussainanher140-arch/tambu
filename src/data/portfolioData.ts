import { Project, Service, Testimonial, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Salman Mohammad Tarek',
  nameBn: 'সালমান মোহাম্মদ তারেক',
  title: 'Shopify Developer & Brand Logo Designer',
  titleBn: 'শপিফাই ডেভেলপার এবং ব্র্যান্ড লোগো ডিজাইনার',
  tagline: 'Crafting High-Converting Shopify Stores & Memorable Brand Identities',
  taglineBn: 'হাই-কনভার্টিং শপিফাই স্টোর ও আকর্ষণীয় ব্র্যান্ড লোগো তৈরিতে বিশেষজ্ঞ',
  experienceYears: '5+',
  completedProjects: '180+',
  satisfiedClients: '95+',
  fiveStarReviews: '110+',
  email: 'salmantarek178@gmail.com',
  whatsappNumber: '8801852430258',
  whatsappRaw: '01852430258',
  whatsappFormatted: '+880 1852-430258',
  businessWebsite: 'https://www.thevylor.com',
  businessWebsiteDisplay: 'www.thevylor.com',
  businessName: 'The Vylor',
  location: 'Sylhet / Dhaka, Bangladesh (Serving Global Clients)',
  locationBn: 'বাংলাদেশ (বিশ্বব্যাপী ক্লায়েন্টদের সেবা প্রদানে নিয়োজিত)',
  availableForHire: true,
  images: {
    heroAvatar: '/assets/aistudio/548214494_1486575622495883_7350552310870450538_n_cbb297e3.jpg',
    profileBadge: '/assets/aistudio/548214494_1486575622495883_7350552310870450538_n_cbb297e3.jpg',
    aboutWarm: '/assets/aistudio/476157189_1319416482545132_4817985130225016726_n_04c668d7.jpg',
    speakingEvent: '/assets/aistudio/476376231_1320707072416073_80952593910073065_n_fd6cb502.jpg',
    casualSmiling: '/assets/aistudio/WhatsApp_Image_2026-10-13_at_4.32.53_PM_d95f3f64.jpeg'
  },
  skills: [
    { name: 'Shopify 2.0 & Liquid Development', level: 98, category: 'development' },
    { name: 'Pixel Connector & Meta CAPI (Server-Side)', level: 97, category: 'tracking' },
    { name: 'AI Integrations & Store Automation', level: 95, category: 'ai' },
    { name: 'Digital Marketing & ROAS Ad Funnels', level: 93, category: 'marketing' },
    { name: 'Logo & Brand Identity Design', level: 96, category: 'design' },
    { name: 'Speed Optimization (Core Web Vitals)', level: 96, category: 'development' },
    { name: 'Google Tag Manager & GA4 Analytics', level: 94, category: 'tracking' },
    { name: 'Adobe Illustrator & Vector Art', level: 95, category: 'design' },
    { name: 'CRO (Conversion Rate Optimization)', level: 92, category: 'strategy' },
    { name: 'Klaviyo Email Automation Flows', level: 91, category: 'marketing' }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'shopify-custom-store',
    title: 'Custom Shopify Store Development',
    titleBn: 'কাস্টম শপিফাই স্টোর ডেভেলপমেন্ট',
    icon: 'ShoppingBag',
    shortDesc: 'End-to-end bespoke Shopify store creation tailored to your niche with high-converting layouts, responsive UI, and premium UX.',
    shortDescBn: 'আপনার ব্র্যান্ডের জন্য সম্পূর্ণ কাস্টমাইজড প্রিমিয়াম শপিফাই স্টোর যা বেশি সেলস ও চমৎকার ইউজার এক্সপেরিয়েন্স নিশ্চিত করে।',
    deliverables: [
      'Custom Liquid 2.0 theme setup & tailoring',
      'Mobile-first responsive design',
      'High-converting product & collection templates',
      'Payment gateways & currency setup',
      'Shipping & tax configuration'
    ],
    deliverablesBn: [
      'কাস্টম লিকুইড ২.০ থিম সেটআপ',
      'মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন',
      'উচ্চ কনভার্সন প্রোডাক্ট পেইজ ডিজাইন',
      'পেমেন্ট গেটওয়ে ও কারেন্সি কনফিগারেশন',
      'শিপিং ও ট্যাক্স ক্যালকুলেশন'
    ],
    startingPrice: '$350',
    turnaround: '5 - 7 Days',
    badge: 'Most Popular'
  },
  {
    id: 'logo-brand-identity',
    title: 'Logo & Brand Identity Design',
    titleBn: 'লোগো ও ব্র্যান্ড আইডেন্টিটি ডিজাইন',
    icon: 'Palette',
    shortDesc: 'Distinctive, memorable vector logos crafted for modern e-commerce brands, complete with style guides, color palettes, and mockups.',
    shortDescBn: 'আধুনিক ই-কমার্স ও বিজনেসের জন্য ইউনিক ও আকর্ষণীয় ভেক্টর লোগো ডিজাইন, কালার প্যালেট এবং ব্রান্ড গাইডলাইন।',
    deliverables: [
      '3-4 Unique initial logo concepts',
      'Vector master files (AI, EPS, SVG, PNG, PDF)',
      'Brand style guide (Color codes & typography)',
      'Social media kit & favicon assets',
      '3D realistic merchandise & packaging mockups'
    ],
    deliverablesBn: [
      '৩-৪টি ইউনিক প্রাথমিক লোগো কনসেপ্ট',
      'ফুল ভেক্টর মাস্টার ফাইল (AI, EPS, SVG, PNG, PDF)',
      'ব্র্যান্ড কালার গাইড ও টাইপোগ্রাফি রুলস',
      'সোশ্যাল মিডিয়া প্রোফাইল কিট ও ফ্যাভিকন',
      'বাস্তবধর্মী ৩ডি মকআপ ও প্যাকেজিং ভিউ'
    ],
    startingPrice: '$150',
    turnaround: '2 - 4 Days',
    badge: 'Creative Edge'
  },
  {
    id: 'shopify-speed-cro',
    title: 'Speed Optimization & Bug Fixing',
    titleBn: 'স্পিড অপটিমাইজেশন ও বাগ ফিক্সিং',
    icon: 'Zap',
    shortDesc: 'Supercharge your store to achieve 90+ PageSpeed score. Clean bloated Liquid code, lazy-load media, and eliminate checkout friction.',
    shortDescBn: 'আপনার শপিফাই স্টোরের লোডিং স্পিড ৯০+ এ উন্নীত করা, অপ্রয়োজনীয় অ্যাপ স্ক্রিপ্ট ক্লিন করা এবং বাগ ফিক্স করা।',
    deliverables: [
      'Core Web Vitals enhancement (LCP, FID, CLS)',
      'Unused CSS & JS script deferral',
      'Lossless image compression & WebP conversion',
      'Checkout friction analysis & layout fix',
      'Before & After speed metric report'
    ],
    deliverablesBn: [
      'কোর ওয়েব ভাইটালস বৃদ্ধি (৯০+ স্কোর)',
      'অপ্রয়োজনীয় স্ক্রিপ্ট ও অ্যাপ ক্লিনআপ',
      'ইমেজ কম্প্রেশন ও অপটিমাইজেশন',
      'চেকআউট বাগ ফিক্স ও ইউজার ড্রপ কমানো',
      'বিফোর ও আফটার স্পিড রিপোর্ট'
    ],
    startingPrice: '$120',
    turnaround: '24 - 48 Hours',
    badge: 'Instant ROI'
  },
  {
    id: 'shopify-theme-redesign',
    title: 'Theme Redesign & Section Customization',
    titleBn: 'থিম রিডিজাইন ও সেকশন কাস্টমাইজেশন',
    icon: 'Layers',
    shortDesc: 'Revamp an outdated or sluggish Shopify store into a sleek, modern brand flagship with custom drag-and-drop Liquid sections.',
    shortDescBn: 'পুরনো শপিফাই স্টোরকে আধুনিক, আকর্ষণীয় ও ড্র্যাগ-অ্যান্ড-ড্রপ সেকশন দিয়ে সম্পূর্ণ নতুন রূপ দেওয়া।',
    deliverables: [
      'Custom customizer sections (reusable)',
      'Enhanced product sticky add-to-cart',
      'Advanced mega menu & filter drawer',
      'Upsell & cross-sell slide cart drawer',
      'Seamless theme upgrade without losing data'
    ],
    deliverablesBn: [
      'কাস্টম ড্র্যাগ-অ্যান্ড-ড্রপ সেকশন তৈরি',
      'স্টিকি অ্যাড-টু-কার্ট ও কুইক ভিউ',
      'স্মার্ট মেগামেনু ও ফিল্টারিং সিস্টেম',
      'ইন-কার্ট আপসেল ও ডিসকাউন্ট ড্রয়ার',
      'ডেটা না হারিয়ে থিম আপগ্রেড'
    ],
    startingPrice: '$250',
    turnaround: '3 - 5 Days'
  },
  {
    id: 'shopify-apps-automation',
    title: 'App Integrations & Klaviyo Marketing',
    titleBn: 'অ্যাপ ইন্টিগ্রেশন ও অটোমেশন',
    icon: 'Cpu',
    shortDesc: 'Automate post-purchase reviews, abandoned cart SMS/emails, loyalty programs, and subscription funnels to multiply customer lifetime value.',
    shortDescBn: 'রিভিউ, পরিত্যক্ত কার্ট ইমেইল রিকভারি, লয়্যালটি পয়েন্ট এবং সাবস্ক্রিপশন অটোমেশন সেটআপ।',
    deliverables: [
      'Klaviyo email flows (Welcome, Abandoned Cart, Winback)',
      'Judge.me / Loox photo review integration',
      'Recharge / Bold subscriptions setup',
      'Omnisend / SMS marketing configuration',
      'Inventory sync & multi-warehouse setups'
    ],
    deliverablesBn: [
      'ক্লাভিও ইমেইল অটোমেশন ফ্লো সেটআপ',
      'ফটো রিভিউ অ্যাপ ইন্টিগ্রেশন',
      'সাবস্ক্রিপশন পেমেন্ট গেটওয়ে কনফিগার',
      'এসএমএস ও রিকভারি নোটিফিকেশন',
      'ইনভেন্টরি ও ওয়্যারহাউস অটোমেশন'
    ],
    startingPrice: '$180',
    turnaround: '2 - 3 Days'
  },
  {
    id: 'full-brand-ecommerce-pack',
    title: 'Complete Brand + Shopify Flagship',
    titleBn: 'সম্পূর্ণ ব্র্যান্ড লোগো + শপিফাই প্যাকেজ',
    icon: 'Sparkles',
    shortDesc: 'The ultimate powerhouse package for new entrepreneurs: full brand identity, custom logo, stationery, and a complete ready-to-sell Shopify store.',
    shortDescBn: 'নতুন ব্র্যান্ডের জন্য সম্পূর্ণ প্যাকেজ: ইউনিক লোগো, ব্র্যান্ড আইডেন্টিটি এবং একদম রেডি-টু-সেল শপিফাই স্টোর।',
    deliverables: [
      'Complete vector logo suite & guidelines',
      'Fully custom turnkey Shopify 2.0 store',
      'Top 10 winning products pre-loaded',
      'High-converting product landing page',
      'Social media banner pack & 30-day support'
    ],
    deliverablesBn: [
      'কমপ্লিট ভেক্টর লোগো ও ব্র্যান্ড বুক',
      'ফুল শপিফাই ২.০ রেডি স্টোর',
      'হাই-কনভার্টিং ল্যান্ডিং পেজ ও কপিরাইটিং',
      'সোশ্যাল মিডিয়া ব্যানার কিট',
      '৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট'
    ],
    startingPrice: '$480',
    turnaround: '7 - 10 Days',
    badge: 'Best Value'
  },
  {
    id: 'pixel-tracking-capi',
    title: 'Pixel Connector & Server-Side Tracking (CAPI)',
    titleBn: 'পিক্সেল কানেক্টর ও সার্ভার-সাইড ট্র্যাকিং (CAPI)',
    icon: 'Radio',
    shortDesc: 'Stop losing 30-40% of ad attribution to iOS updates and ad blockers. Implement Meta Conversions API (CAPI), Google Tag Manager, GA4, and TikTok Pixel with 100% event deduplication.',
    shortDescBn: 'মেটা পিক্সেল কনভার্সন এপিআই (CAPI), গুগল ট্যাগ ম্যানেজার, GA4 এবং টিকটক পিক্সেল নিখুঁতভাবে সেটআপ। ইভেন্ট ড্রপ দূর করে সঠিক রিটার্ন অন অ্যাড স্পেন্ড (ROAS) নিশ্চিত করুন।',
    deliverables: [
      'Meta (Facebook) Conversions API (Server-Side)',
      'Google Tag Manager (GTM) & GA4 E-commerce Events',
      'TikTok Pixel with Advanced Event Matching',
      'Browser & Server event deduplication (9.0+ score)',
      'Custom purchase & add-to-cart parameter tracking'
    ],
    deliverablesBn: [
      'মেটা কনভার্সন এপিআই (সার্ভার-সাইড ট্র্যাকিং)',
      'গুগল ট্যাগ ম্যানেজার ও GA4 ই-কমার্স ইভেন্টস',
      'টিকটক পিক্সেল অ্যাডভান্সড ম্যাচিং',
      'ইভেন্ট ডুপ্লিকেশন রিমুভ ও ৯+ ম্যাচ কোয়ালিটি',
      'পারচেজ ও অ্যাড-টু-কার্ট নিখুঁত ডেটা ট্র্যাকিং'
    ],
    startingPrice: '$150',
    turnaround: '24 - 48 Hours',
    badge: 'High Accuracy'
  },
  {
    id: 'ai-integrator-automation',
    title: 'AI Integrator & Smart E-Commerce Automation',
    titleBn: 'এআই ইন্টিগ্রেশন ও স্মার্ট অটোমেশন',
    icon: 'Bot',
    shortDesc: 'Integrate cutting-edge AI assistants into your Shopify store. 24/7 autonomous customer service chatbots, AI-driven product cross-sells, smart semantic search, and automated copywriting.',
    shortDescBn: 'শপিফাই স্টোরে ২৪/৭ এআই কাস্টমার সাপোর্ট চ্যাটবট, এআই প্রোডাক্ট রেকমেন্ডেশন এবং স্বয়ংক্রিয় এআই ডেসক্রিপশন জেনারেশন ইন্টিগ্রেশন।',
    deliverables: [
      '24/7 AI Sales Assistant & Customer Chatbot',
      'Automated AI SEO product description generator',
      'Smart semantic search & visual similarity finder',
      'AI cart recovery & personalized discount trigger',
      'Gemini / OpenAI API custom Shopify workflow'
    ],
    deliverablesBn: [
      '২৪/৭ স্বয়ংক্রিয় এআই সেলস ও চ্যাটবট অ্যাসিস্ট্যান্ট',
      'এআই এসইও প্রোডাক্ট ডেসক্রিপশন জেনারেটর',
      'স্মার্ট এআই প্রডাক্ট রেকমেন্ডেশন সিস্টেম',
      'এআই কার্ট রিকভারি ও পার্সোনালাইজড অফার',
      'জেমিলাই / ওপেন-এআই কাস্টম শপিফাই ইন্টিগ্রেশন'
    ],
    startingPrice: '$200',
    turnaround: '2 - 4 Days',
    badge: 'Next-Gen AI'
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & ROAS Ad Funnel Strategy',
    titleBn: 'ডিজিটাল মার্কেটিং ও অ্যাড ফানেল স্ট্র্যাটেজি',
    icon: 'TrendingUp',
    shortDesc: 'Full-funnel paid digital marketing for Shopify brands. High-converting Meta (Facebook/Instagram) ad setup, Google Shopping, custom retargeting, and creative ad copy.',
    shortDescBn: 'শপিফাই ব্র্যান্ডের সেলস বাড়াতে মেটা ও গুগল অ্যাডস ক্যাম্পেইন সেটআপ, হাই-কনভার্টিং অ্যাড কপিরাইটিং ও রিটার্গেটিং ফানেল।',
    deliverables: [
      'Meta (Facebook/Instagram) Ads campaign setup',
      'Google Shopping & Performance Max campaigns',
      'Dynamic Product Ads (DPA) retargeting funnels',
      'Ad creative copy & graphic banner angles',
      'Weekly ROAS analytics & scale recommendations'
    ],
    deliverablesBn: [
      'মেটা (ফেসবুক/ইনস্টাগ্রাম) অ্যাডস ক্যাম্পেইন সেটআপ',
      'গুগল শপিং ও পারফরম্যান্স ম্যাক্স ক্যাম্পেইন',
      'ডায়নামিক প্রোডাক্ট অ্যাডস (DPA) রিটার্গেটিং',
      'হাই-কনভার্টিং অ্যাড কপি ও ব্যানার ডিজাইন',
      'সাপ্তাহিক আরওএএস (ROAS) অ্যানালিটিক্স রিপোর্ট'
    ],
    startingPrice: '$250',
    turnaround: '3 - 5 Days',
    badge: 'Revenue Scaler'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'the-vylor-flagship',
    title: 'The Vylor - Modern Brand & Digital Commerce',
    titleBn: 'দ্য ভাইলর - ডিজিটাল ব্র্যান্ড ও কমার্স এজেন্সি',
    category: 'custom',
    client: 'The Vylor (www.thevylor.com)',
    industry: 'Digital Commerce & Brand Architecture',
    description: 'Salman Mohammad Tarek’s official business initiative. A premium design and Shopify engineering practice empowering modern direct-to-consumer labels with conversion-focused digital identities.',
    descriptionBn: 'সালমান মোহাম্মদ তারেকের নিজস্ব বিজনেস ওয়েবসাইট (www.thevylor.com)। আধুনিক ই-কমার্স ব্র্যান্ডের জন্য পূর্ণাঙ্গ ডিজাইন ও শপিফাই ডেভেলপমেন্ট সেবা।',
    metrics: [
      { label: 'Official Platform', value: 'thevylor.com' },
      { label: 'Core Focus', value: 'Shopify & Identity' },
      { label: 'Client Global Reach', value: '15+ Countries' }
    ],
    tags: ['Official Business', 'Shopify 2.0', 'Brand Identity', 'Agency Flagship', 'Liquid'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    liveUrl: 'https://www.thevylor.com',
    challenge: 'Creating a unified agency brand platform that communicates both technical Shopify mastery and cutting-edge aesthetic brand design.',
    challengeBn: 'টেকনিক্যাল শপিফাই কোডিং এবং আকর্ষণীয় ব্র্যান্ড ডিজাইনের যৌথ ক্ষমতা তুলে ধরে একটি আধুনিক প্ল্যাটফর্ম প্রতিষ্ঠা করা।',
    solution: 'Designed and engineered The Vylor with a minimalist obsidian aesthetic, high-velocity performance, and transparent service packages.',
    solutionBn: 'আল্ট্রা-ফাস্ট স্পিড ও প্রিমিয়াম ভিজ্যুয়াল কোয়ালিটি নিয়ে তৈরি দ্য ভাইলর (www.thevylor.com)।',
    deliverables: ['Full Brand Identity', 'Modern E-Commerce Architecture', 'Client Onboarding Funnel'],
    colorPalette: ['#0A0F12', '#10B981', '#14B8A6', '#F3F4F6']
  },
  {
    id: 'aura-luxury-apparel',
    title: 'Aura Atelier - Minimalist Haute Couture',
    titleBn: 'অরা অ্যাটেলিয়ার - লাক্সারি ফ্যাশন স্টোর',
    category: 'shopify',
    client: 'Aura Luxury Group (UK / USA)',
    industry: 'High-End Fashion & Apparel',
    description: 'A bespoke Shopify 2.0 theme built for high-ticket fashion. Features a seamless slide-out drawer cart with tiered free shipping motivator, variant swatch selectors, and zero-layout-shift micro-interactions.',
    descriptionBn: 'লাক্সারি ফ্যাশন ব্র্যান্ডের জন্য সম্পূর্ণ কাস্টম শপিফাই স্টোর। ইন্টারেক্টিভ কার্ট ড্রয়ার, ফ্রি শিপিং প্রগ্রেস বার এবং আল্ট্রা-ফাস্ট মোবাইল লোডিং।',
    metrics: [
      { label: 'Mobile PageSpeed', value: '98/100' },
      { label: 'Conversion Rate', value: '+3.4% (+68%)' },
      { label: 'Average Order Value', value: '+$42' }
    ],
    tags: ['Shopify 2.0', 'Liquid', 'Tailwind', 'Swatch Selector', 'Slide Cart'],
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    liveUrl: 'https://aura-atelier-preview.myshopify.com',
    challenge: 'Client was losing over 55% of mobile visitors due to a sluggish 4.2-second load time and confusing checkout swatches.',
    challengeBn: 'স্লো লোডিং এবং মোবাইলে ড্রপ-অফের কারণে ক্লায়েন্টের অর্ধেকের বেশি ভিজিটর কার্ট থেকে ফিরে যাচ্ছিল।',
    solution: 'Engineered a clean Liquid framework, purged redundant JS trackers, and built custom native swatches that render instantly without third-party app bloat.',
    solutionBn: 'অপ্রয়োজনীয় অ্যাপ স্ক্রিপ্ট ছাড়াই নেটিভ লিকুইড কোডে কালার সোয়াচ এবং ০.৯ সেকেন্ড লোডিং নিশ্চিত করেছি।',
    deliverables: ['Custom Dawn-based Theme Architecture', 'Sticky Dynamic Checkout', 'Klaviyo Segment Flows', 'Core Web Vitals Pass'],
    colorPalette: ['#1A1A1A', '#C9A96E', '#F5F3EF', '#7D776E']
  },
  {
    id: 'lumina-botanicals-logo',
    title: 'Lumina Botanicals - Brand Identity & Logo',
    titleBn: 'লুমিনা বোটানিক্যালস - লোগো ও ব্র্যান্ড আইডেন্টিটি',
    category: 'logo',
    client: 'Lumina Organics (Canada)',
    industry: 'Clean Skincare & Wellness',
    description: 'A poetic, timeless monogram brand mark harmonizing natural botanical leaves with sleek geometric typography. Delivered full identity, packaging foil mockups, and retail labels.',
    descriptionBn: 'অর্গানিক স্কিনকেয়ার ব্র্যান্ডের জন্য মিনিমালিস্ট পাতা ও জ্যামিতিক অক্ষরের সমন্বয়ে তৈরি আইকনিক ব্র্যান্ড লোগো ও প্যাকেজিং ডিজাইন।',
    metrics: [
      { label: 'Brand Recall Rate', value: '94%' },
      { label: 'Packaging Assets', value: '18 SKUs' },
      { label: 'Files Handed Over', value: 'All Vectors + Guides' }
    ],
    tags: ['Brand Identity', 'Vector Logo', 'Packaging Design', 'Adobe Illustrator', 'Luxury Mockups'],
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    mockups: [
      { type: 'dark', title: 'Night Velvet Theme', description: 'Deep emerald background with gold foil embossed logo' },
      { type: 'business_card', title: 'Heavy Cotton Letterpress', description: '600gsm matte cotton texture with debossed gold typography' },
      { type: 'packaging', title: 'Dropper Bottle & Box', description: 'Cosmetics frosted glass serum bottle with minimal label' },
      { type: 'app_icon', title: 'Digital iOS App Icon', description: 'Sleek rounded geometry optimized for retina displays' }
    ],
    deliverables: ['Monogram Iconography', 'Pantone & Hex Color Book', 'Primary & Secondary Marks', 'Social Media Branding Kit'],
    colorPalette: ['#0A2E26', '#E4D5B7', '#2A4D3E', '#F7F6F2']
  },
  {
    id: 'nordic-roast-shopify',
    title: 'Nordic Roast Co. - DTC Specialty Coffee',
    titleBn: 'নরডিক রোস্ট কোং - কফি ই-কমার্স স্টোর',
    category: 'shopify',
    client: 'Nordic Roast Roasters (Norway / EU)',
    industry: 'Specialty Coffee & Beverages',
    description: 'Custom Shopify storefront integrated with Recharge subscription engine. Features a dynamic interactive "Find Your Roast" quiz and recurring bean deliveries.',
    descriptionBn: 'স্পেশালিটি কফি ব্র্যান্ডের জন্য রিকারিং সাবস্ক্রিপশন স্টোর এবং ইন্টারেক্টিভ কুইজ ইন্টিগ্রেশন।',
    metrics: [
      { label: 'Subscription Retention', value: '82%' },
      { label: 'Monthly GMV', value: '$85k+' },
      { label: 'Mobile Speed Score', value: '95/100' }
    ],
    tags: ['Shopify Plus', 'Recharge API', 'Subscription Funnel', 'Liquid Sections', 'Interactive Quiz'],
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    deliverables: ['Subscription Funnel UX', 'Custom Roast Quiz', 'Bilingual Currency Picker', 'Klaviyo Post-Purchase Flows'],
    colorPalette: ['#231713', '#C69255', '#EFE6DD', '#5C4033']
  },
  {
    id: 'apex-shield-logo',
    title: 'Apex Shield - Cyber & Cloud Identity',
    titleBn: 'অ্যাপেক্স শিল্ড - সাইবার সিকিউরিটি লোগো',
    category: 'logo',
    client: 'Apex Shield Infosec (Singapore)',
    industry: 'Cybersecurity & Enterprise SaaS',
    description: 'An aggressive yet sophisticated cyber shield constructed with isometric angles and neon cyan gradients, projecting impenetrable trust and cutting-edge intelligence.',
    descriptionBn: 'সাইবার সিকিউরিটি ফার্মের জন্য আধুনিক আইসোমেট্রিক শিল্ড ও টেক আইডেন্টিটি ডিজাইন।',
    metrics: [
      { label: 'Concept Variations', value: '5 Rounds' },
      { label: 'Scalability', value: 'Favicon to Billboard' },
      { label: 'Asset Package', value: 'SVG, AI, 3D Render' }
    ],
    tags: ['Cyber Tech', 'Isometric Logo', 'Dark Aesthetic', 'Corporate Identity'],
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    mockups: [
      { type: 'dark', title: 'OLED Cyber Interface', description: 'Cyan neon backlight against brushed dark titanium' },
      { type: 'app_icon', title: 'Mobile Security App', description: 'High contrast badge for dark mode devices' }
    ],
    deliverables: ['Isometric Vector Shield', 'Full Brand Guidelines', 'UI Icon Library', 'Vector Source Codes'],
    colorPalette: ['#0A0F1D', '#00E5FF', '#3B82F6', '#1E293B']
  },
  {
    id: 'zest-kitchen-speed',
    title: 'Zest Home - PageSpeed Boost 34 → 96',
    titleBn: 'জেস্ট হোম - স্পিড অপটিমাইজেশন ৩৪ থেকে ৯৬',
    category: 'speed',
    client: 'Zest Living Retail (USA)',
    industry: 'Home Goods & Cookware',
    description: 'Complete Shopify speed triage. Removed 11 uninstalled app script orphans, migrated bulky libraries to native vanilla JS, and implemented WebP next-gen asset delivery.',
    descriptionBn: '৩৪ স্পিড স্কোর থেকে মাত্র ২৪ ঘণ্টায় ৯৬ তে রূপান্তর। স্টোর লোড টাইম ৪.৬ সেকেন্ড থেকে ০.৮ সেকেন্ডে নেমে এসেছে।',
    metrics: [
      { label: 'Speed Score Before', value: '34/100' },
      { label: 'Speed Score After', value: '96/100' },
      { label: 'Load Time Reduction', value: '4.6s → 0.8s' }
    ],
    tags: ['Speed Triage', 'Core Web Vitals', 'Script Cleanup', 'WebP Delivery', 'Liquid Refactor'],
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    challenge: '14 abandoned Shopify apps had injected thousands of lines of JavaScript that blocked page rendering, killing ad conversions.',
    challengeBn: 'অব্যবহৃত ১৪টি অ্যাপের কারণে পেইজ আটকে থাকত এবং ফেসবুক অ্যাডের কনভার্সন অনেক কমে যাচ্ছিল।',
    solution: 'Cleaned theme.liquid and snippets, deferred analytics tag managers, and compressed over 400 product photos losslessly.',
    solutionBn: 'সম্পূর্ণ কোড ক্লিন করে এবং ৪০০+ প্রোডাক্ট ইমেজ অপটিমাইজ করে অবিশ্বাস্য স্পিড এনে দিয়েছি।',
    deliverables: ['Liquid Code Audit', 'Core Web Vitals Pass Certificate', 'Zero Visual Bug Guarantee'],
    colorPalette: ['#10B981', '#064E3B', '#F3F4F6', '#111827']
  },
  {
    id: 'verdant-oasis-brand',
    title: 'Verdant Oasis - Eco Botany & Plant Shop',
    titleBn: 'ভারডেন্ট ওয়েসিস - ইকো প্ল্যান্ট শপ ও লোগো',
    category: 'custom',
    client: 'Verdant Oasis (Australia)',
    industry: 'Plant Nursery & Home Decor',
    description: 'Full dual project: Designed the hand-drawn organic leaf logo and built a turnkey Shopify 2.0 store with custom plant care instructions on every product page.',
    descriptionBn: 'লোগো ডিজাইন এবং শপিফাই স্টোর ডেভেলপমেন্ট দুটোই একসাথে সম্পন্ন করা হয়েছে।',
    metrics: [
      { label: 'First Month Sales', value: '$34,000' },
      { label: 'Customer Rating', value: '4.9 ★' },
      { label: 'Turnaround Time', value: '8 Days' }
    ],
    tags: ['Turnkey Package', 'Handcrafted Logo', 'Shopify 2.0', 'Metafields', 'Plant Care Filter'],
    thumbnail: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
    deliverables: ['Custom Organic Logo', 'Shopify Metafields Setup', 'Care Guide Tab System', 'Email Marketing Template'],
    colorPalette: ['#1B4332', '#40916C', '#D8F3DC', '#2D6A4F']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Aura Atelier',
    country: 'London, United Kingdom',
    countryFlag: '🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'Salman is an absolute magician with Shopify Liquid! He rebuilt our fashion store from the ground up. Our checkout completion rate jumped by 68% in the first 3 weeks. Plus, he communicated with crystal clear updates every single day.',
    contentBn: 'সালমান শপিফাই লিকুইড কোডিংয়ে অবিশ্বাস্য দক্ষ! সে আমাদের ফ্যাশন স্টোর নতুন করে গড়ে তুলেছে। প্রথম তিন সপ্তাহেই আমাদের চেকআউট রেশিও ৬৮% বৃদ্ধি পেয়েছে। যোগাযোগের দিক থেকেও সে দারুণ পেশাদার।',
    projectType: 'Custom Shopify 2.0 Store',
    date: 'February 2026'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Lumina Botanicals',
    country: 'Vancouver, Canada',
    countryFlag: '🇨🇦',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'We hired Salman for our cosmetic brand logo and packaging identity. He gave us 4 distinctly gorgeous concepts, each better than the last. The final vector package included everything our printer needed. Outstanding work!',
    contentBn: 'আমরা আমাদের কসমেটিক ব্র্যান্ডের লোগো ও প্যাকেজিং ডিজাইনের জন্য সালমানকে বেছে নিয়েছিলাম। সে আমাদের ৪টি অপূর্ব কনসেপ্ট দিয়েছিল। ফাইনাল প্রিন্টিং ফাইলসহ সবকিছু নিখুঁত ছিল।',
    projectType: 'Logo & Brand Identity Pack',
    date: 'January 2026'
  },
  {
    id: '3',
    name: 'Tariq Al-Mansoor',
    role: 'E-commerce Director',
    company: 'Zest Home Living',
    country: 'Dubai, UAE',
    countryFlag: '🇦🇪',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'Our Shopify store was agonizingly slow (34 Google score) and ad ROAS was failing. Salman jumped in, audited all bloated scripts, and in under 36 hours brought our mobile score to 96! True professional who knows his craft.',
    contentBn: 'আমাদের শপিফাই স্টোর অনেক স্লো ছিল এবং অ্যাড থেকে ভালো সেল আসছিল না। সালমান মাত্র ৩৬ ঘণ্টায় স্কোর ৩৪ থেকে ৯৬ এ তুলে দিয়েছে! অসাধারণ কাজ।',
    projectType: 'Shopify Speed Optimization',
    date: 'March 2026'
  },
  {
    id: '4',
    name: 'David Reynolds',
    role: 'Co-Founder',
    company: 'Nordic Roast Roasters',
    country: 'Oslo, Norway',
    countryFlag: '🇳🇴',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'The custom subscription quiz Salman built for our coffee store tripled our recurring monthly subscriptions. He understands both e-commerce design psychology and solid coding.',
    contentBn: 'আমাদের কফি স্টোরের জন্য সালমান যে কাস্টম সাবস্ক্রিপশন কুইজ বানিয়ে দিয়েছে তা আমাদের সাবস্ক্রিপশন ৩ গুণ বাড়িয়েছে। সে ডিজাইন ও কোডিং দুটোই নিখুঁত বোঝে।',
    projectType: 'Shopify Plus Custom Quiz',
    date: 'December 2025'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does it take to develop a complete Shopify store?',
    questionBn: 'একটি সম্পূর্ণ শপিফাই স্টোর তৈরি করতে কতদিন সময় লাগে?',
    answer: 'Standard turnkey custom Shopify stores are completed within 5 to 7 business days. If you require advanced custom Liquid applications or complex subscriptions, it typically takes 8 to 12 days. I always share a live staging preview link so you can follow the progress daily.',
    answerBn: 'সাধারণত একটি পূর্ণাঙ্গ শপিফাই স্টোর ৫ থেকে ৭ কর্মদিবসের মধ্যে তৈরি করা সম্ভব। আরও জটিল ফিচার থাকলে ৮-১২ দিন লাগতে পারে। প্রতিদিনের কাজের আপডেট লাইভ টেস্ট লিংকের মাধ্যমে দেখতে পারবেন।',
    category: 'Shopify'
  },
  {
    question: 'What source files will I receive for my Logo & Brand design?',
    questionBn: 'লোগো ডিজাইনের সাথে আমি কি কি ফাইল পাব?',
    answer: 'You will receive 100% vector master files including Adobe Illustrator (.AI), Scalable Vector Graphics (.SVG), Encapsulated PostScript (.EPS), high-resolution transparent PNGs (for websites/stores), print-ready CMYK PDFs, and a Brand Identity Guidelines sheet with typography and hex color codes.',
    answerBn: 'আপনি ১০০% ভেক্টর মাস্টার ফাইল পাবেন: Adobe Illustrator (.AI), .SVG, .EPS, হাই-রেজুলেশন ট্রান্সপারেন্ট .PNG, প্রিন্ট-রেডি .PDF এবং কালার কোড ও ফন্ট নির্দেশিকাসহ ব্র্যান্ড গাইডলাইন।',
    category: 'Design'
  },
  {
    question: 'Can you improve my existing Shopify store speed without breaking the design?',
    questionBn: 'আমার বিদ্যমান শপিফাই স্টোরের ডিজাইন ঠিক রেখে কি স্পিড বাড়ানো সম্ভব?',
    answer: 'Absolutely yes! I guarantee 100% visual integrity. I clean up ghost scripts, optimize media into next-gen formats, eliminate render-blocking resources, and minify assets so your store loads in under 1.5 seconds without losing any functionality.',
    answerBn: 'হ্যাঁ, অবশ্যই! ডিজাইনের কোনও ক্ষতি ছাড়াই অপ্রয়োজনীয় স্ক্রিপ্ট ক্লিন করে এবং ইমেজ অপটিমাইজ করে স্টোর স্পিড দ্রুত করা হয়। ১০০% ভিজ্যুয়াল ইনটিগ্রিটি গ্যারান্টি।',
    category: 'Speed'
  },
  {
    question: 'Do you provide revisions if I want adjustments?',
    questionBn: 'আমি কি রিভিশন বা পরিবর্তন করার সুযোগ পাব?',
    answer: 'Yes! All projects come with unlimited reasonable revisions during the milestone phase. My goal is 100% satisfaction — I refine until your brand looks and operates exactly as you envisioned.',
    answerBn: 'অবশ্যই! আপনার শতভাগ সন্তুষ্টি না হওয়া পর্যন্ত প্রয়োজনীয় সকল পরিবর্তন করা হবে। আপনার মনের মতো স্টোর বা লোগো তৈরি করাই মূল লক্ষ্য।',
    category: 'General'
  },
  {
    question: 'How do we get started and how do payments work?',
    questionBn: 'কাজ শুরু করার নিয়ম ও পেমেন্ট প্রসেস কেমন?',
    answer: 'You can use the interactive project estimator below or send me a direct message via WhatsApp or email. We will outline the scope, confirm timelines, and start via safe milestone payments (Upwork, Fiverr, Wise, Payoneer, or direct bank transfer).',
    answerBn: 'নিচের প্রজেক্ট ক্যালকুলেটর ব্যবহার করতে পারেন অথবা সরাসরি হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করতে পারেন। আপওয়ার্ক, ফাইভার, ওয়াইজ, পেওনিয়ার বা ব্যাংকের মাধ্যমে নিরাপদ পেমেন্টে কাজ শুরু করা যাবে।',
    category: 'General'
  }
];
