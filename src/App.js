import React, { useState } from "react"
import './App.css';

function App() {
  const [datos, setDatos] = useState({
    Nombres:"",
    Apellidos:"",
    Celular:"",
    SobreMi:"",
    id:0})
  const [btn, setBtn] = useState(true)
  const [list, setList] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    setDatos({...datos, id: datos.id+1})
    setList( da =>  [...da, datos]) 
  }
  console.log(list)
  var handleChange= (e)=>{
    if(e.target.value.length >= 0){
      setDatos({...datos,[e.target.name]:e.target.value})
    }
    if(datos.Nombres !== "" && datos.Apellidos !== "" && datos.Celular !== "" && datos.SobreMi !== ""){
      setBtn(false)
      console.log("btn hab")
    }
    console.log(datos)
  }
  var handleClick= (e)=>{
    setList(list.filter((p,i)=>p.id !== e ))
  }
  return (
    <div>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nombres" value={datos.Nombres} name="Nombres" type="text" className="" onChange={handleChange}/>
                <input placeholder="Apellidos" value={datos.Apellidos} name="Apellidos" type="text" className="" onChange={handleChange}/>
                <input placeholder="Celular" value={datos.Celular} name="Celular" type="number" className="" onChange={handleChange}/>
                <textarea placeholder="Sobre Mi" value={datos.SobreMi} name="SobreMi" type="text" className="" onChange={handleChange}/>
                <button disabled={btn} type="submit">ENVIAR</button>
            </form>
            {list.map((p,i)=>{
              return <h2>{p.Nombres} <button type="button" onClick={()=>{handleClick(p.id)}}>X</button> </h2>
            })}
        </div>
  );
}

export default App;
