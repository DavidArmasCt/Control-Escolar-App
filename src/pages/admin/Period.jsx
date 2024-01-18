import { useEffect } from 'react'
import { getAcademicInfo } from '../../store/admin/thunks'
import { useDispatch, useSelector } from 'react-redux'
export const Period = () => {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAcademicInfo())
  },[dispatch])
  const academicData = useSelector((state) => state.admin.CurrentAcademicYear)
  
  
  
  
  return (
    <div>
      <h2>{academicData}</h2>
    </div>
  )
}
