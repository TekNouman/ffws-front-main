import * as React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRouter } from 'next/router';

import Page from 'components/Page';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import Navigation from 'components/Navigation';
import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { WeeksEnum } from 'typings/drafts';
import { FlexJustifyBetween, HeaderButtons } from 'components/ui';
import {
  mockOfficeTeam,
  mockLastWaivers,
  mockRosterList,
  mockBenchList,
  mockWaivers,
  mockAvailablePlayers,
} from 'config/mocks/mockOfficeTeam';

import TeamInfo from './TeamInfo';
import LastWaivers from './LastWaivers';
import Roster from './Roster';
import Bench from './Bench';
import Waivers from './Waivers';
import Search from './Search';
import AvailablePlayers from './AvailablePlayers';
import TeamRoster from './TeamRoster';
import { weeksButtons } from './config';
import { usePlayersSearch } from './usePlayersSearch';
import {
  Top,
  WeeksButtons,
  LeftSide,
  RightSide,
  TablesScrollInner,
} from './styles';

const OfficeTeam: React.FC = () => {
  const router = useRouter();
  const { team: teamId, league: leagueId } = router.query;
  // eslint-disable-next-line no-console
  console.log({ teamId, leagueId });

  const breadcrumbs = [
    {
      title: 'My Office',
      route: routes.office,
    },
  ];

  const [week, setWeek] = React.useState(WeeksEnum.week1);
  const playersSearch = usePlayersSearch();

  const waiversRef = React.useRef<HTMLDivElement>(null);

  return (
    <Page>
      <Top>
        <Navigation absolute />
        <PageHeaderCard
          title="Team Page"
          color={colors.headerBrown}
          breadcrumbs={breadcrumbs}
        >
          <HeaderButtons>
            <WeeksButtons>
              {Object.keys(weeksButtons).map((weekKey) => (
                <Button
                  inline
                  blurred
                  smallBlurred
                  blurredActive={week === weekKey}
                  withArrow={false}
                  key={weekKey}
                  onClick={() => setWeek(weekKey as WeeksEnum)}
                >
                  {weeksButtons[weekKey]}
                </Button>
              ))}
            </WeeksButtons>
            <Button blurred withArrow={false} href={routes.notImplemented}>
              <Emoji emoji={EmojiEnum.link} /> Share
            </Button>
          </HeaderButtons>
        </PageHeaderCard>
      </Top>
      <FlexJustifyBetween>
        <TeamInfo team={mockOfficeTeam} />
        <LastWaivers lastWaivers={mockLastWaivers} waiversRef={waiversRef} />
      </FlexJustifyBetween>
      <Roster  />
      <Bench  />
      <Waivers waivers={mockWaivers} waiversRef={waiversRef} />
      <ScrollContainer horizontal className="scroll-container">
        <TablesScrollInner>
          <LeftSide>
            <Search search={playersSearch} />
            <AvailablePlayers />
          </LeftSide>
          <RightSide>
            <TeamRoster list={mockAvailablePlayers} />
          </RightSide>
        </TablesScrollInner>
      </ScrollContainer>
    </Page>
  );
};

export default OfficeTeam;
