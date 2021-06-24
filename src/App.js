import React, { useState } from "react";
import './App.css';
import Mapeado from "./Mapeado.jsx";
import Forms from "./Forms.jsx"


function App() {
  const usuario ={
  Nombres:"",
  Apellidos:"",
  Correo:"",
  Celular:"",
  SobreMi:"",
  id:0}
    const [datos, setDatos] = useState(usuario)
    const [btn, setBtn] = useState(true)
    const [list, setList] = useState([])
    const [modf, setModf] = useState(usuario)
      function handleSubmit(e){
        e.preventDefault()
        setDatos({...datos, id: datos.id+1})
        setList( da =>  [...da, datos])
        setDatos({
          Nombres:"",
          Apellidos:"",
          Correo:"",
          Celular:"",
          SobreMi:"",
          id:datos.id+1
        }) 
      }
      var handleChange= (e)=>{
        if(e.target.value.length >= 0){
          setDatos({...datos,[e.target.name]:e.target.value})
        }
        if(habBtn().length=== 0){ setBtn(false)}
        else{setBtn(true)}
        // if(datos.Nombres !== "" && datos.Apellidos !== "" && datos.Celular !== "" && datos.SobreMi !== ""){
        //   setBtn(false)
        //   console.log("btn hab")
        // }
        console.log(datos)
      }
      function habBtn(){
        const arr = Object.values(datos)
        const corr =[]
        for (let i = 0; i < arr.length; i++) {
          if(arr[i] === "" || arr[i] ===" "){
            corr.push("a")
          }
        }
        console.log(corr)
        return corr
      }

      var handleClick= (e)=>{
        setList(list.filter((p,i)=>p.id !== e ))
      }
      var handleModif=(e)=>{
        setModf(list.filter((p,i)=>p.id === e )[0])
      }
      
      function handleSubmitModf(e){
        e.preventDefault()
        setList(list.map((p,i)=>{
          if(p.id ===modf.id){
            return modf
          }else{ return p}
        }))
        setModf(usuario) 
      }
      console.log(list)
      var handleChangeModf= (e)=>{
        if(e.target.value.length >= 0){
          setModf({...modf,[e.target.name]:e.target.value})
        }
      }
      return (
        <div>
        <Forms  handleChange={handleChange} datos={datos} handleSubmit={handleSubmit} btn={btn} titulo={"REGISTRARSE"}/>
        <Mapeado list={list} handleClick={handleClick} handleModif={handleModif}/>
        {modf.Nombres!== "" ? 
        <Forms handleChange={handleChangeModf} datos={modf} handleSubmit={handleSubmitModf} btn={btn} titulo={"MODIFICAR"}/>
        : null}
        </div>
        // <div>
        //     <h1 >FORMULARIO</h1>
        //     <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off" >
        //     <TextField label="Nombre" value={datos.Nombres} name="Nombres" type="text"  onChange={handleChange} />
        //     <TextField label="Apellidos" value={datos.Apellidos} name="Apellidos" type="text"  onChange={handleChange}/>
        //     <TextField label="Celular" value={datos.Celular} name="Celular" type="number"  onChange={handleChange} />
        //     <TextField label="SobreMi" value={datos.SobreMi} name="SobreMi" type="text"  onChange={handleChange} />
        //     <Button disabled={btn} type="submit" variant="outlined" color="primary">ENVIAR</Button>
        //     </form>
        //     <Mapeado list={list} handleClick={handleClick} handleModif={handleModif}/>
        //     {/* {list.map((p,i)=>{
        //       return <h2>{p.Nombres}
        //       <Button color="sucess" variant="contained" type="button" onClick={()=>{handleModif(p.id)}}>MODIFICAR</Button>
        //       <Button startIcon={<DeleteIcon />} color="secondary" variant="contained" type="button" onClick={()=>{handleClick(p.id)}}>BORRAR</Button> </h2>
        //     })} */}
        //     {modf.Nombres!== "" ? ( <><h2 >MODIFICAR</h2>
        //     <form onSubmit={handleSubmitModf}>
        //     <TextField label="Nombre" value={modf.Nombres} name="Nombres" type="text"  onChange={handleChangeModf} />
        //     <TextField label="Apellidos" value={modf.Apellidos} name="Apellidos" type="text"  onChange={handleChangeModf}/>
        //     <TextField label="Celular" value={modf.Celular} name="Celular" type="number"  onChange={handleChangeModf} />
        //     <TextField label="SobreMi" value={modf.SobreMi} name="SobreMi" type="text"  onChange={handleChangeModf} />
        //     <button disabled={btn} type="submit">ENVIAR</button>
        //      </form> </>) : null } {/*tenario para mostrar o no el modificar */}
        // </div>
  );
}

export default App;
