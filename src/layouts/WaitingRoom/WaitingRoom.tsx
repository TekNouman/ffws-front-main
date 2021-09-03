import * as React from 'react';

import { routes } from 'config/routes';
import Page from 'components/Page';
import Navigation from 'components/Navigation';
import PageHeaderCard from 'components/cards/PageHeaderCard';
import { colors } from 'styles/colors';

import EditTeam from './components/EditTeam';
import TeamsTable from './components/TeamsTable';
import Info from './components/Info';
import { Top } from './styles';

const WaitingRoom: React.FC = () => {
  const [currentTeamID, setCurrentTeamID] = React.useState<
    string | number | undefined
  >(undefined);

  const breadcrumbs = [
    {
      title: 'Lobby',
      route: routes.lobby,
    },
    {
      title: 'BBQ',
      route: routes.notImplemented,
    },
  ];

  return (
    <Page>
      <Top>
        <Navigation absolute />
        <PageHeaderCard
          title="Waiting Room"
          breadcrumbs={breadcrumbs}
          color={colors.headerBlue}
        />
      </Top>
      <Info />
      <TeamsTable setCurrentTeamID={setCurrentTeamID} />
      <EditTeam
        currentTeamID={currentTeamID}
        onClose={() => setCurrentTeamID(undefined)}
      />
    </Page>
  );
};

export default WaitingRoom;
