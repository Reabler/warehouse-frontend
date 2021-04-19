import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Drawer from '../components/Drawer/Drawer';
import { getProducts } from '../store/reducers/productsReducer';
import ProductDetailsPreview from './Products/ProductDetailsPreview';
import Table from '../components/Table/Table';
import TableHead from '../components/Table/TableHead';
import TableBody from '../components/Table/TableBody';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell';
import { ViewIcon } from '../components/Icons/Buttons';

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
          <Table>
            <TableHead
              cols={[
                "Brand",
                "Title",
                "Articles",
                "Stock",
                "Categories",
                "Visible",
                ""
              ]}
            />
              <TableBody>
                {products && products.length && products.map((item, i) => (
                  <TableRow
                    key={item._id}
                    even={i % 2 === 0}
                  >
                    <TableCell>{item.brand}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.articles.length}</TableCell>
                    <TableCell>{item.stockCount}</TableCell>
                    <TableCell>
                      {item?.categories.map((category, cI) => {
                        return (
                          <a key={category._id} href="#" className="text-xs text-black font-semibold bg-gray-100 p-1 rounded">{category.name}</a>
                        )
                      })}
                    </TableCell>
                    <TableCell>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </TableCell>
                    <TableCell>
                      <a onClick={() => showProductDetails(item?._id)} className="text-black hover:text-brandColor">
                        <ViewIcon />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

        </div>
      </main>
    </React.Fragment>
  );
};

export default Products