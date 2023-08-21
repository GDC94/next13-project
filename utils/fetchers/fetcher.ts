import axios from "axios";
import { headersExplorer } from "typings/swrTypes";

/**
 * Utility: Is an asynchronous function to make the calls with swr-
 *
 * @param apiUrl
 * @param headers
 *
 * @return Promise
 */

const Fetcher = (
  apiUrl: string,
  config?: headersExplorer,
) => {
  return axios.get(apiUrl, config).then((res) => res.data);
};

export default Fetcher;