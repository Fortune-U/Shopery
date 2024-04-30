import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';
import { configureStore } from '@reduxjs/toolkit';
// import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import priceRangeReducer from './features/priceRange';
import categorizeReducer from './features/categorize';
import ratingReducer from './features/rating';
import tagReducer from './features/tag';
import chatContolReducer from './features/chatControl';
import sideCartControlReducer from './features/sideCartControl';

 const store = configureStore({
  reducer: {
    priceRange : priceRangeReducer,
    categorize : categorizeReducer,
    rating : ratingReducer,
    tag : tagReducer,
    controlchat : chatContolReducer,
    controlsidecart : sideCartControlReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>,
    <Analytics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
