import styled from 'styled-components';

import { colors } from 'styles/colors';
import { text16Mixin } from 'styles/mixins';
import { squareSides, urlContain, urlCover } from 'styles/templates';
import { rem } from 'utils/markup';

export const Wrapper = styled.div<{
  img?: string;
  online?: boolean;
  color: string;
  withMargin: boolean;
  contain: boolean;
  big?: boolean;
}>`
  ${squareSides(32)};
  border-radius: 50%;
  background: ${(props) =>
    props.img
      ? props.contain
        ? urlContain(props.img)
        : urlCover(props.img)
      : props.color};
  margin: ${(props) => (props.withMargin ? `0 ${rem(10)} 0 0` : 0)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  ${(props) => props.online && `border: ${rem(2)} solid ${colors.red}`};
  ${(props) => props.big && squareSides(137)}

  ${text16Mixin};
`;
