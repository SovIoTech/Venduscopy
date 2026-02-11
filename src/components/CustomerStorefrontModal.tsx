import { X, ShoppingCart, CreditCard, Smartphone, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  compartment: string;
  image?: string;
  inStock: boolean;
}

interface CustomerStorefrontModalProps {
  isOpen: boolean;
  onClose: () => void;
  machineName: string;
  products: Product[];
}

export function CustomerStorefrontModal({ isOpen, onClose, machineName, products }: CustomerStorefrontModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentStep, setPaymentStep] = useState<"browse" | "payment" | "success">("browse");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "google" | null>(null);

  const handleProductSelect = (product: Product) => {
    if (product.inStock) {
      setSelectedProduct(product);
      setPaymentStep("payment");
    }
  };

  const handlePaymentComplete = () => {
    setPaymentStep("success");
    setTimeout(() => {
      setPaymentStep("browse");
      setSelectedProduct(null);
      setPaymentMethod(null);
    }, 3000);
  };

  const handleClose = () => {
    setPaymentStep("browse");
    setSelectedProduct(null);
    setPaymentMethod(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {paymentStep === "browse" ? machineName : paymentStep === "payment" ? "Checkout" : "Success!"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {paymentStep === "browse" ? "Select an item to purchase" : paymentStep === "payment" ? "Complete your payment" : "Enjoy your purchase!"}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-88px)]">
          {/* Browse Products */}
          {paymentStep === "browse" && (
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    disabled={!product.inStock}
                    className={`relative text-left p-4 rounded-xl border-2 transition-all ${
                      product.inStock
                        ? "border-gray-200 hover:border-indigo-500 hover:shadow-lg cursor-pointer"
                        : "border-gray-100 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {/* Product Image */}
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingCart className="w-12 h-12 text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-xs text-gray-500">Slot {product.compartment}</p>
                    </div>

                    {/* Price & Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                      {!product.inStock && (
                        <span className="text-xs text-red-600 font-medium">Out of Stock</span>
                      )}
                    </div>

                    {product.inStock && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <span className="text-sm text-indigo-600 font-medium">Tap to Purchase →</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Payment Step */}
          {paymentStep === "payment" && selectedProduct && (
            <div className="p-6">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Order Summary</h3>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                    {selectedProduct.image ? (
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{selectedProduct.name}</div>
                    <div className="text-sm text-gray-600">Slot {selectedProduct.compartment}</div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">${selectedProduct.price}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">${selectedProduct.price}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Select Payment Method</h3>

                {/* Credit Card */}
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "card"
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Credit or Debit Card</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                    </div>
                    {paymentMethod === "card" && (
                      <CheckCircle className="w-6 h-6 text-indigo-600" />
                    )}
                  </div>
                </button>

                {/* Apple Pay */}
                <button
                  onClick={() => setPaymentMethod("apple")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "apple"
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Apple Pay</div>
                      <div className="text-sm text-gray-600">Pay with your Apple device</div>
                    </div>
                    {paymentMethod === "apple" && (
                      <CheckCircle className="w-6 h-6 text-indigo-600" />
                    )}
                  </div>
                </button>

                {/* Google Pay */}
                <button
                  onClick={() => setPaymentMethod("google")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "google"
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Google Pay</div>
                      <div className="text-sm text-gray-600">Pay with your Google account</div>
                    </div>
                    {paymentMethod === "google" && (
                      <CheckCircle className="w-6 h-6 text-indigo-600" />
                    )}
                  </div>
                </button>
              </div>

              {/* Card Form (if credit card selected) */}
              {paymentMethod === "card" && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setPaymentStep("browse");
                    setSelectedProduct(null);
                    setPaymentMethod(null);
                  }}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handlePaymentComplete}
                  disabled={!paymentMethod}
                  className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {paymentStep === "success" && (
            <div className="p-6 text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">
                Your item is being dispensed from slot {selectedProduct?.compartment}
              </p>
              <div className="bg-gray-50 rounded-xl p-4 inline-block">
                <div className="text-sm text-gray-600 mb-1">Your purchase</div>
                <div className="font-semibold text-gray-900">{selectedProduct?.name}</div>
                <div className="text-2xl font-bold text-indigo-600 mt-2">${selectedProduct?.price}</div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Thank you for your purchase!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
