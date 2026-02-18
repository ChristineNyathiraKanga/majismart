export const heroStats = [
  { value: 33, suffix: '%', label: 'piped water access' },
  { value: 320, prefix: 'KES ', label: 'avg. 20L bottle' },
  { value: 1, prefix: '$', suffix: 'B+', label: 'water market Kenya' },
]

export const problems = [
  {
    num: '67%',
    tag: 'No Piped Water',
    title: 'Infrastructure Gap',
    body: 'Only 33% of Kenyan households have piped access (KNBS/KDHS 2022). The rest rely on vendors, boreholes, or tankers — with zero reliability or quality guarantees.',
    isRed: true,
  },
  {
    num: 'Trust\nGap',
    tag: 'Safety Uncertainty',
    title: 'Quality Anxiety',
    body: 'Even when utilities supply treated water, most households still boil or treat — driving persistent demand for delivered branded water with clear provenance.',
    isGold: true,
  },
  {
    num: 'Zero',
    tag: 'Digital Dispatch',
    title: 'No Unified Platform',
    body: 'No platform connects households to vetted vendors with real-time tracking, quality controls, and flexible M-Pesa payment. The market is fragmented and analogue.',
  },
]

export const steps = [
  {
    num: '01',
    icon: '📱',
    title: 'Order',
    body: 'Choose brand or \'best value\'. Select quantity (min 1×20L). Pay via M-Pesa or card — seamlessly integrated.',
  },
  {
    num: '02',
    icon: '📍',
    title: 'Match',
    body: 'Algorithm routes to nearest stocked, verified vendor + nearest available rider for fastest dispatch.',
  },
  {
    num: '03',
    icon: '🏍️',
    title: 'Dispatch',
    body: 'Bodaboda or e-bike rider picks up. Real-time GPS tracking sent to customer. ETA in minutes, not hours.',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Delivered',
    body: 'Quality-verified water arrives. Ratings collected. Refill subscription optionally activated for recurring delivery.',
    isGreen: true,
  },
]

export const cities = [
  { phase: 'Phase 1', name: 'Nairobi', pop: '4.9M pop', households: '~1.1M households' },
  { phase: 'Phase 2', name: 'Mombasa', pop: '1.2M pop', households: '~270K households' },
  { phase: 'Phase 3', name: 'Kisumu', pop: '600K pop', households: '~135K households' },
  { phase: 'Phase 3', name: 'Nakuru / Eldoret', pop: '500K pop', households: '~110K households' },
]

export const revenueStreams = [
  {
    icon: '📈',
    name: 'Platform Commission',
    value: '10–12% at launch\n→ 12–18% at scale',
    sub: 'On each water order value. Scales with volume and vendor lock-in.',
    variant: 'teal',
  },
  {
    icon: '🚚',
    name: 'Delivery Margin',
    value: 'KES 50–120 fee\nminus rider payout',
    sub: 'Improved via batching + e-bikes. Route density is the margin lever.',
    variant: 'teal',
  },
  {
    icon: '🏠',
    name: 'Household Subscription',
    value: 'KES 199–349/mo',
    sub: 'Priority dispatch · refill scheduling · bundles. Predictable MRR.',
    variant: 'gold',
  },
  {
    icon: '🏢',
    name: 'Vendor Subscription',
    value: 'KES 1,000–2,500/mo',
    sub: 'Promoted listing · analytics · SLA access. B2B recurring revenue.',
    variant: 'green',
  },
]

export const barData = [
  { month: 'M1', val: 120 },
  { month: 'M2', val: 280 },
  { month: 'M3', val: 520 },
  { month: 'M4', val: 820 },
  { month: 'M5', val: 1200 },
  { month: 'M6', val: 1650 },
  { month: 'M9', val: 3100 },
  { month: 'M12', val: 5200 },
  { month: 'M18', val: 11000 },
  { month: 'M24', val: 22000 },
]

export const financialAssumptions = [
  { label: 'Avg order', value: '1.6×20L bottles per transaction' },
  { label: 'Commission', value: '12% → 15% by M12' },
  { label: 'Subscription attach', value: '18% of active users' },
  { label: 'Batching efficiency', value: '2.4 drops/rider/hour' },
  { label: 'Monthly burn', value: 'KES 1.0–1.6M (lean pilot)' },
]

export const cityRolloutTable = [
  { city: 'Nairobi', launch: 'M1', breakeven: 'M18–22', rev24: '22M/mo', highlight: true },
  { city: 'Mombasa', launch: 'M10', breakeven: 'M28–32', rev24: '8M/mo' },
  { city: 'Kisumu', launch: 'M16', breakeven: 'M34–38', rev24: '4M/mo' },
  { city: 'Nakuru/Eldoret', launch: 'M20', breakeven: 'M36–40', rev24: '3M/mo' },
]

export const deliveryOptions = [
  {
    letter: 'A',
    name: 'Rider Network\n(Asset-Light)',
    capex: 'KES 0',
    costPerDrop: 'KES 60',
    bestFor: 'Phase 1 launch',
    badge: 'Option A · Phase 1'
  },
  {
    letter: 'B',
    name: 'Hybrid: Own\nFleet + Riders',
    capex: 'KES 150K–300K',
    costPerDrop: 'KES 35–45',
    bestFor: 'High-density estates',
    featured: true,
    badge: 'Option B · High-Density'
  },
  {
    letter: 'C',
    name: 'Full E-bike\nFleet',
    capex: 'KES 600K–1.2M',
    costPerDrop: 'KES 25–32',
    bestFor: 'Scale phase only',
    badge: 'Option C · Scale'
  },
]

export const channels = [
  {
    name: 'Residential Estates',
    icon: '🏘️',
    desc: 'Partner with property managers. Bulk deals + scheduled refills. Captive audience of 50–500 households per estate — predictable volume, low CAC.',
  },
  {
    name: 'Offices & Co-working',
    icon: '🏢',
    desc: '3–10 bottles/week per office. High repeat, predictable logistics, easy SLA commitments. B2B channel with high retention.',
  },
  {
    name: 'Retail Resellers (Dukas)',
    icon: '🏪',
    desc: 'Kiosks and dukas as micro-pickup points. Reduces last-100m cost. Expands supply map without additional rider overhead.',
  },
]

export const gtmTimeline = [
  {
    period: 'Day 1–30',
    text: 'Onboard 20+ vendors · Recruit 30 riders · Finalise app MVP · Select 3 pilot estates in Nairobi'
  },
  {
    period: 'Day 31–60',
    text: 'Launch pilot zone · 200+ orders · Gather ratings data · Build vendor quality score system',
  },
  {
    period: 'Day 61–90',
    text: '500+ orders/month · 3 estate partnerships signed · First office accounts · Batch routing live'
  },
]

export const competitorMatrix = [
  { name: 'Maji Smart', drinking: true, bulk: true, tracking: true, mpesa: true, subs: true, qa: true, rollout: true },
  { name: 'Jibu Kenya', drinking: true, bulk: false, tracking: false, mpesa: true, subs: false, qa: true, rollout: false },
  { name: 'GoBeba', drinking: true, bulk: false, tracking: true, mpesa: true, subs: false, qa: false, rollout: false },
  { name: 'PowWater', drinking: false, bulk: true, tracking: true, mpesa: true, subs: false, qa: false, rollout: false },
  { name: 'Balozy', drinking: true, bulk: true, tracking: false, mpesa: false, subs: false, qa: false, rollout: false },
  { name: 'Uber/Generic', drinking: false, bulk: false, tracking: true, mpesa: true, subs: false, qa: false, rollout: false },
]

export const moatAdvantage = [
  '🛡️ Vendor verification + brand authenticity controls',
  '📍 City-by-city vendor network — proprietary registry',
  '🔄 Scheduled refills + household water profiles',
  '🏢 Estate & office SLA channel lock-in',
  '⚡ E-bike micro-depot economics — unbeatable delivery margin',
]

export const team = [
  {
    role: 'Founder / CEO',
    title: 'Product Vision & Strategy',
    desc: 'Product vision, fundraising, strategy. Nairobi HQ — city expansion ownership.',
    avatar: '👤',
  },
  {
    role: 'CTO / Tech Lead',
    title: 'App, Backend & Dispatch',
    desc: 'App + backend + maps + dispatch + payments. Consumer + Vendor apps.',
    avatar: '💻',
  },
  {
    role: 'Operations Manager',
    title: 'Service Levels & QA',
    desc: 'Service levels, vendor QA, rider performance. City rollout lead.',
    avatar: '⚙️',
  },
  {
    role: 'Sales Channel Manager',
    title: 'Revenue Channels',
    desc: 'Estate + office + reseller partnerships. Owns all revenue channel relationships.',
    avatar: '📊',
  },
]

export const marqueeItems = [
  'Vendor Verification',
  'Brand Authenticity Controls',
  'Scheduled Refills',
  'SLA-Grade Supply',
  'City-by-City Network Moat',
  'M-Pesa Native',
  'Real-Time GPS Tracking',
]

export const ctaStats = [
  { value: '$100K', label: 'Pre-seed raise' },
  { value: 'M16–22', label: 'Break-even target' },
  { value: '5 cities', label: '3-year roadmap' },
]
