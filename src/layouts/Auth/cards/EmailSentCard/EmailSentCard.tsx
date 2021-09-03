import * as React from 'react';

import Card from 'components/Card';
import { CardName, CardMessage, MarkIcon } from 'components/ui';

const EmailSentCard: React.FC = () => {
  return (
    <Card withPadding>
      <CardName>
        Email Sent
        <CardMessage>
          Check your email and open the link <br />
          we sent to continue
        </CardMessage>
      </CardName>
      <MarkIcon />
    </Card>
  );
};

export default EmailSentCard;
