import * as React from 'react';

import { OfficeTeamType } from 'typings/teams';
import {
  TeamLogo,
  FlexAlign,
  FlexColumn,
  InlineFlexAlign,
  TeamName,
  UserName,
} from 'components/ui';
import AvatarPic from 'components/AvatarPic';

type Props = {
  team: OfficeTeamType;
};

const UserTeamInfo: React.FC<Props> = ({ team }: Props) => {
  return (
    <FlexAlign>
      <TeamLogo img={team.logo || ''}>{team.logo ? '' : team.name[0]}</TeamLogo>
      <FlexColumn>
        <TeamName>{team.name}</TeamName>
        <InlineFlexAlign>
          <AvatarPic img={team.owner?.userPic} name={team.owner?.name || ''} />
          <UserName>{team.owner?.name}</UserName>
        </InlineFlexAlign>
      </FlexColumn>
    </FlexAlign>
  );
};

export default UserTeamInfo;
