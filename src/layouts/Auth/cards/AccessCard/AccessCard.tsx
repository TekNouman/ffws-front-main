import * as React from 'react';

import { routes } from 'config/routes';
import EmailSentCard from 'layouts/Auth/cards/EmailSentCard';
import Button from 'components/Button';
import Card from 'components/Card';
import Input from 'components/Input';
import {
  CardName,
  FlexColumn,
  ButtonsWrapper,
  ButtonsGroup,
} from 'components/ui';

import { useSignIn } from './useSignIn';

const AccessCard: React.FC = () => {
  const { formik, success, loading } = useSignIn();

  if (success) {
    return <EmailSentCard />;
  }

  return (
    <Card withPadding>
      <CardName>Access</CardName>
      <FlexColumn>
        <Input label="Email" name="email" formik={formik} />
        <Input password label="Password" name="password" formik={formik} />
      </FlexColumn>
      <ButtonsWrapper>
        <ButtonsGroup>
          <Button withMargin secondary href={routes.signup}>
            Do not have an account?
          </Button>
          <Button primary onClick={formik.submitForm} isLoading={loading}>
            Log In
          </Button>
        </ButtonsGroup>
        <Button href={routes['reset-password']}>Forgot password</Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default AccessCard;
