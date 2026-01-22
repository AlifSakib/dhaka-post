'use client';

import React from 'react';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const TopCarousel = () => {
  const articles = [
    {
      title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    },
    {
      title: 'Presidential Train Now Available For Jakartans Traveling To Bandung',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop',
    },
    {
      title: 'A Digital Media Startup Growing Up With Millennial Women',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 transition-colors">
            <IoChevronBack className="w-4 h-4 text-black" />
          </button>

          {/* Articles */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-4">
              {articles.map((article, index) => (
                <div key={index} className="flex items-center gap-3 min-w-[280px] bg-white p-2 group cursor-pointer">
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-condensed leading-tight group-hover:text-blue-600 transition-colors line-clamp-3" style={{color: '#000000'}}>
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 transition-colors">
            <IoChevronForward className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCarousel;
