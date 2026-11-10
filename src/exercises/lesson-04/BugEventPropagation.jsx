// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();

    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>

      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation:
// Event bubbling allows a click event to travel from a child
// element to its parent. stopPropagation() prevents the button's
// click event from reaching the parent div.
