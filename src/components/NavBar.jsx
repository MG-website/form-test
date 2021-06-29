import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs({list}) {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {list.length ===0 ? <Link to="/">
        <Tab label="REGISTRASE"/>
        </Link> : <>
        <Link to="/">
        <Tab label="REGISTRASE"/>
        </Link>
        <Link to="/mapeado">
        <Tab label="LISTADO"/>
        </Link>
        </>}
        
        
      </Tabs>
    </Paper>
  );
}
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function TextButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root} id="div">
//       <Link to="/">
//       <Button color="secondary">REGISTRARSE</Button>
//           </Link>
//       <Link to="/mapeado">
//       <Button color="secondary">LISTADO</Button>
//           </Link>
//     </div>
//   );
// }

// export default function NavBar({}){
    
// return(
    
//     <nav className="Nav">
//         <Link to="/" className="btn">
//             <span> REGISTRARSE</span>
//         </Link>
//         <Link to="/mapeado" className="btn">
//             <span>LISTADO</span>
//         </Link>
//         <Link to="/modificar" className="btn">
//             <span>MODIFICAR</span>
//         </Link>
//     </nav>
// )
// }