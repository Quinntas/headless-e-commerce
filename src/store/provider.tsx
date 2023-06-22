"use client";

import {persistor, store} from "./store";
import {Provider} from "react-redux";
import {ReactNode} from "react";
import {PersistGate} from "redux-persist/integration/react";

export function Providers({children}: { children: ReactNode }) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
}
