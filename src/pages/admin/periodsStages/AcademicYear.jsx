import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewAcademicYear } from '../../../store/admin/thunks';
import { TextField } from '@mui/material';

export const AcademicYear = () => {
  const initialData = {
    Active: '',
    CurrentAcademicYear: '',
    CurrentGeneration: '',
    CurrentPeriod: '',
  }
  const dispatch = useDispatch();
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
  
  const onSavingAcademicInfo = ()=>{
    dispatch(setNewAcademicYear({...formData, Active: 'Loading'}))
    setformData({...formData, Active: 'Loading'})
  }

  return (
    <div>
      <div className="contentForm">
      <form onSubmit={handleSubmit}>
        <div className="formSection">
          <TextField id="CurrentAcademicYear" label="Nuevo Año Escolar" value={formData.CurrentAcademicYear} onChange={handleInputForm} variant="outlined"/>
          <TextField id="CurrentGeneration" label="Generacion" value={formData.CurrentGeneration} onChange={handleInputForm} variant="outlined"/>
          <TextField id="CurrentPeriod" label="Periodo Inicial" value={formData.CurrentPeriod} onChange={handleInputForm} variant="outlined"/>
        </div>
        <div className="formSection">
          <button type="submit" onClick={onSavingAcademicInfo}>Enviar</button>
        </div>
      </form>
    </div>
    </div>
  )
}



