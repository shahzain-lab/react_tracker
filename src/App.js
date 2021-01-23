import React from 'react';
import { Balance } from './component/Balance';
import { Header } from './component/Header';
import './App.css';
import { Summary } from './component/TransSummary';
import { AddTrans } from './component/addTransaction';
import { History } from './component/TransHistory';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <Summary />
      <History />
      <AddTrans />
    </div>
  </GlobalProvider>
  );
}

export default App;
