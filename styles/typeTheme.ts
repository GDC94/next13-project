import "@emotion/react";
import { MainTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends MainTheme, MainTheme {}
}
