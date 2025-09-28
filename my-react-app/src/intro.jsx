import React from 'react';
import { createRoot, createElement } from 'react-dom/client'

const myElement = <h1>I Love JSX!</h1>;

createRoot(document.getElementById('roots')).render(
  myElement
);

const myElements = React.createElement('h1', {}, 'I do not use JSX!');

createRoot(document.getElementById('root')).render(
  myElements
);

const myElementss = <h1>React is {5 + 5} times better with JSX</h1>;

createRoot(document.getElementById('rootss')).render(
  myElementss
);