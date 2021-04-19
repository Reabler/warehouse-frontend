import * as React from "react";
import AutoSizer from 'react-virtualized-auto-sizer'
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 8405 },
  { quarter: 6, earnings: 14000 },
  { quarter: 7, earnings: 17000 },
];

export default () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["earnings"]}
      indexBy="quarter"
      enableGridX={false}
      enableGridY={false}
      theme={{background:'transparent'}}
      borderRadius={2}
      colors={'#000'}
      padding={0.70}
      enableLabel={false}
      animate={true}

    />
  )
}