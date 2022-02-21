import { makeObservable, observable } from "mobx";
import RootStore from "../root-store";

export default class UserStore {
    id: number = 1;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this, {
            id: observable,
        });
    }

}
