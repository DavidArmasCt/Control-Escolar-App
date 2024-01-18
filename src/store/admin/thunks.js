import { collection, doc, getDoc, query, where } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { getInitialAcademicInfo } from './adminSlice'

export const getAcademicInfo = ()=>{
    return async (dispatch) => {
      try{
        const docReference = doc(FirebaseDB,'/Control-Escolar-DB/Informacion-Curricular/Ciclo-Escolar/Gg7b9PzIXDNxhVMDGTOZ')
        const academicData = await getDoc(docReference);
        if(academicData.exists()){
          const academicInfo = academicData.data();
          dispatch(getInitialAcademicInfo(academicInfo))
        }else{
          console.log('Error en la consulta del archivo')
        }
      }catch(error) {
        console.error('Error en el resultado de la consulta', error)
      }    
    }
}

export const setAcademicInfo = ()=>{
    return
    
}

export const endingSchoolYear=(currentYear)=>{
    return currentYear;
}


export const setNewAcademicYear= ()=>{
    const NewAcademicYear = "";
    return NewAcademicYear;
}


    