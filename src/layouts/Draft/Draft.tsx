import * as React from 'react';

import Page from 'components/Page';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import ChatCard from 'components/cards/ChatCard';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import Navigation from 'components/Navigation';
import DraftBoard from 'components/DraftBoard';
import { PageHeaderButtons } from 'components/ui';
import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import { links } from 'config/links';

import DraftRound from './components/DraftRounds';
import PickQueue from './components/PickQueue';
import Roster from './components/Roster';
import RosterLimits from './components/RosterLimits';
import Players from './components/Players';
import Picks from './components/Picks';
import PlayerCard from './components/PlayerCard';
import { Top, Main, Side, Center } from './styles';
import { useDraft } from './useDraft';

const Draft: React.FC = () => {
  const breadcrumbs = [
    {
      title: 'Waiting Room',
      route: routes.waitingRoom,
    },
  ];

  const {
    picksRounds,
    playerSearch,
    draftPlayers,
    pickQueue,
    handleRemoveFromPickQueue,
    handlePlayerClick,
    rosterList,
    picksList,
    handleQuater,
    draftBoard,
    quater,
    toggleDraftBoard,
    handleToggleDraftBoard,
    draftBoardRef,
    scrollToDraftBoard,
    draftBoardLoading,
    modalPlayer,
    handleCloseModalPlayer,
    handleAddToPickQueue,
  } = useDraft();

  return (
    <Page>
      <PlayerCard
        modalPlayer={modalPlayer}
        onClose={handleCloseModalPlayer}
        handleAddToPickQueue={handleAddToPickQueue}
        handleRemoveFromPickQueue={handleRemoveFromPickQueue}
        pickQueue={pickQueue}
      />
      <Top>
        <Navigation absolute />
        <PageHeaderCard
          title="Draft"
          color={colors.headerRed}
          breadcrumbs={breadcrumbs}
        >
          <PageHeaderButtons>
            <a href={links.tv} target="_blank">
              <Button blackBlurred withMargin withArrow={false}>
                <Emoji emoji={EmojiEnum.play} />
                Streaming
              </Button>
            </a>
            <Button
              blackBlurred
              withMargin
              withArrow={false}
              onClick={scrollToDraftBoard}
            >
              <Emoji emoji={EmojiEnum.page} />
              Draft Board
            </Button>
          </PageHeaderButtons>
        </PageHeaderCard>
      </Top>
      <DraftRound picksRounds={picksRounds} />
      <Main>
        <Side>
          <PickQueue
            pickQueue={pickQueue}
            handleRemoveFromPickQueue={handleRemoveFromPickQueue}
            handlePlayerClick={handlePlayerClick}
          />
          <Roster rosterList={rosterList} />
          <RosterLimits rosterList={rosterList} />
        </Side>
        <Center>
          <Players
            search={playerSearch}
            playersList={draftPlayers}
            handlePlayerClick={handlePlayerClick}
          />
        </Center>
        <Side>
          <Picks picksList={picksList} />
          <ChatCard />
        </Side>
      </Main>
      <DraftBoard
        handleQuater={handleQuater}
        draftBoard={draftBoard}
        quater={quater}
        toggleDraftBoard={toggleDraftBoard}
        handleToggleDraftBoard={handleToggleDraftBoard}
        draftBoardRef={draftBoardRef}
        draftBoardLoading={draftBoardLoading}
      />
    </Page>
  );
};

export default React.memo(Draft);
