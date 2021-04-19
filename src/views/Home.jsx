import React, {useState} from 'react';
import Bar from '../components/Graphs/Bar';
import Header from '../components/Header';
import BestSellingProducts from './Dashboard/components/BestSellingProducts';
import DashboardHeader from './Dashboard/components/DashboardHeader';

const SalesWidget = ({
  title,
  isEnabled = false,
  onClick
}) => {
  return (
    <div className="border-r w-full flex border-gray-300">
      <div onClick={onClick} className={`flex w-full p-4 dashboardWidget hover:bg-white hover:shadow-xl transition-all ${isEnabled && 'border-b-2 border-black'}`}>
        <div className="flex-1 font-mono self-end pr-4">
          <h4 className="text-sm opacity-50 font-semibold uppercase pb-2">
            {title}
          </h4>
          <h3 className="text-3xl tracking-tight">
            SEK 43.381,42
          </h3>
          <h4 className="text-sm font-bold text-green-500 uppercase pt-1">
            +3.24 %
          </h4>
        </div>
        <div className="w-24 h-24 pt-10">
          <Bar />
        </div>
      </div>

    </div>
  )
}

const ProductListItem = ({

}) => {
  return (
    <div className="flex items-center hover:bg-white hover:shadow-lg transition-all py-3 px-4 mx-4 rounded-md mb-1">
      <div className="w-8 h-8 bg-gray-400 rounded"></div>
      <div className="flex-1">
        <h4 className="text-sm tracking-tight font-semibold ml-3">iPhone 8 128GB Space Gray</h4>
      </div>
      <div className="font-mono change text-sm font-semibold text-green-500">
        +12 %
      </div>
    </div>
  )
}

const Home = () => {
  const [enabledWidget, setEnabledWidget] = useState('sales')

  return (
    <React.Fragment>
      <main>
        <div className="max-w-full">
          <DashboardHeader />
          <div class="flex justify-between items-stretch border-b border-gray-300">
            <SalesWidget
              title="Sales"
              isEnabled={enabledWidget == 'sales'}
              onClick={() => setEnabledWidget('sales')}
            />
            <SalesWidget
              title="Revenue"
              isEnabled={enabledWidget == 'revenue'}
              onClick={() => setEnabledWidget('revenue')}
            />
            <SalesWidget
              title="Profit"
              isEnabled={enabledWidget == 'profit'}
              onClick={() => setEnabledWidget('profit')}
            />
          </div>

          <div class="w-full flex pt-8 pb-2 border-b border-gray-300">
            <div className="w-8/12">
              <BestSellingProducts />
            </div>
            <div className="flex-grow w-3/12">
              <h4 className="px-8 text-sm opacity-50 font-semibold uppercase pb-2">
                Best Selling Products
              </h4>
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
              
            </div>
          </div>


        </div>
      </main>
    </React.Fragment>
  );
};

export default Home