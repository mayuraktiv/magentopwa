import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage    
}

const reducers = combineReducers({
    db: rootReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default { store, persistor };