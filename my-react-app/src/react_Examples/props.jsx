import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Props(){
  return(
    <>
    <Car brand = "Ford"/>
    </>
  )
}

export default Props