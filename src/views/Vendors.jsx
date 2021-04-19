import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flag from 'react-world-flags';
import Header from '../components/Header';
import { getVendors } from '../store/reducers/vendorsReducer';

import Table from '../components/Table/Table';
import TableHead from '../components/Table/TableHead';
import TableBody from '../components/Table/TableBody';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell';
import { ViewIcon } from '../components/Icons/Buttons';

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

          <Table>
            <TableHead
              cols={[
                "Name",
                "Company",
                "Country",
                "Currency",
                "Articles",
                "Synced At",
                "Active", 
                "",
              ]}
            />
            <TableBody>
              {vendors && vendors.length && vendors.map((item, i) => (
                <TableRow
                  key={item._id}
                  even={i % 2 === 0}
                >
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.companyName}</TableCell>
                  <TableCell>
                    <Flag code={item?.country} className="w-6 inline-block" alt={item?.country} />
                  </TableCell>
                  <TableCell>{item?.currency}</TableCell>
                  <TableCell>{item?.articlesCount}</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </TableCell>
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

export default Vendors