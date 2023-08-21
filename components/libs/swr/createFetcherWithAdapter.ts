/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A factory function that creates a new fetcher function with an adapter inside.
 *
 * @typeparam T The type of data returned by the fetcher function.
 * @typeparam FArgs An array of types representing the arguments expected by the fetcher function.
 * @typeparam AArgs An array of types representing the arguments expected by the adapter function.
 * @typeparam XResp The type of data returned by the adapter function.
 *
 * @param CreateFetcherWithAdapterProps An object containing the fetcher and adapter functions.
 *
 * @returns A new fetcher function with an adapter inside.
 *
 * @example
 * const fetcher = async (url: string) => {
 *   const response = await fetch(url);
 *   return response.json();
 * };
 *
 * const adapter = (data: any) => {
 *   return {
 *     title: data.title,
 *     description: data.description,
 *   };
 * };
 *
 * const fetcherWithAdapter = CreateFetcherWithAdapterProps({
 *   fetcher,
 *   adapter,
 * });
 *
 * const result = await fetcherWithAdapter(['https://api.example.com/data']);
 * // result has type { title: string, description: string }
 */

interface CreateFetcherWithAdapterProps<
  T,
  FArgs extends any[],
  AArgs extends any[],
  XResp,
> {
  fetcher: (...args: FArgs) => Promise<T>;
  adapter?: (...args: [T, ...AArgs]) => XResp;
}

export const createFetcherWithAdapter = <
  T,
  FArgs extends any[],
  AArgs extends any[],
  XResp,
>({
  fetcher,
  adapter,
}: CreateFetcherWithAdapterProps<T, FArgs, AArgs, XResp>) => {
  return async (
    fetcherArgs: FArgs,
    adapterArgs: AArgs | undefined = undefined,
  ): Promise<XResp> => {
    const res = await fetcher(...fetcherArgs);

    if (adapter) {
      const adaptedData = adapter(res, ...(adapterArgs as AArgs));
      return adaptedData;
    }

    return res as unknown as XResp; 
  };
};

export default createFetcherWithAdapter;

