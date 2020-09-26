import React, { useState } from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = e => {
    e.preventDefault()
    if(nombre.trim() ===""){
      return;
    }
    setRegistrado(true);
  }

  return (
    <div className="App">
      {
        !registrado &&
      <form
      onSubmit={registrar}
      >
        <label
          htmlFor=""
        >Instroduzca su nombre
        </label>
        <input value={nombre} onChange={e => setNombre(e.target.value)}/>
        <button>Ir al Chat</button>
      </form>

      }
      {
        registrado &&
        <Chat nombre={nombre}/>
      }
      
    </div>
  );
}

export default App;
