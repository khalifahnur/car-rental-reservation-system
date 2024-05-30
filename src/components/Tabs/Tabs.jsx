import { useState } from 'react';
import Feature from './Feature';
import PricePlan from './PricePlan';
import Reviews from './Reviews';

const Tabs = ({price}) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Features', content: <Feature /> },
    { name: 'Price Plan', content: <PricePlan price={price} /> },
    { name: 'Reviews', content: <Reviews /> },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-2 ">
      <div className="flex space-x-4 items-center justify-center ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === index
                ? 'border-b-2 border-orange-500 text-orange-500'
                : 'text-gray-500'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 ">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
