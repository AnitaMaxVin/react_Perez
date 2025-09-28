import { createRoot } from 'react-dom/client'

//Check out the index.html file, were we have added some styles.

function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

createRoot(document.getElementById('root2')).render(
  <Car />
);