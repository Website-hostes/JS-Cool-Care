import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Wrench, Zap, Award } from 'lucide-react';
import { services, brands } from '../data/services';

function ServiceIcon({ id }: { id: string }) {
  const icons: Record<string, string> = {
    'refrigerator': '❄️',
    'washing-machine': '🫧',
    'microwave': '📡',
    'dishwasher': '🍽️',
    'dryer': '♨️',
    'air-conditioner': '💨',
  };
  return <span className="text-3xl">{icons[id] ?? '🔧'}</span>;
}

const whyUs = [
  { icon: Clock, title: 'Same-Day Service', desc: 'Quick response within 2–4 hours of booking.' },
  { icon: Shield, title: 'Genuine Spare Parts', desc: 'We use only original or OEM-certified spare parts.' },
  { icon: Award, title: '90-Day Warranty', desc: 'All repairs backed by a 90-day service warranty.' },
  { icon: Wrench, title: 'Certified Technicians', desc: 'Our team is factory-trained and experienced.' },
  { icon: Zap, title: 'Transparent Pricing', desc: 'No hidden costs. Upfront quotes before every repair.' },
  { icon: Star, title: '10+ Years Experience', desc: 'Trusted by thousands of households across Mumbai.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0d3060 100%)' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/hero.jpg)`,
            opacity: 0.18,
          }}
          role="img"
          aria-label="Technician repairing an appliance"
        />

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: '#FF6B00', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10" style={{ background: '#FF6B00', filter: 'blur(100px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available 7 Days a Week · All Mumbai
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Expert Appliance<br />
              <span style={{ color: '#FF6B00' }}>Repair Services</span><br />
              in Mumbai
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Fast, reliable, and affordable repair for your fridge, AC, washing machine, microwave, dishwasher and dryer. Serving all Mumbai, Navi Mumbai, Thane &amp; suburbs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book Service Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:8116622811" className="btn-outline text-base px-8 py-4">
                <Phone className="w-5 h-5" /> Call: 8116622811
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              {['Same-Day Repair', '90-Day Warranty', 'Certified Technicians'].map(badge => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-5">
              {[
                { value: '10,000+', label: 'Repairs Completed' },
                { value: '10+', label: 'Years Experience' },
                { value: '4.9★', label: 'Customer Rating' },
                { value: '50+', label: 'Areas Covered' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-bglight py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-center text-sm font-semibold text-gray-700 uppercase tracking-widest mb-8">
      We Repair All Major Brands
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-lg hover:scale-105 transition"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-10 object-contain mb-2"
          />
          <span className="text-sm text-gray-800 font-semibold">
            {brand.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Repair Services</h2>
            <p className="section-subheading">
              Expert repair for all household appliances. Quick turnaround, genuine parts, and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="card group hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} in Mumbai`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/95 rounded-xl p-2 shadow-sm">
                    <ServiceIcon id={service.id} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Book Repair <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Mumbai Trusts Us</h2>
            <p className="section-subheading">
              Over a decade of reliable appliance repair — we're the first call Mumbai households make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4">
                <div className="flex-shrink-0 bg-accent/10 rounded-xl p-3 h-fit">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(80px)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Appliance Acting Up? We'll Fix It Today.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Same-day service available across Mumbai. Call or WhatsApp to schedule in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Book Service Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918116622811?text=Hello%2C%20I%20need%20appliance%20repair%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg border-2 hover:bg-white hover:text-primary transition-all duration-200"
              style={{ borderColor: '#25D366' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
