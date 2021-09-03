import * as React from 'react';

import { DropdownQueryType } from 'typings/filters';
import { PositionQueryEnum, positionQueries } from 'config/positions';
import { SeasonQueryEnum, seasonQueries } from 'config/seasons';

export type PlayerSearchType = {
  positionQuery: PositionQueryEnum;
  setPositionQuery: (query: PositionQueryEnum) => void;
  positionQueries: Record<PositionQueryEnum, DropdownQueryType>;
  seasonQuery: SeasonQueryEnum;
  setSeasonQuery: (query: SeasonQueryEnum) => void;
  seasonQueries: Record<SeasonQueryEnum, DropdownQueryType>;
  handleSearch: () => void;
  isLoading: boolean;
};

export const usePlayersSearch = (): PlayerSearchType => {
  const [positionQuery, setPositionQuery] = React.useState(
    PositionQueryEnum.all
  );

  const [seasonQuery, setSeasonQuery] = React.useState(SeasonQueryEnum.s2021);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    // eslint-disable-next-line no-console
    console.log(
      positionQueries[positionQuery].query,
      seasonQueries[seasonQuery].query
    );
    setTimeout(() => setIsLoading(false), 2000);
  };

  return {
    positionQueries,
    positionQuery,
    setPositionQuery,
    seasonQueries,
    seasonQuery,
    setSeasonQuery,
    handleSearch,
    isLoading,
  };
};
