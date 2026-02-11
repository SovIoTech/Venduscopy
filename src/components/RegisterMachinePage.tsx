import { Link } from "react-router";
import { Store, ArrowRight } from "lucide-react";

export function RegisterMachinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Register Your Vendôme Machine</h1>
          <p className="text-gray-600">Enter the unique machine code found on your device</p>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <span className="text-sm font-medium text-gray-900">Register Machine</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="text-sm text-gray-400">Create Store</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="text-sm text-gray-400">Add Products</span>
            </div>
          </div>

          {/* Form */}
          <div className="mb-8">
            <label className="block text-sm text-gray-700 mb-2">Machine Code</label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-center text-lg font-mono tracking-wider"
            />
            <p className="text-sm text-gray-500 mt-2">The machine code is located on the bottom of your Vendôme machine</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Machine Nickname (optional)</label>
            <input
              type="text"
              placeholder="e.g., Office Lobby, Gym Entrance"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Help Card */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              <strong>Need help?</strong> The machine code is a 16-character code printed on a label on the bottom of your Vendôme device.
            </p>
          </div>

          <Link to="/machine-connection">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              Connect Machine
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
