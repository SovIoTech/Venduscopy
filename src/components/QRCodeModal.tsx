import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  machineCode: string;
  machineName: string;
}

export function QRCodeModal({ isOpen, onClose, machineCode, machineName }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      // Generate a simple QR code-like pattern
      // In production, use a library like qrcode.react or qrcode
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const size = 256;
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
  }, [isOpen, machineCode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Machine QR Code</h3>
            <p className="text-sm text-gray-600">{machineName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200 mb-4">
            <canvas
              ref={canvasRef}
              width={256}
              height={256}
              className="w-64 h-64"
            />
          </div>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-1">Machine Code</p>
            <p className="font-mono text-sm font-medium text-gray-900">{machineCode}</p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
}
