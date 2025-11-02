const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50 dark:from-black dark:to-[#0b0b0b]" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-neutral-700 dark:text-white/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} vaishnavi's homebakes. All rights reserved.</p>
          <p className="text-sm">Made fresh in small batches • Monotone aesthetic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
