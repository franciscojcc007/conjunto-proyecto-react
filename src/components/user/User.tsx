interface userProps{
  name: string;
  age: number;
  country: string;
}

export const User = ({name,age,country}:userProps)=>{
  return(
    <>
    <h2>Nombre: {name}</h2>
    <p>Edad: {age} Años</p>
    <p>País: {country}</p>
    <hr />
    </>
  )
}


