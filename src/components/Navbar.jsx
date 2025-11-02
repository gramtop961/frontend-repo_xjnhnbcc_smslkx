import { ShoppingBag, Phone, Instagram, Sun, Moon } from "lucide-react";

const Navbar = ({ theme = "dark", onToggleTheme }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f0e6]/70 backdrop-blur supports-[backdrop-filter]:bg-[#f5f0e6]/60 dark:border-white/10 dark:bg-black/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-slate-900 dark:text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full ring-2 ring-black/10 bg-[#cfe8d6] dark:ring-white/20 dark:bg-gradient-to-br dark:from-[#06470a] dark:to-black" />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            vaishnavi's homebakes
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#menu" className="hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">Menu</a>
          {/* <a href="#about" className="hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">Contact</a> */}
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-black/10 bg-white/80 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="tel:+0000000000"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 hover:bg-[#f2f2f2] text-slate-900 transition dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/20 dark:text-white"
          >
            <Phone size={18} />
            <span className="text-sm">Call</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border border-black/10 hover:bg-[#f2f2f2] text-slate-900 transition dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/20 dark:text-white"
          >
            <Instagram size={18} />
          </a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b6f2a] text-white border border-black/10 shadow/30 shadow-black hover:shadow-lg hover:shadow-black/20 transition dark:bg-gradient-to-r dark:from-[#06470a] dark:to-black dark:border-white/10">
            <ShoppingBag size={18} />
            <span className="text-sm">Order</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
