import * as React from 'react';
import { useRouter } from 'next/router';

import CardsScreen from 'components/CardsScreen';
import VideoCard from 'components/cards/VideoCard';
import { getCardKey } from 'utils/routes';

import { teamCards, TeamCardsEnum } from './cards';

const getTeamCardKey = (cardKey?: string | string[]) =>
  getCardKey(teamCards, TeamCardsEnum.create, cardKey);

const Team: React.FC = () => {
  const router = useRouter();
  const { card } = router.query;
  const [activeCardKey, setActiveCardKey] = React.useState(
    getTeamCardKey(card)
  );

  React.useEffect(() => setActiveCardKey(getTeamCardKey(card)), [card]);

  return (
    <CardsScreen cards={[VideoCard, teamCards[activeCardKey].component]} />
  );
};

export default React.memo(Team);
