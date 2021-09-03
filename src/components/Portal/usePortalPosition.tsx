import * as React from 'react';

const PARENT_SCROLL_ELEMENT_ID = '__next';
export const CHILD_SCROLL_ELEMENT_PREFIX = 'scroll_';

const getScrollTop = (element: HTMLElement | null) => element?.scrollTop || 0;

const getRect = (element: HTMLElement | null) => {
  const elementRect = element?.getBoundingClientRect();
  return {
    top: elementRect?.top || 0,
    left: elementRect?.left || 0,
    right: elementRect?.right || 0,
    width: elementRect?.width || 0,
    height: elementRect?.height || 0,
  };
};

const getRefRect = (ref: React.RefObject<HTMLDivElement>) =>
  getRect(ref.current);

const getScrollElement = (scrollPortalID: string) =>
  document.getElementById(CHILD_SCROLL_ELEMENT_PREFIX + scrollPortalID);

const getParentScrollElement = () =>
  document.getElementById(PARENT_SCROLL_ELEMENT_ID);

const getTopInsideChildScrollContainer = (
  ref: React.RefObject<HTMLDivElement>,
  scrollPortalID: string
): number => {
  const scrollPortalElement = getScrollElement(scrollPortalID);
  return (
    getRefRect(ref).top -
    getRect(scrollPortalElement).top +
    getScrollTop(scrollPortalElement)
  );
};

const getTopInsideParentSrollContainer = (
  ref: React.RefObject<HTMLDivElement>
) => {
  const parentScrollElement = getParentScrollElement();
  const rect = getRefRect(ref);
  return rect.top + getScrollTop(parentScrollElement);
};

const getTopPosition = (
  ref: React.RefObject<HTMLDivElement>,
  scrollPortalID?: string
) =>
  scrollPortalID
    ? getTopInsideChildScrollContainer(ref, scrollPortalID)
    : getTopInsideParentSrollContainer(ref);

const getRightPosition = (rectRight: number) =>
  document.body.clientWidth - rectRight;

export const usePortalPosition = (scrollPortalID?: string) => {
  const [portalContainerPosition, setPortalContainerPosition] = React.useState([
    0, 0,
  ]);
  const [portalContainerSize, setPortalContainerSize] = React.useState([0, 0]);
  const portalContainerRef = React.useRef<HTMLDivElement>(null);

  const setPosition = (ref: React.RefObject<HTMLDivElement>) => {
    const rect = getRefRect(ref);
    setPortalContainerPosition([
      getTopPosition(ref, scrollPortalID),
      rect.left,
      getRightPosition(rect.right),
    ]);
    setPortalContainerSize([rect.width, rect.height]);
  };

  return {
    setPosition,
    portalContainerRef,
    portalContainerPosition,
    portalContainerSize,
  };
};
