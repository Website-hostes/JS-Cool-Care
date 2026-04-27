import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Wrench, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Our Services' },
    { to: '/service-areas', label: 'Service Areas' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Book Service' },
  ];

  const services = [
    'Refrigerator Repair', 'Washing Machine Repair',
    'AC Repair & Service', 'Microwave Oven Repair',
    'Dishwasher Repair', 'Dryer Repair',
  ];

  const areas = [
    'Virar', 'Borivali', 'Andheri', 'Bandra',
    'Thane', 'Kalyan', 'Dombivli', 'Navi Mumbai',
  ];

  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="group">
  <img
    src="/banner.jpeg"
    alt="js Mumbai"
    className="h-12 md:h-16 w-[140px] md:w-[180px] object-cover rounded-lg shadow-md group-hover:shadow-accent/40 transition-all duration-300"
  />
</Link>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Trusted appliance repair experts serving all of Mumbai, Navi Mumbai, Thane, and suburbs for over 10 years.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:8116622811" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                8116622811
              </a>
              <a href="tel:8188822811" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                8188822811
              </a>
              <a
  href="https://wa.me/918116622811"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-accent transition-colors"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-4 h-4 flex-shrink-0"
  />
  WhatsApp Us
</a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Mumbai & Suburbs
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                Mon–Sun: 8 AM – 8 PM
              </div>
              <a href="mailto:support@fixitmumbai.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                support@fixitmumbai.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-accent transition-colors hover:pl-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-accent transition-colors hover:pl-1 inline-block transition-all duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {areas.map(area => (
                <Link
                  key={area}
                  to="/service-areas"
                  className="text-xs bg-white/10 hover:bg-accent hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  {area}
                </Link>
              ))}
            </div>
            <p className="text-xs mt-4 leading-relaxed">
              Covering all Mumbai, Navi Mumbai, Thane district and nearby areas.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {year} JS Cool Care. All rights reserved.</p>
          <p>Professional Appliance Repair Services in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
