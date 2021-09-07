import * as React from 'react';
import { useRouter } from 'next/router';

import Page from 'components/Page';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import Navigation from 'components/Navigation';
import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import Button from 'components/Button';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';
import { HeaderButtons, FlexJustifyBetween } from 'components/ui';
import DraftBoard from 'components/DraftBoard';
import { useDraftBoard } from 'components/DraftBoard/useDraftBoard';
import { mockOfficeTeam } from 'config/mocks/mockOfficeTeam';
import { mockStandingsTeams } from 'config/mocks/mockStandingsTeams';
import { mockDraftBoards } from 'config/mocks/mockDraftBoard';

import TeamInfoCard from './TeamInfoCard';
import StandingsCard from './StandingsCard';
import { Top } from './styles';

const OfficeLeague: React.FC = () => {
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

  return (
    <Page>
      <Top>
        <Navigation absolute />
        <PageHeaderCard
          title="League Page"
          color={colors.headerPureDarkPurple}
          breadcrumbs={breadcrumbs}
        >
          <HeaderButtons flexEnd absolute>
            <Button blurred withArrow={false} href={routes.notImplemented}>
              <Emoji emoji={EmojiEnum.link} /> Share
            </Button>
          </HeaderButtons>
        </PageHeaderCard>
      </Top>
      <FlexJustifyBetween>
        <TeamInfoCard team={mockOfficeTeam} />
        <StandingsCard/>
      </FlexJustifyBetween>
      <DraftBoard {...useDraftBoard(mockDraftBoards)} />
    </Page>
  );
};

export default OfficeLeague;
