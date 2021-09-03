import * as React from 'react';

import { OfficeTeamType } from 'typings/teams';
import Card from 'components/Card';
import Button from 'components/Button';
import UserTeamInfo from 'components/UserTeamInfo';
import { InfoList, InfoLine, InfoTagButton } from 'components/ui';
import EditTeam from 'layouts/WaitingRoom/components/EditTeam';
import { generateTeamLeagueQuery } from 'utils/routes';
import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import { formatter } from 'utils/intl';

import { TeamInfoCardWrapper, ButtonsWrapper, TeamStatsCard } from './styles';

type Props = {
  team: OfficeTeamType;
};

const TeamInfoCard: React.FC<Props> = ({ team }: Props) => {
  const [currentTeamID, setCurrentTeamID] = React.useState<
    string | number | undefined
  >(undefined);

  return (
    <TeamInfoCardWrapper>
      <EditTeam
        currentTeamID={currentTeamID}
        onClose={() => setCurrentTeamID(undefined)}
      />
      <UserTeamInfo team={team} />
      <Card color={colors.blackContent} fullHeight={false} fullWidth>
        <ButtonsWrapper>
          <Button
            red
            small
            withMargin
            onClick={() => setCurrentTeamID(team.id)}
          >
            Edit Team
          </Button>
          <Button
            primary
            small
            href={
              routes.officeTeam +
              generateTeamLeagueQuery(team.id, team.league.id)
            }
          >
            Team Page
          </Button>
        </ButtonsWrapper>
      </Card>
      <TeamStatsCard>
        <Card color={colors.blackContent} fullHeight={false} fullWidth>
          <InfoList>
            <InfoLine>
              Total Points{' '}
              <InfoTagButton>{team.stats?.points.toFixed(2)}</InfoTagButton>
            </InfoLine>
            <InfoLine>
              Rank <InfoTagButton>{team.stats?.rank}</InfoTagButton>
            </InfoLine>
            <InfoLine>
              AQS <InfoTagButton>{team.stats?.aqs}</InfoTagButton>
            </InfoLine>
            <InfoLine>
              AWS <InfoTagButton>{team.stats?.aws}</InfoTagButton>
            </InfoLine>
            <InfoLine>
              QW <InfoTagButton>{team.stats?.qw}</InfoTagButton>
            </InfoLine>
          </InfoList>
        </Card>
      </TeamStatsCard>
      <TeamStatsCard>
        <Card color={colors.blackContent} fullHeight={false} fullWidth>
          <InfoList>
            <InfoLine>
              Waiver Dollars{' '}
              <InfoTagButton>
                {formatter.format(team.league.waiverDollars)}
              </InfoTagButton>
            </InfoLine>
          </InfoList>
        </Card>
      </TeamStatsCard>
    </TeamInfoCardWrapper>
  );
};

export default TeamInfoCard;
