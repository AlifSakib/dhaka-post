import React from 'react';
import Image from 'next/image';

const RightSidebar = () => {
  return (
    <div className="bg-white p-4 shadow-sm space-y-6">
      {/* Banner Ad */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden group cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1586892478025-2b5472316f22?w=600&h=400&fit=crop"
          alt="Banner advertisement"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-condensed font-bold mb-3">Banner Ads</h2>
          <button className="bg-black text-white font-condensed text-xs font-bold px-6 py-2 hover:bg-gray-800 transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Featured Card with Neon Sign */}
      <div className="overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=600&h=400&fit=crop"
            alt="Neon sign"
            fill
            className="object-cover"
          />
          <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-condensed font-bold px-3 py-1 uppercase">
            OPINION
          </span>
        </div>
        <div className="py-4">
          <h3 className="font-condensed font-bold text-lg leading-tight mb-2" style={{color: '#000000'}}>
            Democratic Party politician calls Prabowo &apos;cardboard general&apos;
          </h3>
          <div className="flex items-center gap-2 text-xs mb-3" style={{color: '#A2A2A2'}}>
            <span className="italic">by</span>
            <span className="font-bold uppercase" style={{color: '#000000'}}>JOHN DOE</span>
            <span className="mx-1">•</span>
            <time>August 10, 2018</time>
          </div>
          <p className="font-times text-sm leading-relaxed" style={{color: '#A2A2A2'}}>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...
          </p>
        </div>
      </div>

      {/* Featured Article with Lifestyle Badge */}
      <div className="border-t-2 border-gray-200 pt-6">
        <div className="relative w-full h-64 mb-4 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop"
            alt="Fashion article"
            fill
            className="object-cover"
          />
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-condensed font-bold px-3 py-1 uppercase">
            LIFESTYLE
          </span>
        </div>
        <h3 className="font-condensed font-bold text-lg leading-tight mb-2" style={{color: '#000000'}}>
          Google tracks location data even when users turn services off
        </h3>
        <div className="flex items-center gap-2 text-xs mb-3" style={{color: '#A2A2A2'}}>
          <span className="italic">by</span>
          <span className="font-bold uppercase" style={{color: '#000000'}}>JASON DOE</span>
          <span className="mx-1">•</span>
          <time>August 3, 2021</time>
        </div>
        <p className="font-times text-sm leading-relaxed" style={{color: '#A2A2A2'}}>
          Even the all-powerful Pointing has no control about the blind texts it is an almost...
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
