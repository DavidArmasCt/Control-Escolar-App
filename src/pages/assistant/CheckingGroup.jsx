import { TextField } from "@mui/material"


export const CheckingGroup = () => {
  return (
    <>
    <div className="container"
    >
      <div
        item
        sx={{margin: '15px'}}
      >
        <form action="submit">
          <div className="textfieldItem">
          <TextField
            label="Nombre" 
            type="text" 
            placeholder='Nombre' 
          />
          </div>

          <div className="textfieldItem">
          <TextField
          label="Apellido Paterno" 
          type="text" 
          placeholder='Apellido Paterno' 
         />
         </div>
        <div className="textfieldItem">
          <TextField
          label="Apellido Materno" 
          type="text" 
          placeholder='Apellido Materno' 
          />
          </div>
          <TextField
          label="Direccion" 
          type="text" 
          placeholder='Direccion' 
          />
        

        </form>

      </div>

    </div>
    </>
  )
}
