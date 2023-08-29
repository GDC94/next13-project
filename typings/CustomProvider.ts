/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
  Provider,
  JSONRPCRequestPayload,
  JSONRPCResponsePayload,
} from "ethereum-protocol";

export interface CustomProvider extends Provider {
  on(event: string, handler: (data: any) => void): void;
  off(event: string, handler: (data: any) => void): void;
  send(payload: JSONRPCRequestPayload): void;
  sendAsync(
    payload: JSONRPCRequestPayload,
    callback: (error: null | Error, response: JSONRPCResponsePayload) => void,
  ): void;
  request(payload: Partial<JSONRPCRequestPayload>): Promise<any>;
  selectedAddress: string;
  networkVersion: number;
  chainId: string;
  isMetaMask: boolean;
  isPortal: boolean;
  isConnected: () => boolean;
  _metamask: {
    isUnlocked: () => Promise<boolean>;
  };
}
