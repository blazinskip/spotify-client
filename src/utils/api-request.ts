import useState from '../use/use-state';

type ApiResponse<T> = {
  status: number;
  result: T;
};

const { token } = useState();

export async function apiRequest<T>(
  url: string,
  authenticated = true
): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    headers: new Headers(authenticated ? { Authorization: token.value } : {}),
  });

  const result: T = await response.json();

  return {
    result,
    status: response.status,
  };
}
