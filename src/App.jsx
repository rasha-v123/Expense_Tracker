import React, { useState } from "react";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GolbalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
      </div>
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
