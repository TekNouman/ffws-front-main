import * as React from 'react';

import { routes } from 'config/routes';
import Card from 'components/Card';
import Button from 'components/Button';
import { CardName, CardMessage, ButtonsWrapper, MarkIcon } from 'components/ui';

const JoinedCard: React.FC = () => {
  return (
    <Card withPadding>
      <CardName>
        Done!
        <CardMessage>
          You have successfully <br />
          joined FFWS!
        </CardMessage>
      </CardName>
      <ButtonsWrapper>
        <Button primary href={routes.home}>
          Go to My Office
        </Button>
      </ButtonsWrapper>
      <MarkIcon />
    </Card>
  );
};

export default JoinedCard;
