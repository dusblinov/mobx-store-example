import RootStore from "stores/root-store";
import UserStore from "./user-store";

export default class DataStore {
    userStore: UserStore;

    constructor(rootStore: RootStore) {
        this.userStore = new UserStore(rootStore);
    }
}
