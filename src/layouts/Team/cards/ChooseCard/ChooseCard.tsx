import * as React from 'react';

import { routes } from 'config/routes';
import Button from 'components/Button';
import Card from 'components/Card';
import AvatarPic from 'components/AvatarPic';
import {
  CardName,
  CardMessage,
  ButtonsWrapper,
  ButtonsGroup,
  SecondaryTextColor,
  TeamLogo,
} from 'components/ui';
import { mockAuthUser } from 'config/mocks/mockAuthUser';
import { mockEvent, mockAuthUserTeams } from 'config/mocks/mockTeams';

import { TeamList, TeamItem, TeamName, Owner, OwnerName } from './styles';

const ChooseCard: React.FC = () => {
  const [activeTeamID, setActiveTeamID] = React.useState<
    string | number | null
  >(null);

  return (
    <Card withPadding>
      <CardName>
        Team Details
        <CardMessage>{mockEvent.description}</CardMessage>
      </CardName>
      <TeamList>
        {mockAuthUserTeams.map((team) => {
          return (
            <TeamItem
              key={team.id}
              onClick={() => setActiveTeamID(team.id)}
              $active={activeTeamID === team.id}
            >
              <TeamLogo img={team.logo || ''} small>
                {team.logo ? '' : mockAuthUser.name[0]}
              </TeamLogo>
              <div>
                <TeamName $active={activeTeamID === team.id}>
                  {team.name}
                </TeamName>
                <Owner>
                  <AvatarPic
                    img={mockAuthUser.userPic}
                    name={mockAuthUser.name}
                  />
                  <OwnerName $active={activeTeamID === team.id}>
                    {mockAuthUser.name}
                  </OwnerName>
                </Owner>
              </div>
            </TeamItem>
          );
        })}
      </TeamList>
      <ButtonsWrapper>
        <ButtonsGroup>
          <Button withMargin secondary reverse href={routes.create}>
            Create New Team
          </Button>
          <Button primary href={routes.price} disabled={!activeTeamID}>
            Go to Payment •{' '}
            <SecondaryTextColor disabled={!activeTeamID}>
              {mockEvent.price}
            </SecondaryTextColor>
          </Button>
        </ButtonsGroup>
      </ButtonsWrapper>
    </Card>
  );
};

export default ChooseCard;
