import { makeObservable, observable } from "mobx";
import RootStore from "../root-store";
import { ThemeTypes } from "common/common";

export default class GlobalView {
    theme: ThemeTypes = "light";
    mainColorTheme: string | undefined;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            theme: observable,
            mainColorTheme: observable,
        });

    }
}
