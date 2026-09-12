export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-display font-bold text-accent-red mb-10">Admin Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="glass rounded-2xl p-6 border-l-4 border-neon-blue">
          <h3 className="text-gray-400 text-sm mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-white">$54,230</p>
        </div>
        <div className="glass rounded-2xl p-6 border-l-4 border-emerald-green">
          <h3 className="text-gray-400 text-sm mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-white">1,245</p>
        </div>
        <div className="glass rounded-2xl p-6 border-l-4 border-accent-red">
          <h3 className="text-gray-400 text-sm mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-white">890</p>
        </div>
        <div className="glass rounded-2xl p-6 border-l-4 border-white">
          <h3 className="text-gray-400 text-sm mb-2">Products</h3>
          <p className="text-3xl font-bold text-white">45</p>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-gray-300">New order #1002</span>
            <span className="text-emerald-green font-bold">$499.99</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-gray-300">User registration: cyborg@email.com</span>
            <span className="text-neon-blue text-sm">2 mins ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}