import * as React from 'react';
import Link from 'next/link';

import UserTeamInfo from 'components/UserTeamInfo';
import Button from 'components/Button';
import Arrow from 'components/Button/components/Arrow';
import { OfficeTeamType } from 'typings/teams';
import { colors } from 'styles/colors';
import { routes } from 'config/routes';
import { generateTeamLeagueQuery } from 'utils/routes';
import EditTeam from 'layouts/WaitingRoom/components/EditTeam';
import { formatter } from 'utils/intl';
import { InfoList, InfoLine, InfoTagButton } from 'components/ui';

import { TeamInfoCard } from './styles';

type Props = {
  team: OfficeTeamType;
};

const TeamInfo: React.FC<Props> = ({ team }: Props) => {
  const [currentTeamID, setCurrentTeamID] = React.useState<
    string | number | undefined
  >(undefined);

  return (
    <TeamInfoCard color={colors.blackPanel} withGap withMargin>
      <EditTeam
        currentTeamID={currentTeamID}
        onClose={() => setCurrentTeamID(undefined)}
      />
      <UserTeamInfo team={team} />
      <div>
        <InfoList>
          <InfoLine>
            League&nbsp;
            <Link
              href={
                routes.officeLeague +
                generateTeamLeagueQuery(team.id, team.league.id)
              }
            >
              <InfoTagButton withArrow>
                {team.league.teamsCount}{' '}
                <Arrow
                  small
                  rotateBottom={false}
                  rotateTop={false}
                  reverse={false}
                />
              </InfoTagButton>
            </Link>
          </InfoLine>
          <InfoLine>
            Game Type <InfoTagButton>{team.league.name}</InfoTagButton>
          </InfoLine>
          <InfoLine>
            Waiver Dollars{' '}
            <InfoTagButton>
              {formatter.format(team.league.waiverDollars)}
            </InfoTagButton>
          </InfoLine>
        </InfoList>
        <Button red small onClick={() => setCurrentTeamID(team.id)}>
          Edit Team
        </Button>
      </div>
    </TeamInfoCard>
  );
};

export default TeamInfo;
