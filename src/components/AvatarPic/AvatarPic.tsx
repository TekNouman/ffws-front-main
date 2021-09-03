import * as React from 'react';

import { hslFromString } from 'utils/colors';

import { Wrapper } from './styles';

type Props = {
  online?: boolean;
  img?: string;
  name: string;
  withMargin?: boolean;
  contain?: boolean;
  big?: boolean;
};

const AvatarPic: React.FC<Props> = ({
  name,
  img,
  online = false,
  withMargin = true,
  contain = false,
  big = false,
}: Props) => {
  return (
    <Wrapper
      img={img}
      color={hslFromString(name)}
      online={online}
      withMargin={withMargin}
      contain={contain}
      big={big}
    >
      {!img && name[0]}
    </Wrapper>
  );
};

export default AvatarPic;
