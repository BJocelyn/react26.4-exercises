// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

/*
Explanation:
(The problem was that the count was being change directly with count++.
React doesn't detect direct changes to state, so the component didn't update.
I fixed it by using setCount, which update the state correctly and makes
React re-render the component.)
*/
