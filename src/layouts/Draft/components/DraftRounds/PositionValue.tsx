import * as React from 'react';

import Card from 'components/Card';
import { colors } from 'styles/colors';

import {
  PositionValueWrapper,
  PositionLabel,
  PositionValueNumber,
} from './styles';

type Props = {
  label: string;
  value: number;
  color: string;
  background: string;
};

const PositionValue: React.FC<Props> = ({
  label,
  value,
  color,
  background,
}: Props) => {
  return (
    <Card fullWidth fullHeight={false} color={colors.blackContent}>
      <PositionValueWrapper>
        <PositionLabel background={background} color={color}>
          {label}
        </PositionLabel>
        <PositionValueNumber>{value}</PositionValueNumber>
      </PositionValueWrapper>
    </Card>
  );
};

export default PositionValue;
