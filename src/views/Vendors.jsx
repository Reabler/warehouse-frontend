import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flag from 'react-world-flags';
import Header from '../components/Header';
import { getVendors } from '../store/reducers/vendorsReducer';

const Vendors = () => {
  const vendors = useSelector(state => state.vendors)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVendors())
  }, [])

  return (
    <React.Fragment>
      <main>
        <div className="max-w-full mx-auto">
          <Header title="Vendors" />

          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-gray-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 w-1/2 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Company
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Country
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Currency
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Articles
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Active
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendors && vendors.length && vendors.map((item, i) => (
                        <tr key={item.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 text-black`}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.companyName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Flag code={item?.country} className="w-6 inline-block" alt={item?.country} />                        
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.currency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.articlesCount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </React.Fragment>
  );
};

export default Vendors