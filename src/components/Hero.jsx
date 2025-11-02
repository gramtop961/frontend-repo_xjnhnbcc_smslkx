import Spline from "@splinetool/react-spline";

const Hero = ({ theme = "dark" }) => {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QblYNXAoH6zf7SHu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light overlay to harmonize text readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#f5f0e6]/80 dark:bg-black/70"
        aria-hidden
      />

      {/* Soft accent glow (must not block interactions) */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(207,232,214,0.8), rgba(0,0,0,0))",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900 dark:text-white">
        <span className="inline-block px-3 py-1 rounded-full border border-black/10 bg-white/70 text-xs tracking-widest uppercase mb-6 text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-white/80">
          Handcrafted • Small-batch • Made with love
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          Baked fresh, for
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 dark:from-white dark:via-emerald-100 dark:to-white">
            every sweet moment
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-slate-700/80 dark:text-white/80">
          Welcome to vaishnavi's homebakes — where classic recipes meet a modern, minimalist aesthetic.
          Thoughtfully crafted treats using premium ingredients, always fresh, always delightful.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1b6f2a] text-white hover:brightness-110 transition font-medium dark:bg-white dark:text-black dark:hover:bg-emerald-100"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white/70 text-slate-900 hover:bg-white transition dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            Custom Orders
          </a>
        </div>

        {/* showcase card */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Signature Cakes",
              desc: "Elegant layers, balanced flavors, artful finishes.",
            },
            { title: "Artisan Cookies", desc: "Crisp edges, soft centers, premium add-ins." },
            { title: "Seasonal Specials", desc: "Limited-time creations inspired by the season." },
          ].map((card) => (
            <div
              key={card.title}
              className="relative p-6 rounded-2xl border border-black/10 bg-white/70 backdrop-blur hover:bg-white transition group dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 dark:hover:from-white/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#cfe8d6]/40 to-transparent opacity-0 group-hover:opacity-100 transition dark:from-[#06470a]/20" aria-hidden />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-slate-700/80 dark:text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
