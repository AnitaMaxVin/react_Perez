import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

createRoot(document.getElementById('root6')).render(
  <Car brand="Ford" />
);