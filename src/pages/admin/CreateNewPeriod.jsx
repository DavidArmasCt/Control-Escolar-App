import { useDispatch, useSelector } from "react-redux" 
import { useEffect } from "react"
import { getFormAproval } from "../../store/admin/thunks"
import { FalsePeriod, TruePeriod } from "./"

export const CreateNewPeriod = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFormAproval())
  }, [dispatch])
  
  const writtingValidation = useSelector((state) => state.admin.FormApproved)
  
  /*
    ->Ingresa la nueva generación > Ingresa los datos de la generacion > Ingresa la cantidad de grados > Ingresa la cantidad de grupos > Verifica los datos > PLANCHADO DE DATOS
   */
  
  
  return (
    <div className="contentForm">
      {writtingValidation ? 
      (
        <TruePeriod/>
      ):
      (
        <FalsePeriod/>
      )}
    </div>
  )
}
