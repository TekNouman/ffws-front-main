import * as React from 'react';

import Card from 'components/Card';
import { colors } from 'styles/colors';

const ChatCard: React.FC = () => (
  <Card
    fullWidth
    fullHeight={false}
    small
    withPadding
    color={colors.blackPanel}
  ></Card>
);

export default ChatCard;
