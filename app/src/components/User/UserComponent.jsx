import React, { useState } from "react";
import "./UserComponent.css";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./InputUser.css";

const UserComponent = () => {
  const [readState, setReadState] = useState(false);

  const Read = () => {
    if (readState == false) {
      setReadState(true);
    } else {
      setReadState(false);
    }
  };

  return (
    <div className="Container">
      <section className="box">
        <h1>Datos Cuenta</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "80%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="container">
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Usuario"
              defaultValue="Usuario"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Email"
              defaultValue="Email"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Contraseña"
              defaultValue="Contraseña"
              InputProps={{
                readOnly: readState,
              }}
            />
          </div>
        </Box>
      </section>
      <section className="box">
        <h1>Datos personales</h1>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="container">
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Nombre y Apellidos"
              defaultValue="Nombre y Apellidos"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Documentos"
              defaultValue="Documentos"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Telefono"
              defaultValue="Telefono"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Telefono Alternativo"
              defaultValue="Telefono Alternativo"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Fecha De Nacimiento"
              defaultValue="Fecha De Nacimiento"
              InputProps={{
                readOnly: readState,
              }}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Dirreccion"
              defaultValue="Dirreccion"
              InputProps={{
                readOnly: readState,
              }}
            />
            <IconButton onClick={() => Read()}>
              <EditIcon />
            </IconButton>
          </div>
        </Box>
      </section>
    </div>
  );
};

export default UserComponent;
