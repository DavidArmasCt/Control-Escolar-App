import { useDispatch, useSelector } from "react-redux" 
import { useEffect } from "react"
import { getFormAproval } from "../../store/admin/thunks"


export const CreateNewPeriod = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFormAproval())
  }, [dispatch])
  
  
  
  
  
  return (
    <div>
      <h1>HOLA</h1>
    </div>
  )
}
