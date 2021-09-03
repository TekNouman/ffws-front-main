import * as React from 'react';

import Card from 'components/Card';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { colors } from 'styles/colors';
import { FlexAlign, InlineFlexAlign, SearchQueryItem } from 'components/ui';
import ButtonDropdown from 'components/ButtonDropdown';
import { useButtonDropdown } from 'components/ButtonDropdown/useButtonDropdown';

import { SearchWrapper, SearchInner } from './styles';
import { PlayerSearchType } from './usePlayersSearch';

type Props = {
  search: PlayerSearchType;
};

const Search: React.FC<Props> = ({ search }: Props) => {
  const {
    isDropdownToggle: isPositionToggle,
    toggleDropdown: togglePosition,
    portalContainerPosition: positionPortalContainerPosition,
    portalContainerSize: positionPortalContainerSize,
    portalContainerRef: positionPortalContainerRef,
  } = useButtonDropdown();

  const {
    isDropdownToggle: isSeasonToggle,
    toggleDropdown: toggleSeason,
    portalContainerPosition: seasonPortalContainerPosition,
    portalContainerSize: seasonPortalContainerSize,
    portalContainerRef: seasonPortalContainerRef,
  } = useButtonDropdown();

  return (
    <SearchWrapper>
      <Card color={colors.blackPanel} fullWidth>
        <SearchInner>
          <FlexAlign>
            <div ref={seasonPortalContainerRef}>
              <Button
                blackBlurred
                rotateBottom
                toggle={isSeasonToggle}
                onClick={toggleSeason}
                isLoading={search.isLoading}
              >
                {search.seasonQueries[search.seasonQuery].label}
                <ButtonDropdown
                  toggle={isSeasonToggle}
                  top={seasonPortalContainerPosition[0]}
                  left={seasonPortalContainerPosition[1]}
                  width={seasonPortalContainerSize[0]}
                  height={seasonPortalContainerSize[1]}
                  filterList
                >
                  {Object.keys(search.seasonQueries).map((key) => {
                    const seasonQuery = search.seasonQueries[key];
                    return (
                      <SearchQueryItem
                        key={key}
                        onClick={() => search.setSeasonQuery(seasonQuery.query)}
                      >
                        {seasonQuery.label}
                      </SearchQueryItem>
                    );
                  })}
                </ButtonDropdown>
              </Button>
            </div>
            <div ref={positionPortalContainerRef}>
              <Button
                blackBlurred
                rotateBottom
                toggle={isPositionToggle}
                onClick={togglePosition}
                isLoading={search.isLoading}
              >
                <InlineFlexAlign>
                  {search.positionQueries[search.positionQuery].label}
                </InlineFlexAlign>
                <ButtonDropdown
                  toggle={isPositionToggle}
                  top={positionPortalContainerPosition[0]}
                  left={positionPortalContainerPosition[1]}
                  width={positionPortalContainerSize[0]}
                  height={positionPortalContainerSize[1]}
                  filterList
                >
                  {Object.keys(search.positionQueries).map((key) => {
                    const positionQuery = search.positionQueries[key];
                    return (
                      <SearchQueryItem
                        key={key}
                        onClick={() =>
                          search.setPositionQuery(positionQuery.query)
                        }
                      >
                        {positionQuery.label}
                      </SearchQueryItem>
                    );
                  })}
                </ButtonDropdown>
              </Button>
            </div>
          </FlexAlign>
          <Button withArrow={false} blackBlurred onClick={search.handleSearch}>
            <Emoji emoji={EmojiEnum.magnifying} /> Search
          </Button>
        </SearchInner>
      </Card>
    </SearchWrapper>
  );
};

export default React.memo(Search);
