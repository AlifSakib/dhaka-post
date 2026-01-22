import React from 'react';

const OpinionSection = () => {
  const opinionItems = [
    "Their Showdown: ahead left history of Violence and Bangladesh",
    "Finland Has An Education System The Other Country Should Learn The Good",
    "Women in Politics: Urgency of Course Senese Toward a Targeted Education",
    "China's Peony-Famous will fight for dominance in politics through",
    "Democrats Paris leftithub calls Wallace"
  ];

  return (
    <div className="bg-white mt-6 p-4 shadow-sm">
      <h2 className="text-xl font-condensed font-bold mb-4 pb-2 border-b-2 border-gray-200" style={{color: '#000000'}}>
        Opinion
      </h2>
      <ul className="space-y-3">
        {opinionItems.map((item, index) => (
          <li key={index} className="flex gap-2 group cursor-pointer">
            <span className="text-gray-400 font-bold flex-shrink-0">•</span>
            <a href="#" className="text-sm font-times leading-tight group-hover:text-blue-600 transition-colors" style={{color: '#A2A2A2'}}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpinionSection;
