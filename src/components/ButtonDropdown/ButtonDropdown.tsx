import * as React from 'react';

import Portal from 'components/Portal';
import { portals } from 'components/Portal/config';

import { Wrapper } from './styles';

type Props = {
  toggle?: boolean;
  tooltip?: boolean;
  linkList?: boolean;
  filterList?: boolean;
  children: React.ReactNode;
  top: number;
  left?: number;
  right?: number;
  width?: number;
  height: number;
  portalID?: string;
};

const ButtonDropdown: React.FC<Props> = ({
  children,
  toggle = false,
  tooltip = false,
  linkList = false,
  filterList = false,
  top = 0,
  left,
  right,
  width,
  height = 0,
  portalID = portals.page,
}: Props) => {
  return (
    <Portal portalID={portalID}>
      <Wrapper
        linkList={linkList}
        toggle={toggle}
        tooltip={tooltip}
        filterList={filterList}
        top={top}
        left={left}
        right={right}
        width={width}
        height={height}
      >
        {children}
      </Wrapper>
    </Portal>
  );
};

export default ButtonDropdown;
