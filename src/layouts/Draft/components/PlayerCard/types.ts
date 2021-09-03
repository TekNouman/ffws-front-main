import { PlayerType, PlayerInfoType } from 'typings/players';
import { PickQueueType } from 'layouts/Draft/components/PickQueue/usePickQueue';

export type PlayerCardProps = {
  modalPlayer: PlayerInfoType | null;
  onClose: () => void;
  handleAddToPickQueue: (player: PlayerType | PlayerInfoType) => void;
  handleRemoveFromPickQueue: (playerId: number) => void;
  pickQueue: PickQueueType;
  draftDisabled?: boolean;
};
