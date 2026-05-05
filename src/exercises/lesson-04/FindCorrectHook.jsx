// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';
export default function FindCorrectHook() {
  let clickCount = 0; // ← incorrect implementation
  const countRef = useRef(null);

  function handleClick() {
    clickCount++;
    countRef.current.textContent = `Clicks: ${clickCount}`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={countRef}>
        0 Clicks
      </button>
    </div>
  );
}
