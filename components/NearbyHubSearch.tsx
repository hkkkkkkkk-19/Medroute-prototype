
import React, { useState } from 'react';
import { findNearbyHubs } from '../aiService.ts';

const NearbyHubSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ text: string; sources: any[] } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const lat = 20.5937;
    const lng = 78.9629;
    
    const data = await findNearbyHubs(query, lat, lng);
    setResults(data);
    setLoading(false);
  };

  const parseHubs = (text: string) => {
    return text.split('\n')
      .filter(line => line.trim().startsWith('*'))
      .map(line => {
        const cleaned = line.replace(/^\*\s*/, '');
        const parts = cleaned.split('|').map(p => p.trim());
        return {
          name: parts[0] || "Verified Hub",
          address: parts[1] || "Search Maps for location",
          hours: parts[2] || "",
          rating: parts[3] || ""
        };
      });
  };

  const hubData = results ? parseHubs(results.text) : [];

  return (
    <div className="bg-slate-900/80 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
      <div className="mb-8">
        <h3 className="text-2xl font-black tracking-tighter mb-2">Locate verified hubs</h3>
        <p className="text-slate-400 text-sm font-medium">Find nearest drop-boxes or clinics in your specific area.</p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-10">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter area (e.g., Gandhi Nagar, Jammu)"
          className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-sky-500 transition-all text-white"
        />
        <button 
          disabled={loading}
          className="px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold text-sm tracking-widest disabled:opacity-50 transition-all hover:bg-sky-500"
        >
          {loading ? 'Searching...' : 'Find'}
        </button>
      </form>

      {results && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {hubData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hubData.map((hub, i) => {
                // Match with source uri if available
                const source = results.sources.find(s => s.title.toLowerCase().includes(hub.name.toLowerCase()));
                const mapLink = source?.uri || `https://www.google.com/maps/search/${encodeURIComponent(hub.name + ' ' + hub.address)}`;
                
                return (
                  <a 
                    key={i} 
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-sky-500 hover:bg-white/10 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sky-400 font-bold text-base leading-tight group-hover:underline">{hub.name}</h4>
                        {hub.rating && (
                          <span className="text-amber-400 text-[10px] font-black">{hub.rating} ★</span>
                        )}
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed font-medium mb-3">{hub.address}</p>
                    </div>
                    {hub.hours && (
                      <div className="mt-2 text-[9px] font-black text-slate-500 tracking-widest">
                        {hub.hours}
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-slate-400 text-sm italic">{results.text || "No results found for that area."}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NearbyHubSearch;
