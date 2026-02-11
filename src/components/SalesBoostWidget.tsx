import { useState } from "react";
import { TrendingUp, MapPin, Sparkles, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { toast } from "sonner@2.0.3";

interface SalesBoostWidgetProps {
  onSelectProduct?: (productName: string, category: string, avgPrice: string) => void;
}

export function SalesBoostWidget({ onSelectProduct }: SalesBoostWidgetProps) {
  const [radius, setRadius] = useState<number | "nationwide">(25);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  // Mock data for top-performing products by category
  const topProducts = [
    { category: "Sunglasses", salesScore: 92, avgPrice: "$12.99", trend: "+15%", color: "#6366f1" },
    { category: "Phone Chargers", salesScore: 88, avgPrice: "$8.50", trend: "+22%", color: "#8b5cf6" },
    { category: "Bottled Water", salesScore: 85, avgPrice: "$2.00", trend: "+8%", color: "#ec4899" },
    { category: "Energy Drinks", salesScore: 79, avgPrice: "$3.50", trend: "+12%", color: "#f59e0b" },
    { category: "Protein Bars", salesScore: 74, avgPrice: "$4.25", trend: "+18%", color: "#10b981" },
    { category: "Hand Sanitizer", salesScore: 68, avgPrice: "$3.99", trend: "+5%", color: "#06b6d4" },
    { category: "Headphones", salesScore: 65, avgPrice: "$15.99", trend: "+28%", color: "#ef4444" },
    { category: "Gum & Mints", salesScore: 61, avgPrice: "$1.75", trend: "+3%", color: "#f97316" },
  ];

  const radiusOptions = [
    { value: 15, label: "15 miles" },
    { value: 25, label: "25 miles" },
    { value: 50, label: "50 miles" },
    { value: 75, label: "75 miles" },
    { value: 100, label: "100 miles" },
    { value: "nationwide" as const, label: "Nationwide" },
  ];

  const handleAddProduct = (product: typeof topProducts[0]) => {
    if (onSelectProduct) {
      onSelectProduct(product.category, product.category, product.avgPrice.replace("$", ""));
    }
    toast.success(`Added ${product.category} to your machine!`);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sales Boost</h3>
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
              AI-Powered
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Discover high-performing products in your area based on anonymized sales data
          </p>
        </div>

        {/* Radius Selector */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-600" />
          <div className="relative">
            <select
              value={radius}
              onChange={(e) => setRadius(e.target.value === "nationwide" ? "nationwide" : Number(e.target.value))}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
            >
              {radiusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-900">Top Products by Sales Performance</h4>
          <div className="text-xs text-gray-600">
            Data from {radius === "nationwide" ? "nationwide" : `${radius} mile radius`}
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={topProducts} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              label={{ value: 'Sales Score', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#6b7280' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: any, name: string, props: any) => [
                `Score: ${value}`,
                `Avg Price: ${props.payload.avgPrice}`,
                `Trend: ${props.payload.trend}`
              ]}
            />
            <Bar 
              dataKey="salesScore" 
              radius={[6, 6, 0, 0]}
              onClick={(data) => setSelectedCategory(data.category)}
              cursor="pointer"
            >
              {topProducts.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-3">
        {topProducts.slice(0, 4).map((product, index) => (
          <div 
            key={product.category}
            className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer"
            onClick={() => setSelectedCategory(product.category)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: product.color }}
                  />
                  <h5 className="font-semibold text-gray-900 text-sm">{product.category}</h5>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Avg. Price: <span className="font-medium text-gray-900">{product.avgPrice}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {product.trend}
                </div>
                <div className="text-xs text-gray-500">Score: {product.salesScore}</div>
              </div>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddProduct(product);
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add to Machine
            </button>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <button
        onClick={() => setSelectedCategory("all")}
        className="w-full mt-3 text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium py-2 hover:bg-indigo-50 rounded-lg transition-colors"
      >
        View All {topProducts.length} Recommendations →
      </button>

      {/* AI Insights */}
      <div className="mt-4 bg-white rounded-lg p-4 border border-indigo-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h5 className="font-medium text-gray-900 text-sm mb-1">AI Insight</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              Based on anonymized data from {radius === "nationwide" ? "nationwide" : `machines within ${radius} miles`}, 
              adding <span className="font-semibold text-indigo-600">{topProducts[0].category}</span> could 
              increase your revenue by an estimated <span className="font-semibold text-green-600">15-20%</span>. 
              Peak demand hours: 11 AM - 2 PM and 5 PM - 7 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}