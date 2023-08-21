import END_POINTS from "./endPoints";

export const getBaseUrl =
  (baseUrlAccounts: string) =>
  (url: string): string => {
    const API_URL = `${baseUrlAccounts}${url}`;
    return API_URL;
  };

export const getCharactersUrl = getBaseUrl(END_POINTS.CHARACTERS);
