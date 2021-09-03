import * as React from 'react';

import Footer from 'components/Footer';
import { PortalWrapper } from 'components/ui';
import { portals } from 'components/Portal/config';

import { PageWrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }: Props) => {
  return (
    <PageWrapper>
      <PortalWrapper id={portals.page} />
      {children}
      <Footer />
    </PageWrapper>
  );
};

export default Page;
