export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// Child receives the onIncrement function from Parent through props.
// When the button is clicked, it calls onIncrement.
// This allows Child to communicate with Parent and update its counter.
