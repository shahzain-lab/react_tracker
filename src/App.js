import React from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { TransSummary } from './component/TransSummary';
import { TransHistory } from './component/TransHistory';
import { AddTransaction } from './component/addTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="Zain">
      <Header />
      <is className="style">
      <Balance />
      <TransSummary />
      <TransHistory />
      <AddTransaction />
      </is>
    </div>
    <h3 className="copyright">2020&copy; copyright.All right reserved</h3>
    </GlobalProvider>
  );
}

export default App;
