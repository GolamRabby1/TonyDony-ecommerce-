export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-neon-blue to-emerald-green text-transparent bg-clip-text mb-4">
            Tony-Dony
          </h2>
          <p className="text-gray-400 text-sm">Experience the future of premium eCommerce today.</p>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Home</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Shop</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">About</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-neon-blue cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Shipping</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-dark-bg/50 border border-white/10 rounded-l-lg p-2 text-white text-sm w-full focus:border-neon-blue outline-none" 
            />
            <button className="bg-emerald-green text-dark-bg px-4 rounded-r-lg font-bold hover:bg-neon-blue transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-6 text-center text-gray-500 text-xs">
        © 2024 Tony-Dony. All rights reserved.
      </div>
    </footer>
  );
}