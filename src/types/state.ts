import { Playlist } from './spotify';
import { User } from './user';

type TokenInfo = {
  token: string;
  type: string;
  expiresIn: number;
};

export interface State {
  user: null | User;
  tokenInfo: null | TokenInfo;
  authenticated: boolean;
  playlists: Playlist[];
}
