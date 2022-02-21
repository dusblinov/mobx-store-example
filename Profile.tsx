import { observer } from "mobx-react-lite";
import { useStore } from "stores/helpers/use-store";
import UserStore from "stores/data/user-store";

import GlobalView from "stores/ui/global-view";

interface FormValues {
    name: string;
}

export const Profile = observer((): JSX.Element => {
    const userStore = useStore<UserStore>((rootStore) => rootStore.dataStore.userStore) as UserStore;
    const globalView = useStore<GlobalView>((rootStore) => rootStore.uiStore.globalView) as GlobalView;

    if (globalView.isLoading) return <></>;
    return (
        <>
        User ID {userStore.id}
        </>
    );
});