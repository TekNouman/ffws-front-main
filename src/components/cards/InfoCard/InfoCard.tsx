import * as React from 'react';

import Card from 'components/Card';
import { SecondaryTextColor } from 'components/ui';
import { colors } from 'styles/colors';

import { Title } from './styles';

type Props = {
  children?: React.ReactNode;
  title: string;
  info?: string;
};

const InfoCard: React.FC<Props> = ({ title, info, children }: Props) => {
  return (
    <Card fullWidth fullHeight small color={colors.blackPanel}>
      <Title withMargin>
        {title}
        {info && <SecondaryTextColor>&nbsp;•&nbsp;{info}</SecondaryTextColor>}
      </Title>
      {children}
    </Card>
  );
};

export default InfoCard;
