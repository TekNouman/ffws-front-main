import * as React from 'react';
import { createPortal } from 'react-dom';

import { portals } from './config';

type Props = {
  children: React.ReactNode;
  portalID: string;
};

const Portal: React.FC<Props> = ({
  children,
  portalID = portals.page,
}: Props) => {
  const [container, setContainer] = React.useState<Element | null>(null);

  React.useEffect(() => {
    document && setContainer(document.getElementById(portalID));
  }, []);

  return container ? createPortal(children, container) : null;
};

export default Portal;
