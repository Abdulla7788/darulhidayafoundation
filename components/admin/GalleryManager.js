'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Image as ImageIcon, Check, X, Loader2, UploadCloud } from 'lucide-react';

export default function GalleryManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    fetchItems();
    
    // 🛡️ VOLATILE SESSION ENFORCEMENT: Force logout on refresh/close as requested
    const handleUnload = () => {
      fetch('/api/auth/logout', { method: 'POST', keepalive: true });
    };
    
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Failed to fetch items');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus({ type: 'error', message: 'Please select an image first.' });
      return;
    }
    
    setAdding(true);
    setStatus({ type: 'loading', message: 'Uploading to repository...' });
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/gallery', {
        method: 'POST',
        body: formData
      });
      
      if (res.ok) {
        setStatus({ type: 'success', message: 'Image uploaded successfully.' });
        setFile(null);
        setPreview(null);
        fetchItems();
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Error pushing to cloud storage.' });
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (index) => {
    if (!confirm('Are you sure you want to delete this photographic record?')) return;
    
    try {
      const res = await fetch('/api/gallery', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index })
      });
      
      if (res.ok) {
        fetchItems();
      }
    } catch (err) {
      alert('Failed to delete item');
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-4xl border border-slate-100 overflow-hidden">
      <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-heading font-extrabold text-slate-900 italic uppercase">Gallery Management</h2>
          <p className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase mt-1">Direct Visual Ingestion System</p>
        </div>
        <ImageIcon className="w-8 h-8 text-emerald-600 opacity-20" />
      </div>

      <div className="p-8">
        {/* UPLOAD FORM */}
        <form onSubmit={handleAdd} className="mb-12 bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200">
          <div className="flex flex-col items-center">
            {/* File Upload Area */}
            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative w-full max-w-2xl aspect-video rounded-[2rem] border-2 border-dashed transition-all flex flex-col items-center justify-center p-8 overflow-hidden mb-8 ${
                dragActive ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 bg-white hover:border-emerald-400'
              }`}
            >
              {preview ? (
                <div className="absolute inset-0 w-full h-full group">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      type="button"
                      onClick={() => {setFile(null); setPreview(null);}}
                      className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-500 transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <UploadCloud className={`w-10 h-10 ${dragActive ? 'text-emerald-600' : 'text-slate-300'}`} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Drag & Drop Image</h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mb-6">or click the plus below</p>
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-4 bg-slate-900 text-white rounded-full hover:bg-emerald-600 shadow-2xl transition-all"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                </>
              )}
            </div>

            <button 
              disabled={adding || !file}
              type="submit"
              className="w-full max-w-md px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-2xl"
            >
              {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
              Upload to Gallery
            </button>

            {status.message && (
              <div className={`mt-6 p-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 ${
                status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 
                status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {status.type === 'success' ? <Check className="w-4 h-4" /> : 
                 status.type === 'error' ? <X className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}
                {status.message}
              </div>
            )}
          </div>
        </form>

        {/* LIST VIEW */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-2 text-center">Active Gallery Items ({items.length})</h3>
          
          {loading ? (
             <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-emerald-600" /></div>
          ) : items.length === 0 ? (
            <p className="text-center py-12 text-slate-400 italic text-sm">No images in gallery.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-100">
                  <img src={item.img} alt="" className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=Error'}/>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                        onClick={() => handleDelete(idx)}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-red-500 transition-all"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
