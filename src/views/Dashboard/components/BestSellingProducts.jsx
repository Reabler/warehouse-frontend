import * as React from "react";
import { linearGradientDef } from '@nivo/core'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "rgb(0,0,0)",
    "data": [
      {
        "x": "1",
        "y": 286
      },
      {
        "x": "2",
        "y": 240
      },
      {
        "x": "3",
        "y": 260
      },
      {
        "x": "4",
        "y": 222
      },
      {
        "x": "5",
        "y": 187
      },
      {
        "x": "6",
        "y": 238
      },
      {
        "x": "7",
        "y": 290
      },
      {
        "x": "8",
        "y": 250
      },
      {
        "x": "9",
        "y": 210
      },
      {
        "x": "10",
        "y": 190
      },
      {
        "x": "11",
        "y": 270
      },
      {
        "x": "12",
        "y": 232
      },
    ]
  }
]

export default ({
}) => {
  return (
    <div className="h-full">
      <ResponsiveLine
          data={data}
          margin={0}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: '0', max: 'auto', stacked: true, reverse: false }}
          yFormat=" >-.2f"
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          borderColor="#000"
          defs={[
            linearGradientDef('gradient', [
              { offset: 0, color: '#000000' },
              { offset: 0, color: 'rgba(0,0,0,.2)' },
              { offset: 100, color: 'transparent' },
            ])
          ]}
          fill={[
            { match: { id: '*' }, id: 'gradient' },
          ]}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 0,
              tickRotation: 0,
              legend: '',
              legendOffset: -10,
              legendPosition: 'middle',
          }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={true}
          areaOpacity={1}
          useMesh={true}
          colors={['url(#gradient)']}
          theme={{
            fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
      />
      
    </div>
  )
}