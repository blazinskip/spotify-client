import { computed, ref } from 'vue';
import { State, User } from '../types';

type TokenInfo = {
  token: string;
  type: string;
  expiresIn: number;
};

const state = ref<State>({
  user: null,
  tokenInfo: null,
  authenticated: false,
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

export default () => ({
  state: state.value,
  token: tokenString,
  authenticate,
  updateUser,
});
