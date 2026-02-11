import { Link } from "react-router";
import { Store, ArrowRight, MapPin } from "lucide-react";

export function CreateStorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Create Your Mini-Store</h1>
          <p className="text-gray-600">Set up your store profile and details</p>
        </div>

        {/* Store Setup Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-400">Register Machine</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="text-sm font-medium text-gray-900">Create Store</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="text-sm text-gray-400">Add Products</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Store Name</label>
              <input
                type="text"
                placeholder="e.g., Tech Office Snacks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g., 123 Main St, Office Building Lobby"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Store Description</label>
              <textarea
                rows={4}
                placeholder="Brief description of what you're selling and who it's for..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Business Hours</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Opening Time</label>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Closing Time</label>
                  <input
                    type="time"
                    defaultValue="18:00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
              <label className="text-sm text-blue-900">
                Enable 24/7 access (machine operates around the clock)
              </label>
            </div>

            <Link to="/add-products">
              <button type="button" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Continue to Products
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
