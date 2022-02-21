import { createContext } from "react";
import RootStore from "../root-store";
import { configure } from "mobx";

configure({
    enforceActions: "observed",
    useProxies: "never"
});

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
