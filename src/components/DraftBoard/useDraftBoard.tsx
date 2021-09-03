import * as React from 'react';

import { QuatersEnum, DraftBoardType } from 'typings/drafts';

export const useDraftBoard = (
  draftBoardsData: Record<QuatersEnum, DraftBoardType>,
  withShare = false
) => {
  const [quater, setQuater] = React.useState(QuatersEnum.q1);
  const [draftBoard, setDraftBoard] = React.useState(draftBoardsData[quater]);
  const [draftBoardLoading, setDraftBoardLoading] = React.useState(false);

  const handleQuater = (q: QuatersEnum) => {
    setDraftBoardLoading(true);

    setQuater(q);
    setDraftBoard(draftBoardsData[q]);

    setTimeout(() => setDraftBoardLoading(false), 2000);
  };

  const [toggleDraftBoard, setToggleDraftBoard] = React.useState(false);

  const handleToggleDraftBoard = () => setToggleDraftBoard((prev) => !prev);

  const draftBoardRef = React.useRef<HTMLDivElement>(null);

  const scrollToDraftBoard = () => {
    setToggleDraftBoard(true);
    draftBoardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return {
    handleQuater,
    draftBoard,
    quater,
    toggleDraftBoard,
    handleToggleDraftBoard,
    draftBoardRef,
    scrollToDraftBoard,
    withShare,
    draftBoardLoading,
  };
};
