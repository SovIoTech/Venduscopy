import { Link } from "react-router";
import { ArrowLeft, Search, MapPin, Package, Upload, Plus, X } from "lucide-react";
import { useState } from "react";

export function AdminMachinePage() {
  const [serialNumber, setSerialNumber] = useState("");
  const [machineInfo, setMachineInfo] = useState<any>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: null as string | null });

  // Mock available products
  const availableProducts = [
    { id: "1", name: "Coca Cola", price: "$2.50" },
    { id: "2", name: "Pepsi", price: "$2.50" },
    { id: "3", name: "Water Bottle", price: "$1.00" },
    { id: "4", name: "Chips", price: "$1.50" },
    { id: "5", name: "Candy Bar", price: "$1.75" },
    { id: "6", name: "Energy Drink", price: "$3.00" },
  ];

  const handleSearchMachine = () => {
    // Mock API call - simulate retrieving machine info
    if (serialNumber) {
      setMachineInfo({
        serialNumber: serialNumber,
        name: "Office Lobby Machine",
        location: "123 Main St, Building A, Floor 2",
        status: "online",
        lastSync: "2 min ago",
        currentProducts: 3,
        maxSlots: 5
      });
    }
  };

  const toggleProductSelection = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewProduct({ ...newProduct, image: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setNewProduct({ ...newProduct, image: null });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4 flex items-center gap-4">
          <Link to="/dashboard/machines" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Admin Machine Setup</h1>
            <p className="text-sm text-gray-600">Configure machine and manage products</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-5xl mx-auto space-y-6">
        {/* Machine Lookup */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Find Machine</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter the machine serial number to retrieve machine information and configure products.
          </p>
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                placeholder="Enter serial number (e.g., ABCD-1234-EFGH-5678)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono"
              />
            </div>
            <button 
              onClick={handleSearchMachine}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>

        {/* Machine Info (shown after search) */}
        {machineInfo && (
          <>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900 mb-1">{machineInfo.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    {machineInfo.location}
                  </div>
                  <div className="text-sm text-gray-500 font-mono">{machineInfo.serialNumber}</div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {machineInfo.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Products</div>
                  <div className="text-lg font-semibold text-gray-900">{machineInfo.currentProducts} / {machineInfo.maxSlots}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div className="text-lg font-semibold text-gray-900 capitalize">{machineInfo.status}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Last Sync</div>
                  <div className="text-lg font-semibold text-gray-900">{machineInfo.lastSync}</div>
                </div>
              </div>
            </div>

            {/* Select Advertised Products */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Select Advertised Products</h2>
              <p className="text-sm text-gray-600 mb-4">
                Choose which products to advertise on this machine from the available product catalog.
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                {availableProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => toggleProductSelection(product.id)}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      selectedProducts.includes(product.id)
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-400" />
                      </div>
                      {selectedProducts.includes(product.id) && (
                        <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="font-medium text-gray-900 text-sm mb-1">{product.name}</div>
                    <div className="text-sm text-gray-600">{product.price}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {selectedProducts.length} products selected
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  Apply Selection
                </button>
              </div>
            </div>

            {/* Add New Product */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Add New Product</h2>
              <p className="text-sm text-gray-600 mb-4">
                Create a new product to add to the catalog and assign to this machine.
              </p>

              <div className="flex items-start gap-4">
                {/* Image Upload */}
                <div className="flex-shrink-0">
                  {newProduct.image ? (
                    <div className="relative w-32 h-32">
                      <img 
                        src={newProduct.image} 
                        alt="Product"
                        className="w-full h-full object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Upload Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Product Form */}
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      placeholder="e.g., Premium Coffee"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Price ($)</label>
                    <input
                      type="text"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium">
                    <Plus className="w-4 h-4" />
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}