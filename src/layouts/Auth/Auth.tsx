import * as React from 'react';
import { useRouter } from 'next/router';

import CardsScreen from 'components/CardsScreen';
import VideoCard from 'components/cards/VideoCard';
import { getCardKey } from 'utils/routes';

import { authCards, AuthCardsEnum } from './cards';

const getAuthCardKey = (cardKey?: string | string[]) =>
  getCardKey(authCards, AuthCardsEnum.signup, cardKey);

const Auth: React.FC = () => {
  const router = useRouter();
  const { card } = router.query;
  const [activeCardKey, setActiveCardKey] = React.useState(
    getAuthCardKey(card)
  );

  React.useEffect(() => setActiveCardKey(getAuthCardKey(card)), [card]);

  return (
    <CardsScreen cards={[VideoCard, authCards[activeCardKey].component]} />
  );
};

export default React.memo(Auth);
