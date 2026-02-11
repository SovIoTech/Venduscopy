import { Link } from "react-router";
import { Store, Check, Star } from "lucide-react";

export function OnboardingPage() {
  const tiers = [
    {
      name: "BASIC",
      price: "$15",
      period: "/ month",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-indigo-200",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      features: [
        "Digital in-unit storefront",
        "Item listing & pricing control",
        "Secure payment processing",
        "Manual restocking",
        "Basic sales dashboard",
        "Single-location support"
      ],
      description: "Individual hosts or small operators who want easy, passive income with minimal setup."
    },
    {
      name: "PREMIUM",
      price: "$25",
      period: "/ month",
      color: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-300",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      recommended: true,
      features: [
        "Everything in Basic",
        "Auto-replenishment inventory rules",
        "Age verification (21+) for restricted items",
        "Multi-unit management",
        "Revenue & item performance insights"
      ],
      description: "Hosts managing multiple properties who want automation, control, and smarter operations."
    },
    {
      name: "EXECUTIVE",
      price: "TBD",
      period: "",
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "Branded Vendome",
        "Bulk deployment & fleet management",
        "Custom reporting & analytics",
        "API access & system integrations",
        "Dedicated enterprise support & onboarding"
      ],
      description: "Hotels, property groups, and enterprise operators deploying Vendome at scale."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome to VendBnB</h1>
          <p className="text-gray-600">Let's get your Vendôme machine up and running</p>
        </div>

        {/* Membership Pricing Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Membership Tiers</h2>
            <p className="text-lg text-gray-600">Monthly Rates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-gradient-to-br ${tier.color} rounded-2xl border-2 ${tier.borderColor} p-8 shadow-lg transition-all hover:shadow-xl ${
                  tier.recommended ? 'md:scale-105 md:-mt-4 md:mb-4' : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md">
                      <Star className="w-4 h-4 fill-current" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6">
                  <h3 className="text-sm font-bold text-gray-700 tracking-wide mb-3">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.period && (
                      <span className="text-gray-600 text-lg">{tier.period}</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who this is for */}
                <div className="mb-6 pt-6 border-t border-gray-300/50">
                  <p className="text-xs font-semibold text-gray-700 mb-2">WHO THIS IS FOR:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${tier.buttonColor} text-white py-3 rounded-lg transition-colors font-medium shadow-md`}
                >
                  {tier.price === "TBD" ? "Contact Sales" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="max-w-4xl mx-auto">
          <Link to="/register-machine">
            <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg shadow-lg">
              Get Started
            </button>
          </Link>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}