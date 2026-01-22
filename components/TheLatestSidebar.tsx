import React from 'react';
import Image from 'next/image';

interface NewsItem {
  title: string;
  category?: string;
  image: string;
}

const TheLatestSidebar = () => {
  const newsItems: NewsItem[] = [
    {
      title: "Disconnected Wellness Duo Soak Fail And Sculpt",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
    },
    {
      title: "Millions of Indigenous People May Lose Voting Rights in Alliance",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
    },
    {
      title: "Community Car Park, III a Truck Collides with the North",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    },
    {
      title: "President John 'Johnson' Means Mission to fight 3,700 Lives",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=250&fit=crop",
    },
    {
      title: "Senate considers longer punishments for prostitution lords",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-sm">
      <h2 className="text-xl font-condensed font-bold mb-4 pb-2 border-b-2 border-gray-200" style={{color: '#000000'}}>
        The Latest
      </h2>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="flex gap-3 group cursor-pointer">
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-condensed leading-tight group-hover:text-blue-600 transition-colors line-clamp-3" style={{color: '#000000'}}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheLatestSidebar;
