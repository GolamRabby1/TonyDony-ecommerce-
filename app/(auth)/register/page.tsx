'use client';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="glass rounded-2xl p-10 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-display font-bold text-center text-white mb-8">Join the Future</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
            <input type="text" placeholder="Tony Stark" className="w-full bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:border-neon-blue outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input type="email" placeholder="user@tonydony.com" className="w-full bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:border-neon-blue outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-dark-bg/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:border-neon-blue outline-none transition-colors" />
          </div>
          <button type="button" className="w-full py-3 bg-accent-red text-white font-bold rounded-full hover:bg-emerald-green transition-colors">
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}