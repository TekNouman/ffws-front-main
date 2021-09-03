import * as React from 'react';
import { ComposedChart, Area } from 'recharts';

import { rem } from 'utils/markup';

import { Wrapper } from './styles';

type Props = {
  values: number[];
};

const chartDataFromValues = (values: number[]) => {
  const max = Math.max(...values);
  return [
    { uv: 0, pv: 0 },
    ...values.map((v, i) => ({
      uv: v,
      pv: max / values.length - 1 * i,
    })),
    { uv: 0, pv: 100 },
  ];
};

const Chart: React.FC<Props> = ({ values }: Props) => {
  return (
    <Wrapper width="120%" height="100%">
      <ComposedChart
        width={100}
        height={100}
        data={chartDataFromValues(values)}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="16%" stopColor="#000000" />
            <stop offset="82%" stopColor="rgba(229, 85, 120, 0)" />
          </linearGradient>
        </defs>
        <Area
          type="linear"
          dot={{
            stroke: '#E55578',
            strokeWidth: rem(1),
            fill: '#000',
            r: 5,
          }}
          dataKey="uv"
          fill="url(#colorUv)"
          stroke="#000"
        />
      </ComposedChart>
    </Wrapper>
  );
};

export default Chart;
