import { ref } from 'vue';
import { State } from '../types';

export default () => {
  const state = ref<State>({
    token: '',
    authenticated: false,
  });

  function authenticate(token: string): void {
    state.value = {
      ...state.value,
      token,
      authenticated: true,
    };
  }

  // TODO: Refactor returns only value not modification
  return {
    state,
    authenticate,
  };
};
