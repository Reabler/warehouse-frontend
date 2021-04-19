import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flag from 'react-world-flags';
import Header from '../../components/Header';

import Table from '../../components/Table/Table';
import TableHead from '../../components/Table/TableHead';
import TableBody from '../../components/Table/TableBody';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';

import { ViewIcon } from '../../components/Icons/Buttons';

const Reviews = () => {
  const reviews = useSelector(state => state?.reviews)
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getOrders())
  }, [])

  return (
    <React.Fragment>
      <main>
        <div className="max-w-full mx-auto">
          <Header title="Reviews" />

          <Table>
            <TableHead
              cols={[
                "Review",
                "Product",
                "Client",
                "Country",
                "Date",
                "",
              ]}
            />
            <TableBody>
              {reviews?.map((item, i) => (
                <TableRow
                  key={item._id}
                  even={i % 2 === 0}
                >
                  <TableCell>{item?.ratingSum}</TableCell>
                  <TableCell>{item?.product?.title}</TableCell>
                  <TableCell>{item?.order?.billing?.firstName} {item?.order?.billing?.lastName}</TableCell>
                  <TableCell>
                    <Flag code={item?.order?.billing?.country} className="w-6 inline-block" alt={item?.order?.billing?.country} />
                  </TableCell>
                  <TableCell>{item?.createdAt}</TableCell>
                  <TableCell>
                    <a href="#" className="text-black hover:text-brandColor">
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

export default Reviews