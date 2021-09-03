import * as React from 'react';

import Page from 'components/Page';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import Navigation from 'components/Navigation';
import { colors } from 'styles/colors';

import { Top } from './styles';

const Office: React.FC = () => {
  return (
    <Page>
      <Top>
        <Navigation absolute />
        <PageHeaderCard
          title="My Office"
          color={colors.purple}
        ></PageHeaderCard>
      </Top>
    </Page>
  );
};

export default Office;
