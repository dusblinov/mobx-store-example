import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "stores/helpers/store-provider";
import { createStore } from "./stores/helpers/create-store";\

const rootStore = createStore();


const App = () => {
    return (
        <>app</>
    );
};

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={null}>
            <StoreProvider value={rootStore}>
                <App />
            </StoreProvider>
        </Suspense>
    </StrictMode>,
    document.getElementById("root")
);
