import * as React from 'react';

import Page from 'components/Page';
import Navigation from 'components/Navigation';
import VideoCard from 'components/cards/VideoCard';
import InvitationalList from 'components/lists/InvitationalList';
import LeaderboardList from 'components/lists/LeaderboardList';

import ColorCards from './components/ColorsCards';
import Lobby from './components/Lobby';
import TV from './components/TV';
import {
  Top,
  VideoCardWrapper,
  StatsWrapper,
  MainListLinksWrapper,
  MainListLink,
} from './styles';
import { mainLinksList } from './config';

const Main: React.FC = () => {
  return (
    <Page>
      <Top>
        <Navigation absolute />
        <VideoCardWrapper>
          <VideoCard fullWidth absolute />
        </VideoCardWrapper>
      </Top>
      <StatsWrapper>
        <ColorCards />
        <Lobby />
      </StatsWrapper>
      <MainListLinksWrapper>
        {mainLinksList.map((item, i) => (
          <MainListLink key={i}>{item.name}</MainListLink>
        ))}
      </MainListLinksWrapper>
      <TV />
      <StatsWrapper>
        <InvitationalList />
        <LeaderboardList />
      </StatsWrapper>
    </Page>
  );
};

export default Main;
