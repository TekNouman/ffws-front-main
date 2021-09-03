import * as React from 'react';

import UserList from 'components/lists/UserList';
import { HalfCard, HalfCardHeader } from 'components/ui';
import { mockInvitationalListConfig } from 'config/mocks/mockInvitationalListConfig';

const InvitationalList: React.FC = () => (
  <HalfCard withGap>
    <HalfCardHeader>Invitational</HalfCardHeader>
    <UserList userList={mockInvitationalListConfig} />
  </HalfCard>
);

export default InvitationalList;
