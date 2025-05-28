import { useState, useEffect } from "react";

function App() {

  const [clima, setClima] = useState(null)

  useEffect(()=>{
    fetch('http://3.83.119.229:4000/api/clima?ciudad=Quito')
    .then(res => res.json())
    .then(data => setClima(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1> CLIMA ACTUAL </h1>
      {clima ?(
        <div> 
          <p>Ciudad: {clima.ciudad}</p>
          <p>Temperatura: {clima.temperatura}</p>
          <p>Descripcion: {clima.descripcion}</p>

        </div>
      ): (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;
