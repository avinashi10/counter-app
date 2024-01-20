// LIBRARY IMPORTS
import React, { useState } from "react";

export default function Counter() {
  // SET STATES
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  // EVENT HANDLERS
  function increaseCount () {
    setCount((previous) => previous + incrementValue);
  }

  function decreaseCount () {
    setCount((previous) => previous - incrementValue);
  }

  return (
    <>
      <form>
        <input
          type="number"
          id="incrementValue"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Set increment value"
          value={incrementValue}
          onChange={(e) => setIncrementValue(parseInt(e.target.value) || 1)}
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
