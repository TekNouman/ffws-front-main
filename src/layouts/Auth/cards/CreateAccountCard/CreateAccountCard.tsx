import * as React from 'react';

import { routes } from 'config/routes';
import { links } from 'config/links';
import EmailSentCard from 'layouts/Auth/cards/EmailSentCard';
import Card from 'components/Card';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import {
  CardName,
  InputGroup,
  FlexColumn,
  CheckboxesWrapper,
  ButtonsWrapper,
  ButtonsGroup,
  ExternalLink,
} from 'components/ui';

import { useSignUp } from './useSignUp';

const CreateAccountCard: React.FC = () => {
  const { formik, success, loading } = useSignUp();

  if (success) {
    return <EmailSentCard />;
  }

  return (
    <Card withPadding>
      <CardName>Create Account</CardName>
      <FlexColumn>
        <InputGroup>
          <Input
            withMargin
            label="First name"
            name="given-name"
            formik={formik}
          />
          <Input label="Last name" name="family-name" formik={formik} />
        </InputGroup>
        <Input label="Email" name="email" formik={formik} />
        <Input password label="Password" name="password" formik={formik} />
        <CheckboxesWrapper>
          <Checkbox
            name="terms"
            formik={formik}
            label={
              <span>
                I accept{' '}
                <ExternalLink href={links.terms} target="_blank">
                  Terms of Service
                </ExternalLink>
              </span>
            }
          />
          <Checkbox
            name="personal-data"
            label="I agree to the processing of my personal data"
            formik={formik}
          />
        </CheckboxesWrapper>
      </FlexColumn>
      <ButtonsWrapper>
        <ButtonsGroup>
          <Button withMargin secondary href={routes.signin}>
            Already have an account?
          </Button>
          <Button primary onClick={formik.submitForm} isLoading={loading}>
            Sign Up
          </Button>
        </ButtonsGroup>
      </ButtonsWrapper>
    </Card>
  );
};

export default React.memo(CreateAccountCard);
