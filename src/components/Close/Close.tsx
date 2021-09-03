import * as React from 'react';
import Link from 'next/link';

import CloseIcon from './icons/close.component.svg';
import { Wrapper } from './styles';

type Props = {
  onClose?: () => void;
  href?: string;
  modal?: boolean;
};

const Close: React.FC<Props> = ({ onClose, href, modal = false }: Props) => {
  if (href) {
    return (
      <Link href={href}>
        <Wrapper modal={modal}>
          <CloseIcon />
        </Wrapper>
      </Link>
    );
  }
  return (
    <Wrapper onClick={onClose} modal={modal}>
      <CloseIcon />
    </Wrapper>
  );
};

export default Close;
