// https://uiwjs.github.io/react-heat-map/
// npm install @uiw/react-heat-map --save

'use client'

import React from 'react';
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2024/01/11', count:2 },
  { date: '2024/04/12', count:2 },
  { date: '2024/05/01', count:5 },
  { date: '2024/05/02', count:5 },
  { date: '2024/05/03', count:1 },
  { date: '2024/05/04', count:11 },
  { date: '2024/05/08', count:32 },
];

export function HeatMapDemo() {
  return (
    <HeatMap
      value={value}
      width={600}
      startDate={new Date('2024/01/01')}
      rectRender={(props, data) => {
        return (
          <Tooltip placement="bottom" content={`count: ${data.count || 0}`}>
            <rect {...props} />
          </Tooltip>
        );
      }}
    />
  )
}