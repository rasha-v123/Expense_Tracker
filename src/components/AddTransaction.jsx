import React, { useState } from "react";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    text: "",
    amount: 0,
  });

  function handleTransaction(e) {
    setTransaction((prevTransaction) => {
      return {
        ...prevTransaction,
        [e.target.name]:
          e.target.name === "amount"
            ? parseFloat(e.target.value)
            : e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTransaction(transaction);
    console.log(transaction);
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={transaction.text}
            onChange={handleTransaction}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleTransaction}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
