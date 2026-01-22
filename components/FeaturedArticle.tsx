import React from 'react';
import Image from 'next/image';

const FeaturedArticle = () => {
  return (
    <article className="bg-white p-6 shadow-sm">
      {/* Featured Image */}
      <div className="relative w-full h-[400px] md:h-[500px] mb-6 overflow-hidden bg-gray-200">
        <Image
          src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1200&h=800&fit=crop"
          alt="Police in riot gear"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="space-y-4">
        <div className="inline-block">
          <span
            className="text-xs font-condensed font-medium tracking-wider uppercase"
            style={{ color: "#A2A2A2" }}
          >
            POLITICS
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-condensed font-bold leading-tight"
          style={{ color: "#000000" }}
        >
          &apos;Election was rigged&apos; says opposition, police confirm three
          dead
        </h1>

        <div
          className="flex items-center gap-2 text-sm font-times flex-wrap"
          style={{ color: "#A2A2A2" }}
        >
          <span className="italic">by</span>
          <span className="font-bold uppercase" style={{ color: "#000000" }}>
            JOHN DOE
          </span>
          <span className="italic">and 1 others</span>
          <span className="mx-1">•</span>
          <time>February 17, 2020</time>
          <span className="mx-1">•</span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            0
          </span>
        </div>

        <p
          className="font-times leading-relaxed text-base"
          style={{ color: "#A2A2A2" }}
        >
          When we get out of the glass bottle of our ego and when we escape like
          the squirrels in the...
        </p>

        <div className="pt-2">
          <button className="bg-black text-white font-condensed font-bold text-xs tracking-wider uppercase px-6 py-3 hover:bg-gray-800 transition-colors">
            READ MORE
          </button>
        </div>
      </div>

      {/* Additional Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
        <div className="group cursor-pointer">
          <div className="relative w-full h-48 mb-3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
              alt="News article"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3
            className="text-sm font-condensed font-semibold group-hover:text-blue-600 transition-colors line-clamp-2"
            style={{ color: "#000000" }}
          >
            Additional news article with engaging headline
          </h3>
        </div>

        <div className="group cursor-pointer">
          <div className="relative w-full h-48 mb-3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop"
              alt="News article"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3
            className="text-sm font-condensed font-semibold group-hover:text-blue-600 transition-colors line-clamp-2"
            style={{ color: "#000000" }}
          >
            Breaking news story with important updates
          </h3>
        </div>

        <div className="group cursor-pointer">
          <div className="relative w-full h-48 mb-3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop"
              alt="News article"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3
            className="text-sm font-condensed font-semibold group-hover:text-blue-600 transition-colors line-clamp-2"
            style={{ color: "#000000" }}
          >
            Latest developments in ongoing situation
          </h3>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
