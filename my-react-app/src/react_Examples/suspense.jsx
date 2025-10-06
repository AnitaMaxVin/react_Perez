import { Suspense } from 'react';
import MyFruits from './fruits.jsx'; 

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFruits />
      </Suspense>
    </div>
  );
}


function Suspense1() {
  return (
    <>
      {/* Example 1 */}
      <App />
    </>
  );
}

export default Suspense1;