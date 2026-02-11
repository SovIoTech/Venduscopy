import { Download, Filter, Search, Package } from "lucide-react";

export function OrdersPage() {
  const orders = [
    { id: "ORD-1001", product: "Coca Cola", machine: "Office Lobby", customer: "Anonymous", price: "$2.50", status: "completed", time: "2024-02-03 10:42 AM" },
    { id: "ORD-1002", product: "Chips", machine: "Gym Entrance", customer: "Anonymous", price: "$1.50", status: "completed", time: "2024-02-03 10:38 AM" },
    { id: "ORD-1003", product: "Water Bottle", machine: "Office Lobby", customer: "Anonymous", price: "$1.00", status: "completed", time: "2024-02-03 10:35 AM" },
    { id: "ORD-1004", product: "Candy Bar", machine: "Cafeteria", customer: "Anonymous", price: "$1.75", status: "failed", time: "2024-02-03 10:30 AM" },
    { id: "ORD-1005", product: "Energy Drink", machine: "Gym Entrance", customer: "Anonymous", price: "$3.00", status: "completed", time: "2024-02-03 10:28 AM" },
    { id: "ORD-1006", product: "Protein Bar", machine: "Gym Entrance", customer: "Anonymous", price: "$2.25", status: "completed", time: "2024-02-03 10:15 AM" },
    { id: "ORD-1007", product: "Coca Cola", machine: "Office Lobby", customer: "Anonymous", price: "$2.50", status: "completed", time: "2024-02-03 10:12 AM" },
    { id: "ORD-1008", product: "Chips", machine: "Cafeteria", customer: "Anonymous", price: "$1.50", status: "completed", time: "2024-02-03 10:08 AM" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">View and track all sales and orders</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Today's Sales</div>
          <div className="text-2xl font-semibold text-gray-900">124</div>
          <div className="text-xs text-green-600 mt-1">+18% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Today's Revenue</div>
          <div className="text-2xl font-semibold text-gray-900">$287.50</div>
          <div className="text-xs text-green-600 mt-1">+12% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Avg. Order Value</div>
          <div className="text-2xl font-semibold text-gray-900">$2.32</div>
          <div className="text-xs text-gray-500 mt-1">Across all machines</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Failed Orders</div>
          <div className="text-2xl font-semibold text-red-600">3</div>
          <div className="text-xs text-gray-500 mt-1">2.4% failure rate</div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Machines</option>
            <option>Office Lobby</option>
            <option>Gym Entrance</option>
            <option>Cafeteria</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Completed</option>
            <option>Failed</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Order ID</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Product</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Machine</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Price</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Status</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-900">{order.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <Package className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-900">{order.product}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.machine}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.price}</td>
                  <td className="px-6 py-4">
                    {order.status === "completed" ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Completed
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                        Failed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing 1-8 of 1,243 orders</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Previous
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
