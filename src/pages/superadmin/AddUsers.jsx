import { TextField } from "@mui/material"
import { useState } from "react"
import { savingUser, startSavingUser } from '../../store/superadmin'
import { useDispatch } from "react-redux"


export const AddUsers = () => {
  

  const dispatch = useDispatch();

  const initialData = {
    Name: '',
    LastNameP: '',
    LastNameM: '',
    Address: '',
    City: '',
    State: '',
    Country: '',
    Nation: '',
    BloodType: '',
  }
  
  const [formData, setformData] = useState(initialData)
  
  
  const handleInputForm = (event)=>{
    const {id, value} = event.target
    setformData({
      ...formData,
      [id] : value
    }) 
  }

  
  const handleSubmit = e => {
    e.preventDefault();
    // Realizar acciones con los datos del formulario
    console.log('Datos del formulario:', formData);
  };

  const onSavingNewstudent = ()=>{
    dispatch(startSavingUser(formData))
  }

  
  return (
    <div className="contentForm">
      <form onSubmit={handleSubmit}>
        <div className="formSection">
          <TextField id="Name" label="Nombre" value={formData.Name} onChange={handleInputForm} variant="outlined"/>
          <TextField id="LastNameP" label="Apellido Paterno" value={formData.LastNameP} onChange={handleInputForm} variant="outlined"/>
          <TextField id="LastNameM" label="Apellido Materno" value={formData.LastNameM} onChange={handleInputForm} variant="outlined"/>
        </div>
        <div className="formSection">
          <TextField id="Address" label="Dirección" value={formData.Address} onChange={handleInputForm} variant="outlined"/>
          <TextField id="City" label="Ciudad/Colonia o Sección" value={formData.City} onChange={handleInputForm} variant="outlined"/>
          <TextField id="State" label="Estado" value={formData.State} onChange={handleInputForm} variant="outlined"/>
          <TextField id="Country" label="País" value={formData.Country} onChange={handleInputForm} variant="outlined"/>
          <TextField id="Nation" label="Nacionalidad" value={formData.Nation} onChange={handleInputForm} variant="outlined"/>
        </div>
        <div className="formSection">
        <TextField id="BloodType" label="País" value={formData.BloodType} onChange={handleInputForm} variant="outlined"/>
        </div>
        <div className="formSection">
          <button type="submit" onClick={onSavingNewstudent}>Enviar</button>
        </div>

      </form>
    </div>
  )
}
