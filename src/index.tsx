import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { songReducer} from './store/reducer/song'
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, compose, createStore, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export type RootState = ReturnType<typeof store.getState>;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers({ songReducer})  , applyMiddleware(thunk)
);
export type AppDispatch = typeof store.dispatch
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
