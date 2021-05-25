import React from "react"
import './App.css';

function App() {
  return (
    <div>
            <h1></h1>
            <form>
                <input placeholder="Nombres" name="Nombres" type="text" className=""/>
                <input placeholder="Apellidos" name="Apellidos" type="text" className=""/>
                <input placeholder="Celular" name="Celular" type="num" className=""/>
                <textarea placeholder="Sobre Mi" name="SobreMi" type="text" className=""/>
            </form>
        </div>
  );
}

export default App;
