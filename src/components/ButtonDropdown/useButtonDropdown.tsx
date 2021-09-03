import * as React from 'react';

import { usePortalPosition } from 'components/Portal/usePortalPosition';

export const useButtonDropdown = (portalID?: string) => {
  const [isDropdownToggle, setIsDropdownToggle] = React.useState(false);
  const {
    setPosition,
    portalContainerRef,
    portalContainerPosition,
    portalContainerSize,
  } = usePortalPosition(portalID);

  const toggleDropdown = () => {
    setPosition(portalContainerRef);
    setIsDropdownToggle((prev) => !prev);
  };

  return {
    isDropdownToggle,
    toggleDropdown,
    portalContainerPosition,
    portalContainerSize,
    portalContainerRef,
  };
};
