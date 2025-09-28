import { createRoot } from 'react-dom/client'

function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

createRoot(document.getElementById('root7')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);