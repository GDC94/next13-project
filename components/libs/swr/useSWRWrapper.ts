import useSWR, { SWRConfiguration } from "swr";

interface useSWRWrapperProps<T> {
  key: string;
  fetcher: () => Promise<T>;
  options?: SWRConfiguration;
  shouldFetch?: boolean;
}

/**
 * A custom hook that wraps the useSWR hook to provide a isLoading property for convenience.
 *
 * @param key - A unique key to identify the data being fetched.
 * @param shouldFetch - A boolean indicating whether the data should be fetched or not.
 * @param fetcher - A fetcher function to be called when fetching data.
 * @returns An object with the data, error, and isLoading properties.
 */
const useSWRWrapper = <T>({
  key,
  shouldFetch,
  fetcher,
  options,
}: useSWRWrapperProps<T>) => {
  const { isLoading, isValidating, data, mutate, error, ...rest } = useSWR<T>(
    shouldFetch ? key : null,
    fetcher,
    {
      ...options,
    },
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
    ...rest,
  };
};

export default useSWRWrapper;
