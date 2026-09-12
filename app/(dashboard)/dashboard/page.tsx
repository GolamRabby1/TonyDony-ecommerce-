export default function UserDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-display font-bold text-white mb-10">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Active Orders</h3>
          <p className="text-3xl font-bold text-neon-blue">2</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Wishlist Items</h3>
          <p className="text-3xl font-bold text-emerald-green">5</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Total Spent</h3>
          <p className="text-3xl font-bold text-accent-red">$1,249</p>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Recent Orders</h2>
        <div className="text-gray-400">No recent orders found. Start shopping!</div>
      </div>
    </div>
  );
}