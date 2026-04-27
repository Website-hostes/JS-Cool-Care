import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Clock, MapPin, CheckCircle, Send } from 'lucide-react';
import { services } from '../data/services';

interface FormData {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  service: '',
  location: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit phone number';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.location.trim()) errs.location = 'Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = encodeURIComponent(
      `Hello, I want to book a service.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nLocation: ${form.location}${form.message ? `\nMessage: ${form.message}` : ''}`
    );
    window.open(`https://wa.me/918116622811?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-xl px-4 py-3 text-sm text-textdark focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50'
        : 'border-gray-200 focus:ring-accent/30 focus:border-accent bg-white'
    }`;

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 opacity-10 rounded-full" style={{ background: '#FF6B00', filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Book a Repair</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Fill in the form and we'll send your booking details directly to WhatsApp for instant confirmation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bglight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">Get in Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We're available 7 days a week, 8 AM – 8 PM. Reach us via call or WhatsApp for fastest response.
                </p>
              </div>

              {/* Contact Cards */}
              <a
                href="tel:8116622811"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="bg-accent/10 rounded-xl p-3 group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call Us</p>
                  <p className="font-bold text-primary">8116622811</p>
                </div>
              </a>

              <a
                href="tel:8188822811"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="bg-accent/10 rounded-xl p-3 group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Alternate Number</p>
                  <p className="font-bold text-primary">8188822811</p>
                </div>
              </a>

              <a
  href="https://wa.me/918116622811"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
>
  <div className="bg-whatsapp/10 rounded-xl p-3 group-hover:bg-whatsapp transition-colors">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-5 h-5  group-hover:invert transition"
    />
  </div>

  <div>
    <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
    <p className="font-bold text-primary">Chat with Us</p>
  </div>
</a>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Working Hours</p>
                  <p className="font-bold text-primary">Mon – Sun: 8 AM – 8 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="bg-primary/10 rounded-xl p-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Service Coverage</p>
                  <p className="font-bold text-primary">All Mumbai & Suburbs</p>
                </div>
              </div>

              {/* How it works */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-4">How Booking Works</h3>
                <div className="space-y-3">
                  {[
                    'Fill in the form with your details',
                    'You\'ll be redirected to WhatsApp',
                    'We confirm your appointment instantly',
                    'Technician arrives at your doorstep',
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-300 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 lg:p-9">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 rounded-xl p-2.5">
                    <Send className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary">Book a Service</h2>
                    <p className="text-xs text-gray-500">Redirects to WhatsApp for instant confirmation</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-textdark mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-textdark mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textdark mb-1.5">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass('service')}
                    >
                      <option value="">Select appliance to repair</option>
                      {services.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textdark mb-1.5">
                      Your Location / Area <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Borivali West, Thane, Navi Mumbai"
                      className={inputClass('location')}
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-textdark mb-1.5">
                      Additional Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe the problem, preferred time slot, etc."
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <div className="flex items-start gap-2.5 bg-green-50 border border-green-200 rounded-xl p-4">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-green-700 leading-relaxed">
                      Clicking "Send on WhatsApp" will open WhatsApp with your booking details pre-filled. Our team will confirm your appointment within minutes.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
