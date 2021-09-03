import * as React from 'react';

import { routes } from 'config/routes';
import Card from 'components/Card';
import Input from 'components/Input';
import Button from 'components/Button';
import {
  CardName,
  CardMessage,
  FlexColumn,
  ButtonsWrapper,
  MarkIcon,
} from 'components/ui';

import { useResetPassword } from './useResetPassword';

const ResetPasswordCard: React.FC = () => {
  const { formik, success, loading } = useResetPassword();

  if (success) {
    return (
      <Card withPadding>
        <CardName>Password Reset</CardName>
        <ButtonsWrapper>
          <Button primary href={routes.signin}>
            Login Now
          </Button>
        </ButtonsWrapper>
        <MarkIcon />
      </Card>
    );
  }
  return (
    <Card withPadding>
      <CardName>
        Reset Password
        <CardMessage>
          Enter your email and we will send you a link to reset <br />
          your password.
        </CardMessage>
      </CardName>
      <FlexColumn>
        <Input label="Email" name="email" formik={formik} />
      </FlexColumn>
      <ButtonsWrapper>
        <Button primary onClick={formik.submitForm} isLoading={loading}>
          Send Link to Email
        </Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default ResetPasswordCard;
