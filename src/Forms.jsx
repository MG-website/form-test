import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./Forms.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Forms({handleChange, datos, handleSubmit, btn, titulo}){

      const classes = useStyles();

    return (
        <div>
            <h1 class="title" >{titulo}</h1>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off" >
                <TextField label="Nombre" value={datos.Nombres} name="Nombres" type="text"  onChange={handleChange} />
                <TextField label="Apellidos" value={datos.Apellidos} name="Apellidos" type="text"  onChange={handleChange}/>
                <TextField label="Correo" value={datos.Correo} name="Correo" type="text"  onChange={handleChange}/>
                <TextField label="Celular" value={datos.Celular} name="Celular" type="number"  onChange={handleChange} />
                <TextField label="SobreMi" value={datos.SobreMi} name="SobreMi" type="text"  onChange={handleChange} />
                <Button disabled={btn} type="submit" variant="outlined" color="primary">ENVIAR</Button>
                </form>
        </div>
)}
