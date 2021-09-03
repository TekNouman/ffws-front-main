import * as React from 'react';

import { PicksRoundType } from 'typings/picks';
import { Flex } from 'components/ui';

import PickCard from './PickCard';
import { PickRoundSeparator, PickCardLabel, RoundValue } from './styles';

type Props = {
  picksRounds: PicksRoundType[];
};

const PicksList: React.FC<Props> = ({ picksRounds }: Props) => {
  return (
    <Flex>
      {picksRounds.map((round, i) => (
        <Flex key={`round-${round.step}-${i}`}>
          {round.picks.map((pick, j) => (
            <PickCard pick={pick} key={`pick-${pick.step}-${i}-${j}`} />
          ))}
          <PickRoundSeparator>
            <PickCardLabel>Round</PickCardLabel>
            <RoundValue>{round.step}</RoundValue>
          </PickRoundSeparator>
        </Flex>
      ))}
    </Flex>
  );
};

export default PicksList;
