import * as React from 'react';

import { DropdownQueryType } from 'typings/filters';
import { PositionQueryEnum, positionQueries } from 'config/positions';

export type PlayerSearchType = {
  positionQuery: PositionQueryEnum;
  setPositionQuery: (query: PositionQueryEnum) => void;
  positionQueries: Record<PositionQueryEnum, DropdownQueryType>;
  handleSearch: () => void;
  isLoading: boolean;
};

export const usePlayersSearch = (): PlayerSearchType => {
  const [positionQuery, setPositionQuery] = React.useState(
    PositionQueryEnum.all
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(positionQueries[positionQuery].query);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return {
    positionQueries,
    positionQuery,
    setPositionQuery,
    handleSearch,
    isLoading,
  };
};
