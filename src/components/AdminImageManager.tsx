import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

export default function AdminImageManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadState, setUploadState] = useState<Record<string, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadState(prev => ({ ...prev, [target]: true }));
    setErrorMsg(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`/api/upload?target=${target}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Force reload to show dramatic change
        window.location.reload();
      } else {
        const errorText = await response.text();
        console.error('Failed to upload', errorText);
        setErrorMsg(`Failed to upload ${target}: ${response.status} ${errorText}`);
        setUploadState(prev => ({ ...prev, [target]: false }));
      }
    } catch (error) {
      console.error('Error uploading:', error);
      setErrorMsg(`Network error uploading ${target}: ${String(error)}`);
      setUploadState(prev => ({ ...prev, [target]: false }));
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-black text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 hover:bg-gray-800 transition-colors border border-white/10"
      >
        <Upload size={16} />
        <span className="text-sm font-medium">Update Images</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <h3 className="font-medium flex items-center gap-2">
          <Upload size={16} /> 
          Upload Photos
        </h3>
        <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
          <X size={18} />
        </button>
      </div>
      
      <div className="p-5 space-y-4">
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Select your photos below. The page will refresh automatically once uploaded.
        </p>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg break-words">
            {errorMsg}
          </div>
        )}

        <div className="space-y-3">
          <UploadButton 
            label="Storefront (Exterior)" 
            target="storefront"
            isUploading={!!uploadState['storefront']}
            onSelect={(e) => handleFileSelect(e, 'storefront')}
          />
          <UploadButton 
            label="Interior" 
            target="interior"
            isUploading={!!uploadState['interior']}
            onSelect={(e) => handleFileSelect(e, 'interior')}
          />
        </div>
      </div>
    </div>
  );
}

function UploadButton({ 
  label, 
  target, 
  isUploading, 
  onSelect 
}: { 
  label: string, 
  target: string, 
  isUploading: boolean,
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) {
  return (
    <div className="relative">
      <input 
        type="file" 
        accept="image/*" 
        onChange={onSelect}
        disabled={isUploading}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10" 
        id={`upload-${target}`}
      />
      <div className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border ${isUploading ? 'bg-gray-50 border-gray-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'} transition-all`}>
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {isUploading ? (
          <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
        ) : (
          <Upload size={16} className="text-gray-400" />
        )}
      </div>
    </div>
  );
}
