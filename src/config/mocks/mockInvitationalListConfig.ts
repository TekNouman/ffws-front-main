import { UserListType } from 'typings/users';

export const mockInvitationalListConfig: UserListType = {
  withTotal: true,
  valuesNames: ['Q1', 'Q2', 'Q3', 'Q4'],
  items: [
    {
      listNumber: 1,
      user: {
        name: 'Albert Flores',
      },
      values: [10, 6, 7, 8],
    },
    {
      listNumber: 2,
      user: {
        name: 'Jerome Bell',
      },
      values: [7, 7, 8, 4],
    },
    {
      listNumber: 3,
      user: {
        name: 'Annette Black',
      },
      values: [1, 9, 4, 7],
    },
    {
      listNumber: 4,
      user: {
        name: 'Annette Black',
      },
      values: [5, 6, 7, 8],
    },
    {
      listNumber: 5,
      user: {
        name: 'Kathryn Murphy',
      },
      values: [4, 7, 3, 1],
    },
  ],
};
