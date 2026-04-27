export interface Service {
  id: string;
  name: string;
  description: string;
  shortDesc: string;
  image: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    shortDesc: 'Cooling issues, compressor faults, gas refilling, and more.',
    description:
      'From minor cooling issues to major compressor failures, our technicians diagnose and fix all refrigerator problems quickly. We service all types — single door, double door, side-by-side, and frost-free models.',
    image: '/fridge.jpg',
    icon: 'refrigerator',
    features: ['Cooling not working', 'Gas refilling / leakage fix', 'Compressor replacement', 'Thermostat repair', 'Door seal replacement', 'Ice maker repair'],
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    shortDesc: 'Not spinning, water leaks, drainage issues, PCB faults.',
    description:
      "Whether it's a top-load or front-load washing machine, we handle all problems — drum not spinning, water not draining, leaks, error codes, and PCB failures.",
    image: '/washing-machine.jpg',
    icon: 'washing-machine',
    features: ['Drum not spinning', 'Water leakage', 'Drainage issues', 'Motor replacement', 'PCB / board repair', 'Vibration & noise fix'],
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    shortDesc: 'Not heating, sparking, door issues, turntable faults.',
    description:
      'We repair all types of microwave ovens — solo, grill, and convection. Our technicians fix heating failures, door latch problems, sparking, and magnetron replacements.',
    image: '/microwave.jpg',
    icon: 'microwave',
    features: ['Not heating', 'Sparking inside', 'Door latch issues', 'Turntable not rotating', 'Magnetron replacement', 'Control panel repair'],
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    shortDesc: 'Not cleaning, water leaks, pump issues, error codes.',
    description:
      'We diagnose and fix all dishwasher issues including water inlet valve failures, pump problems, spray arm blockages, and electronic control faults.',
    image: '/dishwasher.jpg',
    icon: 'dishwasher',
    features: ['Not cleaning properly', 'Water leakage', 'Not draining', 'Spray arm issues', 'Pump replacement', 'Error code diagnosis'],
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    shortDesc: 'Not drying, overheating, drum belt, heating element faults.',
    description:
      'Our technicians service tumble dryers for all brands. We fix heating elements, drum belts, thermostats, and motor issues to get your dryer back in working order.',
    image: '/dryer.jpg',
    icon: 'dryer',
    features: ['Not drying clothes', 'Overheating issue', 'Drum belt replacement', 'Heating element repair', 'Thermostat fix', 'Noise & vibration'],
  },
  {
    id: 'air-conditioner',
    name: 'Air Conditioner Repair',
    shortDesc: 'Gas refilling, not cooling, PCB faults, service & cleaning.',
    description:
      'We service split ACs, window ACs, and cassette ACs. Our certified technicians handle gas refilling, PCB repairs, fan motor replacements, and annual maintenance contracts.',
    image: '/ac.jpg',
    icon: 'air-conditioner',
    features: ['Not cooling', 'Gas refilling', 'PCB / control board', 'Fan motor replacement', 'Deep cleaning service', 'Annual maintenance'],
  },
];

export const brands = [
  { name: 'LG', logo: '/lg.png' },
  { name: 'Samsung', logo: '/samsung.png' },
  { name: 'Haier', logo: '/haier.png' },
  { name: 'Panasonic', logo: '/panasonic.png' },
  { name: 'Bosch', logo: '/bosch.png' },
  { name: 'Siemens', logo: '/siemens.png' },
  { name: 'Hitachi', logo: '/hitachi.png' },
  { name: 'Whirlpool', logo: '/whirlpool.png' },
  { name: 'Lloyd', logo: '/lloyd.png' },
  { name: 'Liebherr', logo: '/liebherr.png' },
];

export const serviceAreas = {
  'Western Mumbai': ['Virar', 'Vasai', 'Nalasopara', 'Mira Road', 'Bhayander', 'Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Andheri', 'Bandra', 'Worli', 'Dadar'],
  'Central Mumbai': ['Kurla', 'Sion', 'Chembur', 'Ghatkopar', 'Vikhroli', 'Mulund', 'Bhandup', 'Kanjurmarg'],
  'Eastern Suburbs': ['Thane', 'Kalyan', 'Dombivli', 'Ambernath', 'Badlapur', 'Ulhasnagar', 'Bhiwandi'],
  'Navi Mumbai': ['Navi Mumbai', 'Vashi', 'Belapur', 'Kharghar', 'Panvel', 'Airoli', 'Ghansoli', 'Kopar Khairane', 'Nerul', 'Sanpada'],
  'South Mumbai': ['Fort', 'Colaba', 'Churchgate', 'Marine Lines', 'Matunga', 'Parel', 'Lower Parel', 'Wadala'],
};
