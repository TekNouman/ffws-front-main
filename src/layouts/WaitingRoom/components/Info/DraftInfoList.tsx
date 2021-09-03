import * as React from 'react';

import { WaitingRoomDraftInfoType } from 'typings/waitingRoom';

import {
  DraftInfoWrapper,
  DraftInfoLine,
  DraftInfoLabel,
  DraftInfoValue,
} from './styles';

type Props = {
  info: WaitingRoomDraftInfoType;
};

const DraftInfoList: React.FC<Props> = ({ info }: Props) => {
  return (
    <DraftInfoWrapper>
      <DraftInfoLine>
        <DraftInfoLabel>Draft Type</DraftInfoLabel>
        <DraftInfoValue>{info.draftType}</DraftInfoValue>
      </DraftInfoLine>
      <DraftInfoLine>
        <DraftInfoLabel>Scoring Type</DraftInfoLabel>
        <DraftInfoValue>{info.scoringType}</DraftInfoValue>
      </DraftInfoLine>
      <DraftInfoLine>
        <DraftInfoLabel>League Size</DraftInfoLabel>
        <DraftInfoValue>{info.leagueSize}</DraftInfoValue>
      </DraftInfoLine>
      <DraftInfoLine>
        <DraftInfoLabel>Player Universe</DraftInfoLabel>
        <DraftInfoValue>{info.playerUniverse}</DraftInfoValue>
      </DraftInfoLine>
    </DraftInfoWrapper>
  );
};

export default DraftInfoList;
