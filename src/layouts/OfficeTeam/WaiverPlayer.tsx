import * as React from 'react';

import {
  FlexColumn,
  PlayerLabel,
  SpinnerIcon,
  SecondaryTextColor,
} from 'components/ui';
import AvatarPic from 'components/AvatarPic';
import { PlayerType } from 'typings/players';

import CrossIcon from './icons/cross.component.svg';
import {
  WaiversCellWrapper,
  WaiversCell,
  WaiversPlayer,
  WaiversPrice,
  WaiversRemove,
  CrossWrapper,
} from './styles';

type Props = {
  player?: PlayerType;
  price?: number;
};

const WaiverPlayer: React.FC<Props> = ({ player, price }: Props) => {
  if (!player) {
    return (
      <WaiversCellWrapper>
        <WaiversCell>
          <WaiversPrice>
            <SecondaryTextColor>$&nbsp;0,00</SecondaryTextColor>
          </WaiversPrice>
          <WaiversPlayer>
            <SecondaryTextColor>Empty</SecondaryTextColor>
          </WaiversPlayer>
        </WaiversCell>
      </WaiversCellWrapper>
    );
  }

  const [loading, setLoading] = React.useState(false);
  const handleRemove = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <WaiversCellWrapper>
      <WaiversCell>
        {price && <WaiversPrice>${price.toFixed(2)}</WaiversPrice>}
        <WaiversPlayer>
          <AvatarPic img={player.pic} name={player.name} />
          <FlexColumn>
            <span>{player.name}</span>
            <PlayerLabel>{player.label}</PlayerLabel>
          </FlexColumn>
        </WaiversPlayer>
      </WaiversCell>
      <WaiversRemove onClick={loading ? undefined : handleRemove}>
        <CrossWrapper>{loading ? <SpinnerIcon /> : <CrossIcon />}</CrossWrapper>
      </WaiversRemove>
    </WaiversCellWrapper>
  );
};

export default WaiverPlayer;
