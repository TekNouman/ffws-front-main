import * as React from 'react';
import Link from 'next/link';

import ArrowBackIcon from './icons/arrow-back.component.svg';
import { Wrapper } from './styles';

type Props = {
  href: string;
};

const ArrowBack: React.FC<Props> = ({ href }: Props) => {
  return (
    <Link href={href}>
      <Wrapper>
        <ArrowBackIcon />
      </Wrapper>
    </Link>
  );
};

export default ArrowBack;
