import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

createRoot(document.getElementById('root4')).render(
  <Car color="red"/>
);