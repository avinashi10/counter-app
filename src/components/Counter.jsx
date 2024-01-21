// LIBRARY IMPORTS
import React, { useEffect, useState } from "react";

export default function Counter({ count, setCount }) {
  // SET STATES
  const [incrementValue, setIncrementValue] = useState(1);

  // HOOKS
  useEffect(() => {
    const storedIncrementValue = localStorage.getItem('incrementValue');
    if (storedIncrementValue) {
      setIncrementValue(parseInt(storedIncrementValue));
    }
  }, [])

  // EVENT HANDLERS
  function increaseCount () {
    setCount(count + incrementValue);
  }

  function decreaseCount () {
    setCount(count - incrementValue);
  }

  return (
    <>
      <form>
        <label htmlFor="increment-value" className="text-xl text-white">Increment/Decrement By:</label>
        <input
          type="number"
          id="increment-value"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Set increment value"
          value={incrementValue}
          onChange={(e) => {
            const newIncrementValue = parseInt(e.target.value) || 1;
            setIncrementValue(newIncrementValue);
            localStorage.setItem('incrementValue', newIncrementValue.toString());
          }}
        />
      </form>
      <button
        className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 pt-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick = {increaseCount}
      >
        Increment
      </button>
      <button
        className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 pt-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick = {decreaseCount}
      >
        Decrement
      </button>
      <p className="text-2xl text-white">Total Count: {count} </p>
    </>
  )
}
