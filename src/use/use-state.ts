import { computed, ref } from 'vue';
import { Playlist, State, User } from '../types';

type TokenInfo = {
  token: string;
  type: string;
  expiresIn: number;
};

const state = ref<State>({
  user: null,
  tokenInfo: null,
  authenticated: false,
  playlists: [],
});

const tokenString = computed(() => {
  const { tokenInfo } = state.value;
  return tokenInfo ? `${tokenInfo.type} ${tokenInfo.token}` : '';
});

function authenticate({ token, type, expiresIn }: TokenInfo): void {
  state.value = {
    ...state.value,
    tokenInfo: { token, type, expiresIn },
    authenticated: true,
  };
}

function updateUser(user: null | User): void {
  state.value = { ...state.value, user };
}

function updateUserPlaylists(playlists: Playlist[]): void {
  state.value = { ...state.value, playlists };
}

export default () => ({
  state: state.value,
  token: tokenString,
  authenticate,
  updateUser,
  updateUserPlaylists,
});
