import * as React from 'react';
import { useDropzone } from 'react-dropzone';

import Card from 'components/Card';
import Close from 'components/Close';
import Button from 'components/Button';
import Input from 'components/Input';
import { TeamLogo, TeamLogoWrapper, ModalTitle } from 'components/ui';
import { mockAuthUserTeams } from 'config/mocks/mockTeams';
import { TeamType } from 'typings/teams';

import { Wrapper, CardModal, TeamName, ButtonWrapper } from './styles';
import { useChangeTeamName } from './useChangeTeamName';

type Props = {
  currentTeamID?: string | number;
  onClose: () => void;
};

const getTeam = (currentTeamID: string | number) =>
  mockAuthUserTeams.find((team) => team.id === currentTeamID);

const EditTeam: React.FC<Props> = ({ currentTeamID, onClose }: Props) => {
  const [currentTeam, setCurrentTeam] = React.useState<TeamType | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (!currentTeamID) {
      return;
    }

    setCurrentTeam(getTeam(currentTeamID));
  }, [currentTeamID]);

  const { formik } = useChangeTeamName();

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
    <Wrapper visible={Boolean(currentTeamID)}>
      <CardModal>
        <Card withPadding fullWidth fullHeight={false}>
          <Close onClose={onClose} />
          <ModalTitle>Edit Your Team</ModalTitle>
          {currentTeamID && (
            <>
              <TeamLogoWrapper {...getRootProps()}>
                <TeamLogo img={preview || currentTeam?.logo}>
                  {!preview &&
                    !currentTeam?.logo &&
                    currentTeam?.owner?.name[0]}
                </TeamLogo>
                <div>
                  <TeamName>{currentTeam?.name}</TeamName>
                  <input {...getInputProps()} />
                  <Button simple withArrow={false}>
                    Upload Team Logo
                  </Button>
                </div>
              </TeamLogoWrapper>
              <Input label="Nickname" name="team-name" formik={formik} />
              <ButtonWrapper>
                <Button primary onClick={formik.submitForm}>
                  Save
                </Button>
              </ButtonWrapper>
            </>
          )}
        </Card>
      </CardModal>
    </Wrapper>
  );
};

export default EditTeam;
