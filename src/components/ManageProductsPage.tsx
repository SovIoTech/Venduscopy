import { Link, useParams } from "react-router";
import { ArrowLeft, Upload, X, Package } from "lucide-react";
import { useState } from "react";
import { SalesBoostWidget } from "./SalesBoostWidget";

export function ManageProductsPage() {
  const { machineId } = useParams();
  
  // Mock machine data
  const machine = {
    id: machineId,
    name: "Office Lobby",
    code: "ABCD-1234-EFGH-5678",
    location: "123 Main St, Building A"
  };

  const [slots, setSlots] = useState([
    { id: 1, product: "Coca Cola", price: "2.50", image: null, hasProduct: true },
    { id: 2, product: "Chips", price: "1.50", image: null, hasProduct: true },
    { id: 3, product: "", price: "", image: null, hasProduct: false },
    { id: 4, product: "", price: "", image: null, hasProduct: false },
    { id: 5, product: "", price: "", image: null, hasProduct: false },
  ]);

  const handleImageUpload = (slotId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSlots(slots.map(slot => 
          slot.id === slotId ? { ...slot, image: e.target?.result as string } : slot
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (slotId: number) => {
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, image: null } : slot
    ));
  };

  const handleProductChange = (slotId: number, field: string, value: string) => {
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, [field]: value, hasProduct: field === 'product' ? value !== '' : slot.hasProduct } : slot
    ));
  };

  const handleSelectFromSalesBoost = (productName: string, category: string, avgPrice: string) => {
    // Find first empty slot
    const firstEmptySlot = slots.find(slot => !slot.hasProduct);
    
    if (firstEmptySlot) {
      setSlots(slots.map(slot =>
        slot.id === firstEmptySlot.id
          ? { ...slot, product: productName, price: avgPrice, hasProduct: true }
          : slot
      ));
      
      // Scroll to the updated slot
      setTimeout(() => {
        document.querySelector(`[data-slot-id="${firstEmptySlot.id}"]`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
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
            <h1 className="text-xl font-semibold text-gray-900">Manage Products</h1>
            <p className="text-sm text-gray-600">{machine.name} - {machine.code}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-5xl mx-auto">
        {/* Sales Boost Widget */}
        <SalesBoostWidget onSelectProduct={handleSelectFromSalesBoost} />

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Machine Slots (5 Total)</h2>
            <span className="text-sm text-gray-600">
              {slots.filter(s => s.hasProduct).length} / 5 Filled
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Configure products for each slot in your vending machine. Upload images, set prices, and manage inventory.
          </p>

          {/* Slots */}
          <div className="space-y-4">
            {slots.map((slot) => (
              <div key={slot.id} className="border border-gray-200 rounded-lg p-4" data-slot-id={slot.id}>
                <div className="flex items-start gap-4">
                  {/* Slot Number */}
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-xs text-indigo-600 font-medium">Slot</div>
                      <div className="text-lg font-bold text-indigo-600">{slot.id}</div>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="flex-shrink-0">
                    {slot.image ? (
                      <div className="relative w-24 h-24">
                        <img 
                          src={slot.image} 
                          alt={slot.product}
                          className="w-full h-full object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          onClick={() => handleRemoveImage(slot.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                        <Upload className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500">Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(slot.id, e)}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Product Name</label>
                      <input
                        type="text"
                        value={slot.product}
                        onChange={(e) => handleProductChange(slot.id, 'product', e.target.value)}
                        placeholder="e.g., Coca Cola"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Price ($)</label>
                      <input
                        type="text"
                        value={slot.price}
                        onChange={(e) => handleProductChange(slot.id, 'price', e.target.value)}
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex-shrink-0">
                    {slot.hasProduct ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        Empty
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Save Changes
            </button>
            <Link to="/dashboard/machines">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}