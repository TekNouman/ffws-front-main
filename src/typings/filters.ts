import { PositionQueryEnum } from 'config/positions';
import { SeasonQueryEnum } from 'config/seasons';

export type DropdownQueryType = {
  label: string;
  query: PositionQueryEnum | SeasonQueryEnum;
};
