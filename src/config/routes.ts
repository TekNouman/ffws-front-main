import { authCards, authRoute } from 'layouts/Auth/cards';
import { teamCards, teamRoute } from 'layouts/Team/cards';
import { generateCardsRoutes } from 'utils/routes';

export const routes = {
  notImplemented: '/',
  home: '/',
  auth: authRoute,
  ...generateCardsRoutes(authCards),
  lobby: '/lobby',
  team: teamRoute,
  ...generateCardsRoutes(teamCards),
  waitingRoom: '/waiting-room',
  office: '/office',
  officeTeam: '/office/team',
  officeLeague: '/office/league',
  draft: '/draft',
};
