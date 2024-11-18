import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import popup from './slices/popup';
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import configuration from "./slices/configuration";

const persistAuth = {
  key: 'auth',
  storage,
  whitelist: ['user']
}

const persistConfiguration = {
  key: 'configuration',
  storage,
  whitelist: ['lang', 'theme']
};

const persistAuthReducer = persistReducer(persistAuth, auth);
const persistConfigurationReducer = persistReducer(persistConfiguration, configuration);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    popup,
    configuration: persistConfigurationReducer
  }
});

export const persistor = persistStore(store);