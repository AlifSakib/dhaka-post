import React from 'react';

const Header = () => {
  const navItems = [
    'HOME',
    'NEWS',
    'POLITICS',
    'BUSINESS',
    'NATIONAL',
    'CULTURE',
    'OPINION',
    'LIFESTYLE',
    'SPORTS'
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Logo Section */}
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-condensed font-bold text-center tracking-wider" style={{color: '#000000'}}>
          THE DOWNTOWN
        </h1>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide py-3">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className={`text-sm font-condensed font-medium whitespace-nowrap transition-colors relative group block pb-1 ${
                    index === 0 ? 'after:w-full' : 'after:w-0'
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
                  style={{color: '#000000'}}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
