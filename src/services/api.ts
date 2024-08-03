export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
  if (response?.success) {
    return new Promise((res) => setTimeout(() => res(response), 450));
  } else {
    return new Promise((reject) => setTimeout(() => reject(response), 450));
  }
 
}