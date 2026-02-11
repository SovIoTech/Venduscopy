import { Plus, Wifi, WifiOff, AlertCircle, Package, MapPin, MoreVertical, QrCode, Eye } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { QRCodeModal } from "./QRCodeModal";
import { CustomerStorefrontModal } from "./CustomerStorefrontModal";

export function MachineManagementPage() {
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [storefrontModalOpen, setStorefrontModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<any>(null);

  const machines = [
    {
      id: 1,
      name: "Office Lobby",
      code: "ABCD-1234-EFGH-5678",
      location: "123 Main St, Building A",
      status: "online",
      products: 6,
      sales: 412,
      revenue: "$1,024.50",
      lastSync: "2 min ago",
      productsList: [
        { id: 1, name: "Coca Cola", price: "2.50", compartment: "A1", inStock: true },
        { id: 2, name: "Pepsi", price: "2.50", compartment: "A2", inStock: true },
        { id: 3, name: "Water", price: "1.50", compartment: "A3", inStock: true },
        { id: 4, name: "Chips", price: "1.75", compartment: "B1", inStock: true },
        { id: 5, name: "Candy Bar", price: "2.00", compartment: "B2", inStock: true },
        { id: 6, name: "Gum", price: "1.25", compartment: "B3", inStock: false },
      ],
    },
    {
      id: 2,
      name: "Gym Entrance",
      code: "IJKL-5678-MNOP-9012",
      location: "456 Fitness Ave",
      status: "online",
      products: 5,
      sales: 389,
      revenue: "$982.75",
      lastSync: "5 min ago",
      productsList: [
        { id: 1, name: "Protein Bar", price: "3.50", compartment: "A1", inStock: true },
        { id: 2, name: "Sports Drink", price: "2.75", compartment: "A2", inStock: true },
        { id: 3, name: "Energy Drink", price: "3.00", compartment: "A3", inStock: true },
        { id: 4, name: "Electrolyte Water", price: "2.50", compartment: "B1", inStock: true },
        { id: 5, name: "Protein Shake", price: "4.50", compartment: "B2", inStock: true },
      ],
    },
    {
      id: 3,
      name: "Cafeteria",
      code: "QRST-3456-UVWX-7890",
      location: "789 Corporate Dr",
      status: "offline",
      products: 6,
      sales: 442,
      revenue: "$840.25",
      lastSync: "2 hours ago",
      productsList: [
        { id: 1, name: "Coffee", price: "2.00", compartment: "A1", inStock: true },
        { id: 2, name: "Tea", price: "1.75", compartment: "A2", inStock: true },
        { id: 3, name: "Sandwich", price: "5.50", compartment: "A3", inStock: true },
        { id: 4, name: "Salad", price: "6.00", compartment: "B1", inStock: true },
        { id: 5, name: "Cookie", price: "1.50", compartment: "B2", inStock: true },
        { id: 6, name: "Muffin", price: "2.25", compartment: "B3", inStock: true },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">Manage and monitor all your Vendôme machines</p>
        </div>
        <div className="flex gap-3">
          <Link to="/dashboard/machines/admin">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              Admin Setup
            </button>
          </Link>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Machine
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Machines</div>
          <div className="text-2xl font-semibold text-gray-900">3</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Online</div>
          <div className="text-2xl font-semibold text-green-600">2</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Offline</div>
          <div className="text-2xl font-semibold text-red-600">1</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Products</div>
          <div className="text-2xl font-semibold text-gray-900">17</div>
        </div>
      </div>

      {/* Machines List */}
      <div className="grid grid-cols-1 gap-4">
        {machines.map((machine) => (
          <div key={machine.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-gray-900">{machine.name}</h3>
                    {machine.status === "online" ? (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        <Wifi className="w-3 h-3" />
                        Online
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                        <WifiOff className="w-3 h-3" />
                        Offline
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {machine.location}
                  </div>
                  <div className="text-sm text-gray-500 font-mono mt-1">{machine.code}</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {machine.status === "offline" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-lg mb-4">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-900">Machine is offline. Check network connection.</span>
              </div>
            )}

            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Products</div>
                <div className="text-lg font-semibold text-gray-900">{machine.products}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Sales</div>
                <div className="text-lg font-semibold text-gray-900">{machine.sales}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Revenue</div>
                <div className="text-lg font-semibold text-gray-900">{machine.revenue}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Last Sync</div>
                <div className="text-lg font-semibold text-gray-900">{machine.lastSync}</div>
              </div>
            </div>

            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
              <button 
                onClick={() => {
                  setSelectedMachine(machine);
                  setStorefrontModalOpen(true);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Customer View
              </button>
              <button 
                onClick={() => {
                  setSelectedMachine(machine);
                  setQrModalOpen(true);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                View QR
              </button>
              <Link to={`/dashboard/machines/${machine.id}/products`}>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  Manage Products
                </button>
              </Link>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code Modal */}
      {selectedMachine && (
        <QRCodeModal
          isOpen={qrModalOpen}
          onClose={() => setQrModalOpen(false)}
          machineCode={selectedMachine.code}
          machineName={selectedMachine.name}
        />
      )}

      {/* Customer Storefront Modal */}
      {selectedMachine && (
        <CustomerStorefrontModal
          isOpen={storefrontModalOpen}
          onClose={() => setStorefrontModalOpen(false)}
          machineName={selectedMachine.name}
          products={selectedMachine.productsList}
        />
      )}
    </div>
  );
}