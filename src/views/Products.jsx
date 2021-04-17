import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Drawer from '../components/Drawer/Drawer';
import { getProducts } from '../store/reducers/productsReducer';
import ProductDetailsPreview from './Products/ProductDetailsPreview';

const Products = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  const [previewIsVisible, setPreviewIsVisible] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  function showProductDetails(productId) {
    setSelectedProductId(productId)
    setPreviewIsVisible(true)
  }

  return (
    <React.Fragment>
      <main>
        <Drawer
          isOpen={previewIsVisible}
          onClose={() => setPreviewIsVisible(false)}
        >
          <ProductDetailsPreview productId={selectedProductId} />
        </Drawer>        
        <div className="max-w-full mx-auto">
          <Header title="Products" />
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
                          className="px-6 py-3 w-1/2 text-left text-xs font-medium uppercase tracking-wider"
                        >
                          Title
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
                          Stock
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
                      {products && products.length && products.map((item, i) => (
                        <tr key={item._id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 text-black`}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item.brand}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{item.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item.articles.length}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{item.stockCount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm truncate">
                            {item?.categories.map((category, cI) => {
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
                            <a onClick={() => showProductDetails(item?._id)} className="text-indigo-600 hover:text-indigo-900">
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

export default Products