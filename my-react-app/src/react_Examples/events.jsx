import { createRoot } from 'react-dom/client'

function Events() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

export default Events
