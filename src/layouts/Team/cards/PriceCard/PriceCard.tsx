import * as React from 'react';

import Button from 'components/Button';
import Card from 'components/Card';
import {
  CardName,
  CardMessage,
  ButtonsWrapper,
  SecondaryTextColor,
} from 'components/ui';
import { mockAuthUser } from 'config/mocks/mockAuthUser';
import { mockEvent } from 'config/mocks/mockTeams';
import { routes } from 'config/routes';

import {
  InfoWrapper,
  Balance,
  TopWrapper,
  BalanceTitle,
  BalanceValue,
  PriceList,
  PriceItem,
  PriceLabel,
  PriceValue,
} from './styles';

const PriceCard: React.FC = () => {
  return (
    <Card withPadding>
      <CardName>
        Team Details
        <CardMessage>{mockEvent.description}</CardMessage>
      </CardName>
      <InfoWrapper>
        <Balance>
          <TopWrapper>
            <BalanceTitle>Available Cash Balance</BalanceTitle>
            <Button simple small withArrow={false} href={routes.notImplemented}>
              Deposit
            </Button>
          </TopWrapper>
          <BalanceValue>
            ${(mockAuthUser.balance?.available || 0).toFixed(2)}
          </BalanceValue>
        </Balance>
        <PriceList>
          <PriceItem>
            <PriceLabel>{mockEvent.priceDescription}</PriceLabel>
            <PriceValue>{mockEvent.price}</PriceValue>
          </PriceItem>
          <PriceItem>
            <PriceLabel>Total</PriceLabel>
            <PriceValue>{mockEvent.price}</PriceValue>
          </PriceItem>
        </PriceList>
      </InfoWrapper>
      <ButtonsWrapper>
        <Button primary>
          Confirm Payment •{' '}
          <SecondaryTextColor>{mockEvent.price}</SecondaryTextColor>
        </Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default PriceCard;
