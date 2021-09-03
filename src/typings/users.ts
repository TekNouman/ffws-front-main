import { BalanceType } from 'typings/balance';

export type UserType = {
  id?: number;
  userPic?: string;
  name: string;
  online?: boolean;
  balance?: BalanceType;
};

export type UserListItemType = {
  listNumber: number;
  user: UserType;
  values: number[];
};

export type UserListType = {
  valuesNames: string[];
  withTotal?: boolean;
  items: UserListItemType[];
};
