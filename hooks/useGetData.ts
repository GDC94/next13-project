import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import { usePortfolioState } from "context/portfolioContext";
import { getCharactersUrl } from "services";
import { allCharactersFetcher } from "services/fetchers";

export const useGetData = () => {
  const { portolioState } = usePortfolioState();
  const { userKey } = portolioState;

  //Deberia hacer el fetch? El shouldFetch hara la peticion si efectivamente existe un userKey cuando levantamos la app-
  const shouldFetch = !!userKey;

  const API_URL = getCharactersUrl("api");

  const { data, error, isLoading } = useSWRWrapper({
    key: API_URL,
    shouldFetch,
    fetcher: async () => allCharactersFetcher([API_URL]),
  });

  return {
    domain: data,
    error,
    isLoading,
  };
};

export default useGetData;
