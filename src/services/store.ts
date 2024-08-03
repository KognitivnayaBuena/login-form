import React, { useState, createContext, useContext, ReactNode } from "react";

type StoreContextType = {
  user: any;
  updateUser: (user: any) => void
}

const StoreContext: StoreContextType = {
  user: null,
  updateUser: () => {},
};
const Store = createContext<StoreContextType>(StoreContext);
export const useStore = (): React.Context<StoreContextType> => createContext(StoreContext);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const value = {
    user,
    updateUser: setUser,
  };

  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
  // return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;

};
