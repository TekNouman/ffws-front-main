import { DraftListsType } from 'typings/drafts';

export const mockLobbyLeaguesDraftLists: DraftListsType = {
  valuesNames: ['#', 'Spots', 'Date', 'Time', 'Buy-in', 'Entry', 'Duration'],
  leagues: [
    {
      name: 'FFWS',
      id: 'ffws',
      drafts: [
        {
          id: 12,
          isOpen: true,
          values: ['12', '10/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 15,
          isOpen: false,
          values: ['15', '7/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 16,
          isOpen: true,
          values: ['16', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
    {
      name: 'Ben Franklin',
      id: 'benFranklin',
      drafts: [
        {
          id: 12,
          isOpen: true,
          values: ['12', '10/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 15,
          isOpen: false,
          values: ['15', '7/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 16,
          isOpen: true,
          values: ['16', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
    {
      name: 'PPR',
      id: 'ppr',
      drafts: [
        {
          id: 16,
          isOpen: false,
          values: ['16', '7/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 17,
          isOpen: true,
          values: ['17', '10/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 22,
          isOpen: true,
          values: ['22', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
    {
      name: 'BBQ',
      id: 'bbq',
      drafts: [
        {
          id: 12,
          isOpen: true,
          values: ['12', '10/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 15,
          isOpen: true,
          values: ['15', '10/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 16,
          isOpen: false,
          values: ['16', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
    {
      name: 'Super',
      id: 'super',
      drafts: [
        {
          id: 12,
          isOpen: true,
          values: ['12', '10/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 15,
          isOpen: true,
          values: ['15', '7/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 16,
          isOpen: true,
          values: ['16', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
    {
      name: 'Challanger',
      id: 'challanger',
      drafts: [
        {
          id: 12,
          isOpen: true,
          values: ['12', '10/10', '8/29', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 15,
          isOpen: true,
          values: ['15', '7/10', '8/30', '10pm EST', '$100', '144', 'Season'],
        },
        {
          id: 16,
          isOpen: true,
          values: ['16', '9/10', '8/31', '10pm EST', '$100', '144', 'Season'],
        },
      ],
    },
  ],
};
