import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import UseEffectEx from './UseEffectEx';
import UseEffectAxios from './UseEffectAxios';
import CreateContext from './CreateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyApp /> */}
    {/* <UseEffectEx /> */}
    {/* <UseEffectAxios /> */}
    <CreateContext />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
