import styled, { css } from 'styled-components';

import { rem } from 'utils/markup';
import { colors } from 'styles/colors';

export const Table = styled.table<{ withPadding?: boolean }>`
  width: 100%;
  border-spacing: 0 ${rem(4)};

  ${(props) => props.withPadding && `padding: 0 ${rem(5)}`}
`;

export const TableLineLabels = styled.tr``;

const tableCellModal = css`
  padding-left: ${rem(5)};
  padding-right: ${rem(5)};
`;

const withPaddingRightMixin = css`
  padding-left: 0;
  padding-right: ${rem(60)};
`;

const withPlayerWidthMixin = css`
  width: ${rem(500)};
`;

export const TableCellLabel = styled.th<{
  alignLeft?: boolean;
  alignRight?: boolean;
  narrow?: boolean;
  withArrow?: boolean;
  withPaddingRight?: boolean;
  withPlayerWidth?: boolean;
  modal?: boolean;
}>`
  text-align: center;
  ${(props) => props.alignLeft && 'text-align: left'};
  ${(props) => props.alignRight && 'text-align: right'};
  ${(props) => props.narrow && `width: ${rem(100)}`};

  padding-bottom: ${rem(8)};

  &:first-child {
    padding-left: ${rem(22)};
  }

  &:last-child {
    padding-right: ${rem(15)};
  }

  ${(props) => props.withArrow && `padding-left: ${rem(15)}`};
  ${(props) => props.modal && tableCellModal}
  ${(props) => props.withPaddingRight && withPaddingRightMixin}
  ${(props) => props.withPlayerWidth && withPlayerWidthMixin}
`;

const tableLineValuesDisableMixin = css`
  opacity: 0.3;
`;

export const TableLineValues = styled.tr<{ $disable?: boolean }>`
  margin: ${rem(4)} auto 0;
  overflow: hidden;
  vertical-align: middle;
  position: relative;

  &:nth-last-child(1) {
    & th:first-child {
      border-bottom-left-radius: ${rem(24)};
    }

    & th:last-child {
      border-bottom-right-radius: ${rem(24)};
    }
  }

  ${(props) => props.$disable && tableLineValuesDisableMixin}
`;

const highlightedWrapperMixin = css`
  &:before {
    content: '';
    height: 100%;
    width: ${rem(6)};
    position: absolute;
    left: 0;
    top: 0;
    background: ${colors.red};
    border-top-left-radius: ${rem(24)};
    border-bottom-left-radius: ${rem(24)};
  }
`;

const flexVerticalAlignMixin = css`
  display: flex;
  align-items: center;
`;

const disabledMixin = css`
  background: none;
  border-top: ${rem(1)} dashed ${colors.lightGray};
  border-bottom: ${rem(1)} dashed ${colors.lightGray};

  &:first-child {
    border-left: ${rem(1)} dashed ${colors.lightGray};
  }

  &:last-child {
    border-right: ${rem(1)} dashed ${colors.lightGray};
  }
`;

const arrowsMixin = css`
  background: none;
  padding: 0;

  &:first-child {
    padding-left: 0;
  }

  &:nth-child(2) {
    background: ${colors.blackContent};
    border-top-left-radius: ${rem(6)};
    border-bottom-left-radius: ${rem(6)};
    padding: 0 ${rem(10)};
  }
`;

const firstButtonMixin = css`
  &:first-child {
    padding: 0 0 0 ${rem(2)};
  }
`;

export const TableCellValue = styled.td<{
  highlighted?: boolean;
  disabled?: boolean;
  flexAlign?: boolean;
  withArrows?: boolean;
  withPaddingRight?: boolean;
  modal?: boolean;
  firstButton?: boolean;
}>`
  text-align: left;
  position: relative;
  background: ${(props) => (props.modal ? colors.purple : colors.blackContent)};
  padding: ${rem(15)} 0;

  &:first-child {
    border-top-left-radius: ${rem(6)};
    border-bottom-left-radius: ${rem(6)};
    padding-left: ${rem(15)};
  }

  &:last-child {
    border-bottom-right-radius: ${rem(6)};
    border-top-right-radius: ${rem(6)};
    padding-right: ${rem(15)};
  }

  ${(props) => props.highlighted && highlightedWrapperMixin}
  ${(props) => props.disabled && disabledMixin}
  ${(props) => props.flexAlign && flexVerticalAlignMixin}
  ${(props) => props.flexAlign && flexVerticalAlignMixin}
  ${(props) => props.withArrows && arrowsMixin}
  ${(props) => props.modal && tableCellModal}
  ${(props) => props.withPaddingRight && withPaddingRightMixin}
  ${(props) => props.firstButton && firstButtonMixin}
`;

export const THeadSticky = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${colors.blackPanel};
`;
