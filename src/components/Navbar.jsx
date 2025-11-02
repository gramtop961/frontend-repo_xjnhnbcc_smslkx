import { ShoppingBag, Phone, Instagram } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/10 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#06470a] to-black ring-2 ring-white/20" />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            vaishnavi's homebakes
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#menu" className="hover:text-emerald-200 transition-colors">Menu</a>
          <a href="#about" className="hover:text-emerald-200 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-200 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+0000000000"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition"
          >
            <Phone size={18} />
            <span className="text-sm">Call</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition"
          >
            <Instagram size={18} />
          </a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#06470a] to-black border border-white/10 shadow/30 shadow-black hover:shadow-lg hover:shadow-black/40 transition">
            <ShoppingBag size={18} />
            <span className="text-sm">Order</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
