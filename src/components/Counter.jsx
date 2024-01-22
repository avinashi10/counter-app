// LIBRARY IMPORTS
import React, { useEffect, useState } from "react";

export default function Counter({ count, setCount, incrementValue, setIncrementValue }) {
  // SET STATES
  const [inputValue, setInputValue] = useState('');

  // EVENT HANDLERS
  const increaseCount = () => {
    setCount(count + incrementValue);
  }

  const decreaseCount = () => {
    setCount(count - incrementValue);
  }

  const handleIncrementSubmit = (e) => {
    e.preventDefault();
    setIncrementValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-teal-100 p-6 rounded-xl shadow-lg">
      <form onSubmit={handleIncrementSubmit} className="flex space-x-2">
        <input
          type="number"
          id="increment-value"
          className="w-24 rounded-full border border-teal-300 bg-white py-1 text-center focus:border-teal-500 focus:ring-teal-500"
          placeholder="Increment..."
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value) || 1)}
        />
        <button
          type="submit"
          className="rounded-full bg-teal-500 px-4 py-1 text-sm text-white hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          Submit
        </button>
      </form>
      <div className="text-6xl text-teal-900">{count}</div>
      <div className="flex space-x-2">
        <button
          className="rounded-full bg-teal-500 px-5 py-2 text-white hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
          onClick={decreaseCount}
        >
          -
        </button>
        <button
          className="rounded-full bg-teal-500 px-5 py-2 text-white hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </div>
  )
}
