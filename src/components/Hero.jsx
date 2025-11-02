const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06470a] via-black to-black" aria-hidden />
      {/* soft radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(6,71,10,0.7), rgba(0,0,0,0.1) 60%, rgba(0,0,0,0))",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/10 text-xs tracking-widest uppercase mb-6">
          Handcrafted • Small-batch • Made with love
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          Baked fresh, for
          <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            every sweet moment
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-white/80">
          Welcome to vaishnavi's homebakes — where classic recipes meet a modern, minimalist aesthetic.
          Thoughtfully crafted treats using premium ingredients, always fresh, always delightful.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black hover:bg-emerald-100 transition font-medium"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition"
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
          ].map((card, i) => (
            <div
              key={card.title}
              className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 transition group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#06470a]/20 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
