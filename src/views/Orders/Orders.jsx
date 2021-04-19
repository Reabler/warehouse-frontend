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
import Tabs from '../../components/Tabs/Tabs'

const Orders = () => {
  const orders = useSelector(state => state?.orders)
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getOrders())
  }, [])

  return (
    <React.Fragment>
      <main>
        <div className="max-w-full mx-auto">
          <Header title="Orders" />

          <div className="px-4 -mb-6">
            <Tabs
              tabs={[
                {title: 'Open', key:'open'},
                {title: 'Pending', key:'pending'},
                {title: 'Canceled', key:'canceled'},
                {title: 'Completed', key:'completed'},
              ]}
            />
          </div>

          <Table>
            <TableHead
              cols={[
                "Order no.",
                "Country",
                "Client",
                "State",
                "Quant.",
                "Total",
                "Date",
                "",
              ]}
            />
            <TableBody>
              {orders?.length && orders.map((item, i) => (
                <TableRow
                  key={item._id}
                  even={i % 2 === 0}
                >
                  <TableCell>{item?.orderNo}</TableCell>
                  <TableCell>
                    <Flag code={item?.billing?.country} className="w-6 inline-block" alt={item?.billing?.country} />
                  </TableCell>
                  <TableCell>{item?.billing?.firstName} {item?.billing?.lastName}</TableCell>
                  <TableCell>{item?.state}</TableCell>
                  <TableCell>{item?.items?.length}</TableCell>
                  <TableCell>{item?.sum?.total}</TableCell>
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

export default Orders