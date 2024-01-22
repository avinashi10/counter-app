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

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 bg-teal-100 p-4 rounded-xl shadow-lg">
      <label htmlFor="counter-quantity" className="text-lg text-teal-900">Number of Counters:</label>
      <input
        type="number"
        id="counter-quantity"
        className="w-24 rounded-full border border-teal-300 bg-white py-1 text-center focus:border-teal-500 focus:ring-teal-500"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value) || 1)}
      />
      <button
        type="submit"
        className="rounded-full bg-teal-500 px-4 py-1 text-sm text-white hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        Generate Counters
      </button>
    </form>
  )
}
