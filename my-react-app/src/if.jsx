import { createRoot } from 'react-dom/client'

function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}

createRoot(document.getElementById('root3')).render(
  <Fruit />
);