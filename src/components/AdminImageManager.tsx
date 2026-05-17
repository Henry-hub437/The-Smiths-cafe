import { useState } from 'react';
import { Upload, X, RefreshCw } from 'lucide-react';
import { IMAGES } from '../data';

export default function AdminImageManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadState, setUploadState] = useState<Record<string, boolean>>({});

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#1A1A1A] text-white p-3 rounded-full shadow-lg border border-[#D4AF37] hover:bg-[#D4AF37] transition-colors"
        title="Admin: Upload Images"
      >
        <Upload className="w-5 h-5" />
      </button>
    );
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>, target: keyof typeof IMAGES) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const filenameMap = {
      storefront: 'storefront.jpeg',
      interior: 'interior.jpeg'
    };

    setUploadState(prev => ({ ...prev, [target]: true }));
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`/api/upload?target=${target}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert('Failed to upload image. Please try again.');
        setUploadState(prev => ({ ...prev, [target]: false }));
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image.');
      setUploadState(prev => ({ ...prev, [target]: false }));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-2xl rounded-lg p-6 border border-gray-200 w-[320px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif font-bold text-lg text-primary">Upload Images</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Upload your 2 restaurant images. They will be saved and updated instantly.
      </p>

      <div className="space-y-3">
        <UploadButton 
          label="Storefront (Hero & About)" 
          target="storefront"
          isUploading={!!uploadState['storefront']}
          onSelect={(e) => handleFileSelect(e, 'storefront')}
        />
        <UploadButton 
          label="Interior (Hero Background)" 
          target="interior"
          isUploading={!!uploadState['interior']}
          onSelect={(e) => handleFileSelect(e, 'interior')}
        />
      </div>
    </div>
  );
}

function UploadButton({ label, target, isUploading, onSelect }: { label: string, target: string, isUploading: boolean, onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="w-full flex items-center justify-between p-3 border border-gray-200 rounded hover:border-[#D4AF37] hover:bg-gray-50 transition-colors text-left cursor-pointer">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      {isUploading ? (
        <RefreshCw className="w-4 h-4 text-gray-400 animate-spin" />
      ) : (
        <Upload className="w-4 h-4 text-gray-400" />
      )}
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={onSelect}
        disabled={isUploading}
      />
    </label>
  );
}
