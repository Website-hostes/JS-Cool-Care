import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
  href="tel:8116622811"
  aria-label="Call Now"
  className="flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  style={{ width: '56px', height: '56px', backgroundColor: '#e7cfd5' }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
    alt="Call"
    className="w-6 h-6"
  />
</a>

      {/* WhatsApp Button */}
      <a
  href="https://wa.me/918116622811?text=Hello%2C%20I%20want%20to%20book%20an%20appliance%20repair%20service."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  style={{ width: '56px', height: '56px', backgroundColor: '#25D366' }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-7 h-7"
  />
        {/* Ping animation */}
        <span
          className="absolute inline-flex rounded-full opacity-75 animate-ping"
          style={{ width: '56px', height: '56px', backgroundColor: '#25D366' }}
        />
      </a>
    </div>
  );
}
