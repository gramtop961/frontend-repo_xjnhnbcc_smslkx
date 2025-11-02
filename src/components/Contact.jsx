import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-[#06470a] dark:via-black dark:to-black" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-neutral-700 dark:text-white/80">
              For custom cakes, bulk orders, or special requests, we’d love to hear from you.
            </p>

            <div className="mt-6 space-y-3">
              <a href="tel:+0000000000" className="flex items-center gap-3 text-neutral-900 hover:text-emerald-800 dark:text-white/90 dark:hover:text-white">
                <Phone size={18} /> +00 000 000 0000
              </a>
              <a href="mailto:hello@homebakes.com" className="flex items-center gap-3 text-neutral-900 hover:text-emerald-800 dark:text-white/90 dark:hover:text-white">
                <Mail size={18} /> hello@homebakes.com
              </a>
              <p className="flex items-center gap-3 text-neutral-600 dark:text-white/70">
                <MapPin size={18} /> Chennai, India
              </p>
              <p className="flex items-center gap-3 text-neutral-600 dark:text-white/70">
                <Clock size={18} /> Mon–Sat, 10am–6pm
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none focus:border-emerald-300 dark:bg-black/20 dark:border-white/10 dark:focus:border-white/30"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none focus:border-emerald-300 dark:bg-black/20 dark:border-white/10 dark:focus:border-white/30"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none focus:border-emerald-300 dark:bg-black/20 dark:border-white/10 dark:focus:border-white/30"
              />
              <textarea
                placeholder="Tell us about your order"
                rows={4}
                className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 outline-none resize-none focus:border-emerald-300 dark:bg-black/20 dark:border-white/10 dark:focus:border-white/30"
              />
              <button className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-emerald-900 transition dark:bg-white dark:text-black dark:hover:bg-emerald-100">
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
