function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

function Propsdestructuring(){
  return(
    <>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </>
  )
}



export default Propsdestructuring