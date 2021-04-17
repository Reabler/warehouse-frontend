import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { getArticles } from '../store/reducers/articlesReducer';
import Flag from 'react-world-flags'

const Articles = () => {
  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles())
  }, [])

  return (
    <React.Fragment>
      <main>
        <div className="max-w-full mx-auto">
          <Header title="Articles" />

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
                          Brand
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Stock
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Grade
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Vendor
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Visible
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles && articles.length && articles.map((item, i) => (
                        <tr key={item._id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 text-black`}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.product.brand}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <a key={'parentCategory'} href="#" className="text-xs text-black font-semibold bg-gray-100 p-1 rounded">{item?.product?.title}</a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.price} {item?.vendor?.currency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item.inStock}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item?.properties?.grade}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {item?.vendor?.name}
                            <Flag code={item?.vendor?.country} height="8px" className="w-4 inline-block ml-2" alt={item?.vendor?.country} />

                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                            {item?.product?.categories?.map((category, cI) => {
                              return (
                                <a key={category._id} href="#" className="text-xs text-black font-semibold bg-gray-100 p-1 rounded">{category.name}</a>
                              )
                            })}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
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

export default Articles