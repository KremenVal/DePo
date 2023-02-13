import React from 'react';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import App from "./components/app";
import reducerDevice from "./reducer/reducer-device";
import reducerShowed from "./reducer/reducer-showed";
import reducerShowedSelect from "./reducer/reducer-showed-select";
import reducerLanguage from "./reducer/reducer-language";
import reducerService from "./reducer/reducer-service";
import reducerCryptoSelect from "./reducer/reducer-crypto-select";
import reducerCryptoCurrency from "./reducer/reducer-crypto-currency";
import reducerSendReceive from "./reducer/reducer-send-receive";
import './index.css';

const root = createRoot(document.getElementById('root')),
    reducers = combineReducers({
        'device': reducerDevice,
        'show': reducerShowed,
        'select': reducerShowedSelect,
        'language': reducerLanguage,
        'service': reducerService,
        'crypto': reducerCryptoSelect,
        'currency': reducerCryptoCurrency,
        'sendReceive': reducerSendReceive,
    }),
    store = configureStore({
        'reducer': reducers,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
    });

root.render(<Provider store={store}><App/></Provider>);