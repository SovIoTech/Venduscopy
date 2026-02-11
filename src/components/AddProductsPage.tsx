import { Link } from "react-router";
import { Store, Plus, X, Package, Upload, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SalesBoostWidget } from "./SalesBoostWidget";

export function AddProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Coca Cola", price: "2.50", compartment: "A1", image: null as string | null, ageVerification: null as "18+" | "21+" | null },
    { id: 2, name: "Chips", price: "1.50", compartment: "A2", image: null as string | null, ageVerification: null as "18+" | "21+" | null },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    compartment: "",
    image: null as string | null,
    ageVerification: null as "18+" | "21+" | null
  });

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

  const handleRemoveNewImage = () => {
    setNewProduct({ ...newProduct, image: null });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.compartment) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          price: newProduct.price,
          compartment: newProduct.compartment,
          image: newProduct.image,
          ageVerification: newProduct.ageVerification
        }
      ]);
      setNewProduct({ name: "", price: "", compartment: "", image: null, ageVerification: null });
    }
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleSelectFromSalesBoost = (productName: string, category: string, avgPrice: string) => {
    // Pre-fill the form with the selected product
    const firstAvailableCompartment = ["A1", "A2", "A3", "B1", "B2", "B3"]
      .find(comp => !products.some(p => p.compartment === comp));
    
    setNewProduct({
      name: productName,
      price: avgPrice,
      compartment: firstAvailableCompartment || "",
      image: null,
      ageVerification: null
    });
    
    // Scroll to the add product form
    document.querySelector('.bg-blue-50')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Add Products</h1>
          <p className="text-gray-600">Stock your machine with products and set prices</p>
        </div>

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
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-400">Create Store</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="text-sm font-medium text-gray-900">Add Products</span>
            </div>
          </div>

          {/* Machine Compartment Visual */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Machine Compartments</h3>
              <span className="text-sm text-gray-600">6 total / {products.length} assigned</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["A1", "A2", "A3", "B1", "B2", "B3"].map((compartment) => {
                const isAssigned = products.some(p => p.compartment === compartment);
                return (
                  <div
                    key={compartment}
                    className={`p-4 rounded-lg border-2 text-center ${
                      isAssigned
                        ? "border-indigo-300 bg-indigo-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-1">{compartment}</div>
                    <div className="text-xs text-gray-600">
                      {isAssigned ? (
                        <span className="text-indigo-600 font-medium">Assigned</span>
                      ) : (
                        "Empty"
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sales Boost Widget */}
          <SalesBoostWidget onSelectProduct={handleSelectFromSalesBoost} />

          {/* Add Product Form */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Add New Product</h3>
            
            <div className="flex items-start gap-4 mb-4">
              {/* Image Upload */}
              <div className="flex-shrink-0">
                {newProduct.image ? (
                  <div className="relative w-24 h-24">
                    <img 
                      src={newProduct.image} 
                      alt="Product"
                      className="w-full h-full object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={handleRemoveNewImage}
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
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Form Fields */}
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Product Name</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="e.g., Water Bottle"
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
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Compartment</label>
                  <select 
                    value={newProduct.compartment}
                    onChange={(e) => setNewProduct({ ...newProduct, compartment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    {["A1", "A2", "A3", "B1", "B2", "B3"]
                      .filter(comp => !products.some(p => p.compartment === comp))
                      .map(comp => (
                        <option key={comp} value={comp}>{comp}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>

            {/* Age Verification */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gray-600" />
                Age Verification Required
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setNewProduct({ 
                    ...newProduct, 
                    ageVerification: newProduct.ageVerification === "18+" ? null : "18+" 
                  })}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                    newProduct.ageVerification === "18+"
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ShieldCheck className={`w-5 h-5 ${newProduct.ageVerification === "18+" ? "text-orange-600" : "text-gray-400"}`} />
                    <span>18+ Verification</span>
                  </div>
                  <div className="text-xs mt-1 opacity-75">Tobacco, vaping, etc.</div>
                </button>
                <button
                  type="button"
                  onClick={() => setNewProduct({ 
                    ...newProduct, 
                    ageVerification: newProduct.ageVerification === "21+" ? null : "21+" 
                  })}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                    newProduct.ageVerification === "21+"
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-red-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ShieldCheck className={`w-5 h-5 ${newProduct.ageVerification === "21+" ? "text-red-600" : "text-gray-400"}`} />
                    <span>21+ Verification</span>
                  </div>
                  <div className="text-xs mt-1 opacity-75">Alcohol, cannabis, etc.</div>
                </button>
                <button
                  type="button"
                  onClick={() => setNewProduct({ ...newProduct, ageVerification: null })}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                    newProduct.ageVerification === null
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>No Restriction</span>
                  </div>
                  <div className="text-xs mt-1 opacity-75">All ages</div>
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddProduct}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </button>
          </div>

          {/* Products List */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Products ({products.length})</h3>
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <ImageIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-gray-900">{product.name}</div>
                        {product.ageVerification && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                            product.ageVerification === "21+" 
                              ? "bg-red-100 text-red-700" 
                              : "bg-orange-100 text-orange-700"
                          }`}>
                            <ShieldCheck className="w-3 h-3" />
                            {product.ageVerification}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">Compartment {product.compartment}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-medium text-gray-900">${product.price}</div>
                    <button 
                      onClick={() => handleRemoveProduct(product.id)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/dashboard">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Complete Setup & Go to Dashboard
            </button>
          </Link>
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