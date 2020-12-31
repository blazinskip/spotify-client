import { Playlist } from './playlist';

export interface Genre {
  id: number;
  name: string;
  playlists: Playlist[];
}
