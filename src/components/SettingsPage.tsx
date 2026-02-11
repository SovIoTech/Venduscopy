import { User, Bell, Lock, CreditCard, Mail, Shield } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Profile Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Profile Settings</h3>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Security</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                <div className="text-sm text-gray-600">Add an extra layer of security</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
              Enable
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 mb-1">Password</div>
              <div className="text-sm text-gray-600">Last changed 3 months ago</div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors text-sm font-medium">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Notifications</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-900">Sales Notifications</div>
              <div className="text-sm text-gray-600">Get notified when a sale is made</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-900">Machine Status Alerts</div>
              <div className="text-sm text-gray-600">Alerts when a machine goes offline</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="font-medium text-gray-900">Weekly Reports</div>
              <div className="text-sm text-gray-600">Receive weekly performance summaries</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="font-medium text-gray-900">Marketing Emails</div>
              <div className="text-sm text-gray-600">Tips, updates, and promotions</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Payment Method</h3>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Bank Account</div>
              <div className="text-sm text-gray-600">Checking ****4532</div>
            </div>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors text-sm font-medium">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
