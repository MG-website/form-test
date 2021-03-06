import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";

export default function Mapeado({list, handleModif, handleClick}){

    return (
        <div>{list.map((p,i)=>{
            return <h2>{p.Nombres} {p.Apellidos}
            <Link to="/modificar">
            <Button color="sucess" variant="contained" type="button" onClick={()=>{handleModif(p.id)}}>MODIFICAR</Button>
            </Link>
            <Button startIcon={<DeleteIcon />} color="secondary" variant="contained" type="button" onClick={()=>{handleClick(p.id)}}>BORRAR</Button> </h2>
          })}
          </div>
    )};