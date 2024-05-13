/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, useContext } from "react";
import { AppStoreAction } from "./AppStoreReducer";
import { AppStoreState, INITIAL_APP_STORE_STATE } from "./config";

/**
 * Instance of React Context to use as global AppStore
 */
export type AppContextReturningType = [AppStoreState, Dispatch<AppStoreAction>];
export const AppStoreContext = createContext<AppContextReturningType>([
  INITIAL_APP_STORE_STATE,
  () => null,
]);

/**
 * Hook to use the AppStore in functional components
 *
 * import {useAppStore} from './store'
 * ...
 * const [state, dispatch] = useAppStore();
 */
export const useAppStore = (): AppContextReturningType =>
  useContext(AppStoreContext);
