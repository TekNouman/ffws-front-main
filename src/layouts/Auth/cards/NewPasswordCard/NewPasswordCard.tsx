import * as React from 'react';

import EmailSentCard from 'layouts/Auth/cards/EmailSentCard';
import Card from 'components/Card';
import Input from 'components/Input';
import Button from 'components/Button';
import { CardName, FlexColumn, ButtonsWrapper } from 'components/ui';

import { useNewPassword } from './useNewPassword';

const NewPasswordCard: React.FC = () => {
  const { formik, success, loading } = useNewPassword();

  if (success) {
    return <EmailSentCard />;
  }

  return (
    <Card withPadding>
      <CardName>New Password</CardName>
      <FlexColumn>
        <Input
          password
          label="New Password"
          name="new-password"
          formik={formik}
        />
        <Input
          password
          label="Confirm Password"
          name="confirm-password"
          formik={formik}
        />
      </FlexColumn>
      <ButtonsWrapper>
        <Button primary onClick={formik.submitForm} isLoading={loading}>
          Reset Password
        </Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default NewPasswordCard;
