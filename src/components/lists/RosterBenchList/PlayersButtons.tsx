import * as React from 'react';

import Button from 'components/Button';
import ButtonDropdown from 'components/ButtonDropdown';
import { useButtonDropdown } from 'components/ButtonDropdown/useButtonDropdown';
import { RosterBenchPlayerType } from 'typings/drafts';
import { PlayerType } from 'typings/players';

import { PlayerButtonsWrapper, SwapPlayer } from './styles';

type Props = {
  remove: boolean;
  player: RosterBenchPlayerType;
  portalID: string;
};

const PlayersButtons: React.FC<Props> = ({
  remove,
  player,
  portalID,
}: Props) => {
  const {
    isDropdownToggle,
    toggleDropdown,
    portalContainerPosition,
    portalContainerSize,
    portalContainerRef,
  } = useButtonDropdown(portalID);

  const [swapLoading, setSwapLoading] = React.useState(false);

  const handleSwapClick = (swapPlayer: PlayerType) => {
    setSwapLoading(true);
    setTimeout(() => setSwapLoading(false), 2000);
    // eslint-disable-next-line no-console
    console.log({
      swapPlayer,
      remove,
    });
  };

  const [moveRemoveLoading, setMoveRemoveLoading] = React.useState(false);

  const handleMoveRemoveClick = (player: PlayerType) => {
    setMoveRemoveLoading(true);
    setTimeout(() => setMoveRemoveLoading(false), 2000);
    // eslint-disable-next-line no-console
    console.log({
      player,
      remove,
    });
  };

  return (
    <PlayerButtonsWrapper>
      <Button
        red
        listed
        onClick={
          moveRemoveLoading
            ? undefined
            : () => handleMoveRemoveClick(player.info)
        }
        withArrow={false}
        withPlusMinus
        minus={remove}
        isLoading={moveRemoveLoading}
      >
        {remove ? 'Remove' : 'Move to Bench'}
      </Button>
      <div ref={portalContainerRef}>
        <Button
          listed
          toggle={isDropdownToggle}
          rotateBottom
          onClick={swapLoading ? undefined : toggleDropdown}
          isLoading={swapLoading}
        >
          <span>Swap</span>
          <ButtonDropdown
            toggle={isDropdownToggle}
            top={portalContainerPosition[0]}
            right={portalContainerPosition[2]}
            height={portalContainerSize[1]}
            portalID={portalID}
          >
            {player.swapPlayers.map((swapPlayer, sp) => (
              <SwapPlayer
                key={'swap_player_' + sp}
                onClick={() => handleSwapClick(swapPlayer)}
              >
                Swap with {swapPlayer.name} (
                {swapPlayer.position?.toUpperCase()})
              </SwapPlayer>
            ))}
          </ButtonDropdown>
        </Button>
      </div>
    </PlayerButtonsWrapper>
  );
};

export default PlayersButtons;
