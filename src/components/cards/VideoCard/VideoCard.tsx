import * as React from 'react';

import Card from 'components/Card';

import { VideoWrapper, StyledVideo } from './styles';
import videoImg from './images/main-poster.jpg';
import videoWebm from './videos/main.webm';
import videoMpeg from './videos/main.mp4';

type Props = {
  fullWidth?: boolean;
  absolute?: boolean;
};

const VideoCard: React.FC<Props> = ({
  fullWidth = false,
  absolute = false,
}: Props) => {
  return (
    <Card fullWidth={fullWidth} absolute={absolute}>
      <VideoWrapper>
        <StyledVideo poster={videoImg}>
          <source src={videoMpeg} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </StyledVideo>
      </VideoWrapper>
    </Card>
  );
};

export default React.memo(VideoCard);
