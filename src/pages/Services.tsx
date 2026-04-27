import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { brands, services } from '../data/services';

export default function Services() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Fix</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Repair Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Professional repair and servicing for all major household appliances. All brands, all models, across all Mumbai areas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 h-56 lg:h-auto relative overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={`${service.name} in Mumbai`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 lg:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-primary mb-3">{service.name}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                      {service.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact" className="btn-primary">
                        Book This Repair <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="tel:8116622811" className="inline-flex items-center gap-2 text-primary border-2 border-primary hover:bg-primary hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200">
                        <Phone className="w-4 h-4" /> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Banner */}
      <section className="py-14 bg-white border-t border-gray-100">
  <div className="h-14 md:h-16 object-contain transition-transform duration-300 hover:scale-110">
    <h2 className="text-2xl font-bold text-primary mb-2">
      Brands We Service
    </h2>

    <p className="text-gray-500 mb-8">
      We are trained to repair appliances from all leading brands
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="bg-bglight border border-gray-200 hover:border-accent px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-center"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-12 md:h-14 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-primary py-14 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(80px)' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Book a Repair?</h2>
          <p className="text-gray-300 mb-7">Same-day service available. Speak to our team now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Book Service <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:8116622811" className="btn-outline text-base px-8 py-4">
              <Phone className="w-5 h-5" /> 8116622811
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
