import { Star } from "lucide-react";

const items = [
  { name: "Classic Vanilla Cake", desc: "Silky vanilla sponge with whipped cream.", price: "₹799" },
  { name: "Decadent Chocolate", desc: "Rich cocoa layers, dark ganache finish.", price: "₹899" },
  { name: "Red Velvet", desc: "Tender crumb, cream cheese frosting.", price: "₹949" },
  { name: "Assorted Cookies Box", desc: "Buttery, crisp, and perfectly chewy.", price: "₹499" },
  { name: "Tea-time Banana Bread", desc: "Moist loaf with toasted walnuts.", price: "₹349" },
  { name: "Seasonal Fruit Tart", desc: "Vanilla custard with fresh fruits.", price: "₹699" },
];

const Menu = () => {
  return (
    <section id="menu" className="relative py-20">
      <div className="absolute inset-0 bg-[#f5f0e6] dark:bg-gradient-to-b dark:from-black dark:via-[#06470a] dark:to-black opacity-90" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Our Favourites</h2>
          <p className="mt-3 text-slate-700/80 dark:text-white/70">
            A thoughtful curation of small-batch treats made fresh for your moments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.name}
              className="relative rounded-2xl border border-black/10 bg-white p-6 overflow-hidden shadow-sm hover:shadow-md transition dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-30"
                style={{ background: "radial-gradient(closest-side, rgba(207,232,214,0.6), rgba(0,0,0,0))", filter: "blur(20px)" }}
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">{it.name}</h3>
                  <p className="mt-2 text-slate-700/80 text-sm dark:text-white/70">{it.desc}</p>
                </div>
                <span className="ml-4 inline-flex items-center gap-1 text-emerald-900/80 text-sm dark:text-emerald-200/90">
                  <Star size={16} className="fill-current" />
                  Best
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-slate-900 font-medium dark:text-white/90">{it.price}</span>
                <button className="px-3 py-1.5 rounded-full bg-[#1b6f2a] text-white hover:brightness-110 transition text-sm dark:bg-white dark:text-black dark:hover:bg-emerald-100">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
