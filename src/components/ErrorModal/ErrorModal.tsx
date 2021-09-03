import * as React from 'react';

import Close from 'components/Close';

import { Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  visible?: boolean;
  onClose: () => void;
};

const ErrorModal: React.FC<Props> = ({
  children,
  onClose,
  visible = false,
}: Props) => {
  return (
    <Wrapper visible={visible}>
      {children}
      <Close modal onClose={onClose} />
    </Wrapper>
  );
};

export default ErrorModal;
