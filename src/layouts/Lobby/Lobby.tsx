import * as React from 'react';

import Page from 'components/Page';
import Navigation from 'components/Navigation';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { PageHeaderButtonDropdowns, InlineFlexAlign } from 'components/ui';
import ButtonDropdown from 'components/ButtonDropdown';
import { useButtonDropdown } from 'components/ButtonDropdown/useButtonDropdown';
import { colors } from 'styles/colors';
import { mockLobbyLeaguesDraftLists } from 'config/mocks/mockLobbyLeaguesDraftLists';
import DraftLists from 'components/lists/DraftLists';

import ActivePlayers from './components/ActivePlayers';
import { Top } from './styles';

const Lobby: React.FC = () => {
  const {
    isDropdownToggle,
    toggleDropdown,
    portalContainerPosition,
    portalContainerSize,
    portalContainerRef,
  } = useButtonDropdown();

  return (
    <Page>
      <Top>
        <Navigation absolute />
        <PageHeaderCard title="Lobby" color={colors.headerPink}>
          <PageHeaderButtonDropdowns>
            <div ref={portalContainerRef}>
              <Button
                blackBlurred
                rotateBottom
                toggle={isDropdownToggle}
                onClick={toggleDropdown}
              >
                <InlineFlexAlign>
                  <Emoji emoji={EmojiEnum.information} />
                  Learn more
                </InlineFlexAlign>
                <ButtonDropdown
                  toggle={isDropdownToggle}
                  tooltip
                  top={portalContainerPosition[0]}
                  left={portalContainerPosition[1]}
                  width={portalContainerSize[0]}
                  height={portalContainerSize[1]}
                >
                  A diam nibh amet mauris faucibus. Faucibus gravida amet,
                  elementum amet, vel tellus tellus in diam. Sit consectetur
                  massa cras quam facilisi dignissim elementum iaculis.
                  Penatibus lorem nam ac quisque nibh. Commodo elit a
                  pellentesque vel maecenas et.
                </ButtonDropdown>
              </Button>
            </div>
          </PageHeaderButtonDropdowns>
        </PageHeaderCard>
      </Top>
      <ActivePlayers />
      <DraftLists lists={mockLobbyLeaguesDraftLists} />
    </Page>
  );
};

export default React.memo(Lobby);
