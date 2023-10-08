import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Amountreducer from './slices/accountSlices';
import RewardReducer from './Reducer/RewardReducer';
import { Provider } from 'react-redux';
import Bonusreducer from './slices/BonusSlice';
import { configureStore } from '@reduxjs/toolkit';
import { AdminApi } from './slices/AdminSlice';
const store=configureStore ({

  reducer:{
   account:Amountreducer,
     Bonus:Bonusreducer,
     reward:RewardReducer,
     [AdminApi.reducerPath]: AdminApi.reducer
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AdminApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
     <App store={store} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
