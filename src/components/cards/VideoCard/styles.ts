import styled from 'styled-components';

export const VideoWrapper = styled.div`
  overflow: hidden;
`;

export const StyledVideo = styled.video.attrs({
  controls: false,
  autoPlay: true,
  muted: true,
  loop: true,
})``;
