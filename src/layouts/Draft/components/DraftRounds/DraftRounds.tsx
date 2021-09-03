import * as React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import Card from 'components/Card';
import { colors } from 'styles/colors';
import { PicksRoundType } from 'typings/picks';
import { mockDraftStarts } from 'config/mocks/mockDrafts';

import DraftInfo from './DraftInfo';
import DraftNow from './DraftNow';
import PicksList from './PicksList';
import { ScrollInner } from './styles';

type Props = {
  picksRounds: PicksRoundType[];
};

const DraftRounds: React.FC<Props> = ({ picksRounds }: Props) => {
  return (
    <Card fullWidth color={colors.blackPanel}>
      <ScrollContainer horizontal className="scroll-container">
        <ScrollInner>
          {mockDraftStarts.pickNow ? <DraftNow /> : <DraftInfo />}
          <PicksList picksRounds={picksRounds} />
        </ScrollInner>
      </ScrollContainer>
    </Card>
  );
};

export default DraftRounds;
