import * as React from 'react';
import { useDropzone } from 'react-dropzone';

import { routes } from 'config/routes';
import Button from 'components/Button';
import Card from 'components/Card';
import Input from 'components/Input';
import {
  CardName,
  CardMessage,
  FlexColumn,
  ButtonsWrapper,
  ButtonsGroup,
  SecondaryTextColor,
  TeamLogo,
  TeamLogoWrapper,
  UploadInfo,
} from 'components/ui';
import { mockAuthUser } from 'config/mocks/mockAuthUser';
import { mockEvent } from 'config/mocks/mockTeams';
import Emoji from 'components/Emoji';
import { EmojiEnum } from 'components/Emoji/config';

import { useCreateTeam } from './useCreateTeam';

const DetailsCard: React.FC = () => {
  const { formik } = useCreateTeam();

  const [preview, setPreview] = React.useState<string | null>(null);
  const onDrop = React.useCallback((acceptedFiles) => {
    setPreview(URL.createObjectURL(acceptedFiles[0]));
    formik.setFieldValue('logo', acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/jpeg, image/png',
    onDrop,
  });

  return (
    <Card withPadding>
      <CardName>
        Team Details
        <CardMessage>{mockEvent.description}</CardMessage>
      </CardName>
      <FlexColumn>
        <TeamLogoWrapper {...getRootProps()}>
          <TeamLogo img={preview}>
            {preview ? '' : mockAuthUser.name[0]}
          </TeamLogo>
          <div>
            <UploadInfo>
              <Emoji emoji={EmojiEnum.information} />
              You can upload a logo <br />
              for your league team
            </UploadInfo>
            <input {...getInputProps()} />
            <Button simple withArrow={false}>
              Upload Team Logo
            </Button>
          </div>
        </TeamLogoWrapper>
        <Input label="Team Name" name="team-name" formik={formik} />
      </FlexColumn>
      <ButtonsWrapper>
        <ButtonsGroup>
          <Button withMargin href={routes.choose}>
            Choose Existing Team
          </Button>
          <Button primary onClick={formik.submitForm}>
            Go to Payment •{' '}
            <SecondaryTextColor>{mockEvent.price}</SecondaryTextColor>
          </Button>
        </ButtonsGroup>
      </ButtonsWrapper>
    </Card>
  );
};

export default DetailsCard;
