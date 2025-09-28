import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.mybutton}>
        My Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root22')).render(
  <App />
);