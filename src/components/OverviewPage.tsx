import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react";

export function OverviewPage() {
  const stats = [
    {
      name: "Total Revenue",
      value: "$2,847.50",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      name: "Total Sales",
      value: "1,243",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      name: "Active Machines",
      value: "3",
      change: "0%",
      trend: "neutral",
      icon: Package,
    },
    {
      name: "Customers",
      value: "487",
      change: "+15.3%",
      trend: "up",
      icon: Users,
    },
  ];

  const recentSales = [
    { id: 1, product: "Coca Cola", machine: "Office Lobby", price: "$2.50", time: "2 min ago" },
    { id: 2, product: "Chips", machine: "Gym Entrance", price: "$1.50", time: "5 min ago" },
    { id: 3, product: "Water Bottle", machine: "Office Lobby", price: "$1.00", time: "8 min ago" },
    { id: 4, product: "Candy Bar", machine: "Cafeteria", price: "$1.75", time: "12 min ago" },
    { id: 5, product: "Energy Drink", machine: "Gym Entrance", price: "$3.00", time: "15 min ago" },
  ];

  const topProducts = [
    { name: "Coca Cola", sales: 312, revenue: "$780.00" },
    { name: "Water Bottle", sales: 298, revenue: "$298.00" },
    { name: "Chips", sales: 245, revenue: "$367.50" },
    { name: "Energy Drink", sales: 189, revenue: "$567.00" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                {stat.trend === "up" && (
                  <span className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </span>
                )}
                {stat.trend === "down" && (
                  <span className="flex items-center gap-1 text-sm text-red-600">
                    <TrendingDown className="w-4 h-4" />
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 85, 45, 92, 78, 88, 95].map((height, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-t hover:bg-indigo-200 transition-colors cursor-pointer" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-6">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{product.name}</span>
                  <span className="text-sm font-medium text-gray-900">{product.revenue}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${100 - index * 20}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{product.sales} sales</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Recent Sales</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Product</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Machine</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Price</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale) => (
                <tr key={sale.id} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 text-sm text-gray-900">{sale.product}</td>
                  <td className="py-4 text-sm text-gray-600">{sale.machine}</td>
                  <td className="py-4 text-sm font-medium text-gray-900">{sale.price}</td>
                  <td className="py-4 text-sm text-gray-500">{sale.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
