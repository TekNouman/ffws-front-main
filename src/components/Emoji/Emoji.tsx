import * as React from 'react';

import { Wrapper } from './styles';
import { EmojiEnum } from './config';

type Props = {
  emoji: EmojiEnum;
};

const Emoji: React.FC<Props> = ({ emoji }: Props) => <Wrapper emoji={emoji} />;

export default Emoji;
