import * as React from 'react';

import UserList from 'components/lists/UserList';
import { HalfCard, HalfCardHeader } from 'components/ui';
import { mockLeaderboardListConfig } from 'config/mocks/mockLeaderboardListConfig';

const LeaderboardList: React.FC = () => (
  <HalfCard withGap>
    <HalfCardHeader>Leaderboard</HalfCardHeader>
    <UserList userList={mockLeaderboardListConfig} />
  </HalfCard>
);

export default LeaderboardList;
