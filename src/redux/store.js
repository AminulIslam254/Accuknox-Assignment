import { legacy_createStore } from "redux";
import reducers from './reducers/Index.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
// const store = legacy_createStore(reducers,
//     {},
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
let store = legacy_createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }