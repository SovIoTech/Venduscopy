import { Link } from "react-router";
import { Store, Loader2, CheckCircle, Wifi } from "lucide-react";
import { useEffect, useRef } from "react";

export function MachineConnectionPage() {
  // Simulating connection status - in real app this would be dynamic
  const isConnected = true;
  const machineCode = "ABCD-1234-EFGH-5678";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isConnected && canvasRef.current) {
      // Generate a simple QR code-like pattern
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const size = 200;
        const moduleSize = 8;
        const modules = size / moduleSize;
        
        // Clear canvas
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, size, size);
        
        // Generate pattern based on machine code
        ctx.fillStyle = '#000000';
        for (let y = 0; y < modules; y++) {
          for (let x = 0; x < modules; x++) {
            // Create a pseudo-random pattern based on position and machine code
            const seed = (x * y + machineCode.charCodeAt(x % machineCode.length)) % 3;
            if (seed === 0) {
              ctx.fillRect(x * moduleSize, y * moduleSize, moduleSize, moduleSize);
            }
          }
        }
        
        // Add positioning squares (corners)
        const drawPositionSquare = (x: number, y: number) => {
          ctx.fillStyle = '#000000';
          ctx.fillRect(x, y, moduleSize * 7, moduleSize * 7);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x + moduleSize, y + moduleSize, moduleSize * 5, moduleSize * 5);
          ctx.fillStyle = '#000000';
          ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, moduleSize * 3, moduleSize * 3);
        };
        
        drawPositionSquare(0, 0); // Top-left
        drawPositionSquare(size - moduleSize * 7, 0); // Top-right
        drawPositionSquare(0, size - moduleSize * 7); // Bottom-left
      }
    }
  }, [isConnected, machineCode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            {isConnected ? "Machine Connected!" : "Connecting to Machine..."}
          </h1>
          <p className="text-gray-600">
            {isConnected 
              ? "Your Vendôme machine is now online" 
              : "Please wait while we establish a connection"
            }
          </p>
        </div>

        {/* Connection Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Connection Status */}
          <div className="text-center mb-8">
            {isConnected ? (
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            ) : (
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
              </div>
            )}
          </div>

          {/* QR Code Section */}
          {isConnected && (
            <div className="flex flex-col items-center mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Machine QR Code</h3>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <canvas
                  ref={canvasRef}
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Scan this code to access your machine remotely
              </p>
            </div>
          )}

          {/* Machine Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Machine Code</span>
              <span className="font-mono text-sm font-medium">{machineCode}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Machine Name</span>
              <span className="text-sm font-medium">Office Lobby</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Connection Status</span>
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <>
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">Online</span>
                  </>
                ) : (
                  <>
                    <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                    <span className="text-sm font-medium text-indigo-600">Connecting...</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Connection Steps */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Machine code verified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Network connection established</span>
            </div>
            <div className="flex items-center gap-3">
              {isConnected ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Loader2 className="w-5 h-5 text-indigo-600 animate-spin flex-shrink-0" />
              )}
              <span className="text-sm text-gray-700">Syncing machine data</span>
            </div>
          </div>

          {isConnected && (
            <Link to="/create-store">
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Continue to Store Setup
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
