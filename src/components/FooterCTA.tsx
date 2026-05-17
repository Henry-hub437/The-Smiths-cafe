export default function FooterCTA() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 text-center">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">Ready to Dine?</h2>
        <p className="text-white/60 font-light text-lg mb-12 max-w-xl mx-auto">
          Join us for an unforgettable experience at The Smiths. Reserve your table today.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-10 py-5 bg-[#D4AF37] text-white font-medium tracking-widest uppercase text-sm hover:bg-[#B5952F] transition-colors"
        >
          Make a Reservation
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
        <p>© {new Date().getFullYear()} The Smiths. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
