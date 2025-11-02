const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-emerald-50 dark:from-black dark:via-black dark:to-[#06470a]" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Our Story</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed dark:text-white/80">
              vaishnavi's homebakes began with a simple joy: warm ovens and
              heartfelt recipes passed down and refined with a modern touch. We
              believe in clean flavors, beautiful finishes, and a calm, minimal
              aesthetic that lets quality shine.
            </p>
            <p className="mt-4 text-neutral-600 dark:text-white/70">
              Every batch is small-batch. Ingredients are chosen with care.
              Packaging is thoughtful and planet-friendly. Taste comes first —
              always.
            </p>
          </div>
          <div>
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-50 opacity-90 dark:from-[#06470a] dark:to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-neutral-600 dark:text-white/70">Since</p>
                  <p className="text-5xl font-semibold">2024</p>
                  <p className="mt-2 text-neutral-600 dark:text-white/70">Crafted in small batches</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Fresh", "Premium", "Handmade"].map((t) => (
                <div key={t} className="rounded-xl border border-black/10 bg-black/[0.03] py-3 dark:border-white/10 dark:bg-white/5">
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
