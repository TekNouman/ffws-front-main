import * as React from 'react';

import Card from 'components/Card';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { CardWrapper, InlineFlexAlign, SearchQueryItem } from 'components/ui';
import { colors } from 'styles/colors';
import ButtonDropdown from 'components/ButtonDropdown';
import { useButtonDropdown } from 'components/ButtonDropdown/useButtonDropdown';

import { PlayerSearchType } from './usePlayersSearch';
import { SearchButtonsWrapper } from './styles';

type Props = {
  search: PlayerSearchType;
};

const Search: React.FC<Props> = ({ search }: Props) => {
  const {
    isDropdownToggle,
    toggleDropdown,
    portalContainerPosition,
    portalContainerSize,
    portalContainerRef,
  } = useButtonDropdown();

  return (
    <CardWrapper>
      <Card fullWidth color={colors.blackPanel}>
        <SearchButtonsWrapper>
          <div ref={portalContainerRef}>
            <Button
              blackBlurred
              rotateBottom
              toggle={isDropdownToggle}
              onClick={toggleDropdown}
              isLoading={search.isLoading}
            >
              <InlineFlexAlign>
                {search.positionQueries[search.positionQuery].label}
              </InlineFlexAlign>
              <ButtonDropdown
                toggle={isDropdownToggle}
                top={portalContainerPosition[0]}
                left={portalContainerPosition[1]}
                width={portalContainerSize[0]}
                height={portalContainerSize[1]}
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
          <Button blackBlurred withArrow={false} onClick={search.handleSearch}>
            <Emoji emoji={EmojiEnum.magnifying} /> Search
          </Button>
        </SearchButtonsWrapper>
      </Card>
    </CardWrapper>
  );
};

export default Search;
