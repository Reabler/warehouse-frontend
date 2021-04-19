import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaigns } from '../../store/reducers/campaignsReducer';

import Header from '../../components/Header';
import Drawer from '../../components/Drawer/Drawer';

import Table from '../../components/Table/Table';
import TableHead from '../../components/Table/TableHead';
import TableBody from '../../components/Table/TableBody';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';
import { ViewIcon } from '../../components/Icons/Buttons';

const Campaigns = () => {
  const campaigns = useSelector(state => state?.campaigns)
  const dispatch = useDispatch();
  const [previewIsVisible, setPreviewIsVisible] = useState(false)
  const [selectedCampaignId, setSelectedCampaignId] = useState()

  useEffect(() => {
    dispatch(getCampaigns())
  }, [])

  function showCampaignDetails(productId) {
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
        </Drawer>        

        <div className="max-w-full mx-auto">
          <Header title="Campaigns" />
          <Table>
            <TableHead
              cols={[
                "Code",
                "Description",
                "Type",
                "Discount",
                "Enabled",
                ""
              ]}
            />
              <TableBody>
                {campaigns?.length && campaigns.map((item, i) => (
                  <TableRow
                    key={item._id}
                    even={i % 2 === 0}
                  >
                    <TableCell>
                      <span className="text-sm tracking-wide font-mono">{item.code}</span>
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.campaignType}</TableCell>
                    <TableCell>{item.discount} {item.discountUnit}</TableCell>
                    <TableCell>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </TableCell>
                    <TableCell>
                      <a onClick={() => showCampaignDetails(item?._id)} className="text-black hover:text-brandColor">
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

export default Campaigns