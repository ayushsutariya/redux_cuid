import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import all_reducers from "./Reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter']
}

const persistedReducer = persistReducer(persistConfig, all_reducers)

  const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
  );
  let persistor = persistStore(store)
  //return { store, persistor }


root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
);

