import createFetcherWithAdapter from "components/libs/swr/createFetcherWithAdapter";
import Fetcher from "utils/fetchers/fetcher";

export const allCharactersFetcher = createFetcherWithAdapter({
  fetcher: Fetcher,
});
