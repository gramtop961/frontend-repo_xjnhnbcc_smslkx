import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06470a] via-black to-black" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-white/80">
              For custom cakes, bulk orders, or special requests, we’d love to hear from you.
            </p>

            <div className="mt-6 space-y-3">
              <a href="tel:+0000000000" className="flex items-center gap-3 text-white/90 hover:text-white">
                <Phone size={18} /> +00 000 000 0000
              </a>
              <a href="mailto:hello@homebakes.com" className="flex items-center gap-3 text-white/90 hover:text-white">
                <Mail size={18} /> hello@homebakes.com
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <MapPin size={18} /> Chennai, India
              </p>
              <p className="flex items-center gap-3 text-white/70">
                <Clock size={18} /> Mon–Sat, 10am–6pm
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
              />
              <textarea
                placeholder="Tell us about your order"
                rows={4}
                className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none resize-none focus:border-white/30"
              />
              <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-emerald-100 transition">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
