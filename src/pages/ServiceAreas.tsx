import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { serviceAreas } from '../data/services';

const areaHighlights = [
  {
    name: 'Virar & Vasai',
    desc: 'Full coverage across Virar East, Virar West, Vasai Road and Nalasopara.',
    tag: 'Far Western Suburb',
  },
  {
    name: 'Borivali & Kandivali',
    desc: 'Same-day service in Borivali East & West, Kandivali, IC Colony and nearby.',
    tag: 'Western Suburb',
  },
  {
    name: 'Thane City',
    desc: 'All Thane areas including Ghodbunder Road, Majiwada, Vartak Nagar, Wagle Estate.',
    tag: 'Thane District',
  },
  {
    name: 'Kalyan & Dombivli',
    desc: 'Serving Kalyan East & West, Dombivli, Ambernath, and Ulhasnagar.',
    tag: 'Central Suburbs',
  },
  {
    name: 'Navi Mumbai',
    desc: 'Complete coverage of Vashi, Belapur, Kharghar, Panvel, Airoli, Nerul, Sanpada.',
    tag: 'Navi Mumbai',
  },
  {
    name: 'Andheri & Bandra',
    desc: 'Serving Andheri East & West, Bandra, Juhu, Versova and surrounding areas.',
    tag: 'Western Suburb',
  },
];

export default function ServiceAreas() {
  const allAreasList = Object.values(serviceAreas).flat();

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Coverage Map</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Service Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We provide fast appliance repair across all of Mumbai, Navi Mumbai, Thane, and suburban districts. If you're in the Mumbai Metropolitan Region, we're there.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['All Mumbai', 'Navi Mumbai', 'Thane District', 'Western Suburbs', 'Central Suburbs', '50+ Areas'].map(tag => (
              <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="py-16 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Key Service Locations</h2>
            <p className="section-subheading">Dedicated technicians stationed across major hubs for fast response times.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaHighlights.map(area => (
              <div key={area.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-accent/10 rounded-xl p-2.5 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">{area.tag}</span>
                    <h3 className="font-bold text-primary mt-1 text-lg">{area.name}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all">
                  Book Repair Here <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Area List by Zone */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Complete Area Coverage</h2>
            <p className="section-subheading">
              Appliance repair available across all these Mumbai Metropolitan locations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(serviceAreas).map(([zone, areas]) => (
              <div key={zone} className="bg-bglight rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-primary text-sm mb-4 pb-2.5 border-b border-gray-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  {zone}
                </h3>
                <ul className="space-y-2">
                  {areas.map(area => (
                    <li key={area} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All Areas Tag Cloud */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-primary mb-5 text-center">All Covered Localities</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {allAreasList.map(area => (
                <Link
                  key={area}
                  to="/contact"
                  className="text-sm bg-bglight border border-gray-200 hover:bg-primary hover:text-white hover:border-primary px-4 py-2 rounded-full transition-all duration-200 text-gray-700 font-medium"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not in list section */}
      <section className="py-14 bg-bglight">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-3">Don't See Your Area?</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              We're constantly expanding. If your locality isn't listed, call us or WhatsApp — we may still be able to reach you. We cover many unlisted areas around Mumbai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8116622811" className="btn-primary">
                <Phone className="w-4 h-4" /> Call: 8116622811
              </a>
              <a
                href="https://wa.me/918116622811?text=Hello%2C%20I%20want%20to%20check%20if%20you%20service%20my%20area."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-5">Appliance Repair Across Mumbai Metropolitan Region</h2>
          <div className="prose prose-sm text-gray-600 space-y-3 leading-relaxed">
            <p>
              JS Cool CareItMumbai provides professional appliance repair services across the entire Mumbai Metropolitan Region. Whether you're in the western suburbs like <strong>Virar, Vasai, Borivali, Kandivali, Malad, Goregaon, Andheri, and Bandra</strong>, or the central and eastern suburbs like <strong>Thane, Kalyan, Dombivli, Mulund, Bhandup, and Ghatkopar</strong>, our certified technicians are nearby.
            </p>
            <p>
              We offer same-day AC repair, refrigerator repair, washing machine repair, microwave oven repair, dishwasher repair, and dryer repair services. Our technicians carry original spare parts and OEM-certified components for fast, lasting repairs.
            </p>
            <p>
              For residents of <strong>Navi Mumbai</strong> — including Vashi, Belapur, Kharghar, Nerul, Panvel, and Airoli — we maintain dedicated technicians for quick response. South Mumbai localities including <strong>Fort, Colaba, Dadar, Parel, Worli, and Churchgate</strong> are also fully covered.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
