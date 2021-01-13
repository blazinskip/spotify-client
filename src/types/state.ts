type TokenInfo = {
  token: string;
  type: string;
  expiresIn: number;
};

export interface State {
  tokenInfo: null | TokenInfo;
  authenticated: boolean;
}
