import { createRoot } from 'react-dom/client'

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

createRoot(document.getElementById('root12')).render(
  <MyForm />
);
