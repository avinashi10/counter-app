// LIBRARY IMPORTS
import React, { useState } from "react";

export default function CounterAmountForm({ setCounterQuantity }) {
  // SET STATES
  const [inputValue, setInputValue] = useState(1);

  // EVENT HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    setCounterQuantity(inputValue);
    localStorage.setItem('counterQuantity', inputValue);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="counter-quantity" className="text-xl text-white">Number of Counters:</label>
      <input
        type="number"
        id="counter-quantity"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value) || 1)}
      />
      <button
        type="submit"
        className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 pt-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Generate Counters
      </button>
    </form>

  )
}
