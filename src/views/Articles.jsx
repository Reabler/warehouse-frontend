import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { getArticles } from '../store/reducers/articlesReducer';
import Flag from 'react-world-flags'

import Table from '../components/Table/Table';
import TableHead from '../components/Table/TableHead';
import TableBody from '../components/Table/TableBody';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell';
import { ViewIcon } from '../components/Icons/Buttons';

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

          <Table>
            <TableHead
              cols={[
                "Brand",
                "Product",
                "Price",
                "Stock",
                "Grade",
                "Vendor",
                "Categories",
                "Visible",
                "",
              ]}
            />
              <TableBody>
                {articles && articles.length && articles.map((item, i) => (
                  <TableRow
                    key={item._id}
                    even={i % 2 === 0}
                  >
                    <TableCell>{item?.product.brand}</TableCell>
                    <TableCell>
                      <a key={'parentCategory'} href="#" className="text-xs text-black font-semibold bg-gray-100 p-1 rounded">{item?.product?.title}</a>
                    </TableCell>
                    <TableCell>{item?.price} {item?.vendor?.currency}</TableCell>
                    <TableCell>{item.inStock}</TableCell>
                    <TableCell>{item?.properties?.grade}</TableCell>
                    <TableCell>
                      {item?.vendor?.name}
                      <Flag code={item?.vendor?.country} height="8px" className="w-4 inline-block ml-2" alt={item?.vendor?.country} />
                    </TableCell>
                    <TableCell>
                      {item?.product?.categories?.map((category, cI) => {
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

export default Articles