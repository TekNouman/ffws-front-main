import * as React from 'react';

import Card from 'components/Card';
import { TransparentTextColor } from 'components/ui';
import { colors } from 'styles/colors';
import { BreadcrumbsType } from 'typings/pages';

import ArrowBack from './components/ArrowBack';
import { Title } from './styles';

type Props = {
  title: string;
  breadcrumbs?: BreadcrumbsType[];
  color?: string;
  children?: React.ReactNode;
};

const PageHeaderCard: React.FC<Props> = ({
  color = colors.purple,
  title,
  breadcrumbs,
  children,
}: Props) => {
  return (
    <Card fullWidth withOverflow fullHeight={false} color={color}>
      <Title small>
        {breadcrumbs && breadcrumbs?.length !== 0 && (
          <ArrowBack href={breadcrumbs[breadcrumbs.length - 1].route} />
        )}
        {breadcrumbs?.map((page, i) => (
          <TransparentTextColor key={i}>{page.title}/</TransparentTextColor>
        ))}
        {title}
      </Title>
      {children}
    </Card>
  );
};

export default PageHeaderCard;
