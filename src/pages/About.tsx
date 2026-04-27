import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Wrench, Award } from 'lucide-react';



const values = [
  { icon: CheckCircle, title: 'Honesty First', desc: "We always give honest assessments. If your appliance doesn't need repair, we tell you." },
  { icon: Star, title: 'Quality Work', desc: 'Every repair is done with precision, using the right tools and genuine spare parts.' },
  { icon: Users, title: 'Customer Focus', desc: 'We are available 7 days a week and respond to every customer within the hour.' },
  { icon: Award, title: 'Accountable', desc: 'Our 90-day warranty ensures we stand behind every repair we complete.' },
];

const milestones = [
  { year: '2014', event: 'Founded JS Cool Care with 2 technicians' },
  { year: '2016', event: 'Expanded to Navi Mumbai and Thane' },
  { year: '2018', event: 'Reached 2,000 satisfied customers' },
  { year: '2020', event: 'Launched WhatsApp booking for instant service' },
  { year: '2022', event: 'Team grew to 15+ certified technicians' },
  { year: '2024', event: '10,000+ repairs completed across Mumbai' },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About JS Cool Care</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Mumbai's most trusted home appliance repair service, delivering fast and reliable repairs since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary mb-5">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JS Cool Care was founded in 2014 with a simple mission: provide fast, honest, and affordable appliance repair to Mumbai households. What started as a small operation has grown into a trusted team of certified technicians covering the entire Mumbai Metropolitan Region.
                </p>
                <p>
                  We specialize in repairing refrigerators, washing machines, air conditioners, microwave ovens, dishwashers, and dryers for all leading brands — LG, Samsung, Haier, Bosch, Whirlpool, and more.
                </p>
                <p>
                  Our technicians are factory-trained, background-verified, and passionate about solving problems. We carry original and OEM-certified spare parts for same-day repairs in most cases.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { value: '10+', label: 'Years' },
                  { value: '10K+', label: 'Repairs' },
                  { value: '15+', label: 'Technicians' },
                  { value: '50+', label: 'Areas' },
                ].map(s => (
                  <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-accent">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-md order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JS Cool Care technician at work"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading">The principles that guide every repair we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-bglight rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <div className="bg-accent/10 rounded-2xl p-4 w-fit mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-bglight">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Journey</h2>
            <p className="section-subheading">A decade of growth and service to Mumbai.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight z-10 shadow-md">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-xl p-4 flex-1 shadow-sm border border-gray-100 mt-3">
                    <p className="text-gray-700 font-medium text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* Certifications */}
      <section className="py-12 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="bg-accent/10 rounded-2xl p-5 flex-shrink-0">
              <Wrench className="w-10 h-10 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary mb-2">Certified & Insured</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                All our technicians are factory-certified, background-verified, and covered by liability insurance. Your home and appliances are in safe hands.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
