import { Genre } from './types';

// eslint-disable-next-line import/prefer-default-export
export const genres: Genre[] = [
  {
    id: new Date().getTime(),
    name: 'Shortcuts',
    playlists: [
      {
        id: new Date().getTime(),
        title: 'Rock Classic',
        descritpion:
          'Rock legends and epic songs that continue to inspire generations.',
        thumbnailUrl:
          'https://i.scdn.co/image/ab67706f00000003519fc8771d90f496501a4da3',
      },
      {
        id: new Date().getTime(),
        title: 'Christmas Hits',
        descritpion: 'The biggest Christmas songs of all time.',
        thumbnailUrl:
          'https://i.scdn.co/image/ab67706f00000002f04cbd323e0edd1b19ef58bb',
      },
      ...Array.from({ length: 10 }, (x, i) => ({
        id: new Date().getTime(),
        title: `Hits ${i + 1}`,
        descritpion: `Descriptions ${i + 1}`,
        thumbnailUrl:
          'https://i.scdn.co/image/ab67706f00000002f04cbd323e0edd1b19ef58bb',
      })),
    ],
  },
  {
    id: new Date().getTime(),
    name: 'Recently Played',
    playlists: [
      {
        id: new Date().getTime(),
        title: '00s Rock Anthems',
        descritpion: 'Thesee songs rocked the 00s. Cover: Linkin Park',
        thumbnailUrl:
          'https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6',
      },
      ...Array.from({ length: 10 }, (x, i) => ({
        id: new Date().getTime(),
        title: `00s Rock Anthem ${i + 1}`,
        descritpion: `Thesee songs rocked the 00s. Cover: Linkin Park ${i + 1}`,
        thumbnailUrl:
          'https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6',
      })),
    ],
  },
];
