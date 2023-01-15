import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CardList from './Components/CardList';
import PeopleProvider from './Context/PeopleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PeopleProvider>
    <CardList />
  </PeopleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
