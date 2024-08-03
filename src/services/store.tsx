import React, { useState, createContext, useContext, FC, ReactNode } from "react";

import { User } from "../core/user";

export type State = "loading" | "success" | "error" | "default";

export interface UserStorageService {
  user?: User;
  state: State;
  updateUser(user: User): void;
}

const StoreContext = createContext<any>({});
export const useStore = () => useContext(StoreContext);

export function useUserStorage(): UserStorageService {
  return useStore();
}


type ProviderProps = { children: ReactNode };

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState();

  const value = {
    user,
    updateUser: setUser,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
};
