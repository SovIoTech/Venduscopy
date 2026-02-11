import { DollarSign, Download, TrendingUp, CreditCard, Calendar } from "lucide-react";

export function PayoutsPage() {
  const payouts = [
    { id: "PAY-1001", amount: "$1,247.50", status: "completed", date: "2024-02-01", method: "Bank Transfer", account: "****4532" },
    { id: "PAY-1002", amount: "$982.75", status: "completed", date: "2024-01-25", method: "Bank Transfer", account: "****4532" },
    { id: "PAY-1003", amount: "$1,124.00", status: "completed", date: "2024-01-18", method: "Bank Transfer", account: "****4532" },
    { id: "PAY-1004", amount: "$896.25", status: "pending", date: "2024-02-08", method: "Bank Transfer", account: "****4532" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">Manage your earnings and payout settings</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Statement
        </button>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 text-white">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="text-sm opacity-90 mb-2">Available Balance</div>
            <div className="text-4xl font-semibold mb-1">$2,847.50</div>
            <div className="text-sm opacity-90">Ready for payout</div>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
          <div>
            <div className="text-sm opacity-90 mb-1">This Month</div>
            <div className="text-xl font-semibold">$2,847.50</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Last Payout</div>
            <div className="text-xl font-semibold">$1,247.50</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Total Earned</div>
            <div className="text-xl font-semibold">$8,124.75</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600">+12.5%</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1">$2,847.50</div>
          <div className="text-sm text-gray-600">Monthly Revenue</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1">Feb 8, 2026</div>
          <div className="text-sm text-gray-600">Next Payout Date</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-semibold text-gray-900 mb-1">Weekly</div>
          <div className="text-sm text-gray-600">Payout Schedule</div>
        </div>
      </div>

      {/* Payout Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Payout Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Bank Account</div>
                <div className="text-sm text-gray-600">Checking ****4532</div>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors text-sm font-medium">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 mb-1">Payout Schedule</div>
              <div className="text-sm text-gray-600">Automatic weekly payouts every Friday</div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors text-sm font-medium">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Payout History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Payout ID</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Amount</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Method</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Account</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Status</th>
                <th className="text-left text-sm font-medium text-gray-600 px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-900">{payout.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{payout.amount}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payout.method}</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{payout.account}</td>
                  <td className="px-6 py-4">
                    {payout.status === "completed" ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Completed
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{payout.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
