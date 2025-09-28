import React from 'react';
import { createRoot } from 'react-dom/client'

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

createRoot(document.getElementById('root5')).render(
  <Car />
);