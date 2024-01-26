import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { getInitialAcademicInfo, getFormApprovation } from './adminSlice'

export const getAcademicInfo = ()=>{
    return async (dispatch) => {
      try{
        const querySnapshot = await getDocs(query(collection(FirebaseDB,'/Control-Escolar-DB/Informacion-Curricular/Administracion-Escolar/'),where('Active', '==', true)));
        
        querySnapshot.forEach((doc) => {
          const academicInfo = doc.data();
          dispatch(getInitialAcademicInfo(academicInfo));
        });

        if (querySnapshot.empty) {
          console.log('No se encontraron datos que cumplan con la condición');
          // Puedes manejar el caso en que no se encuentren datos que cumplan con la condición.
        }
      }catch(error) {
        console.error('Error en el resultado de la consulta', error)
      }    
    }
}//Funcion que obtiene los datos basicos necesarios para consulta y registro de datos

export const getFormAproval = ()=>{
  return async (dispatch)=>{
    try{
      const verificationQuery = await getDocs(query(collection(FirebaseDB,'/Control-Escolar-DB/Informacion-Curricular/Administracion-Escolar/'),where('Active', '==', true)));
    
    if(verificationQuery.size === 0){
      dispatch(getFormApprovation({FormApproved: true}))
    }else{
      console.log("Existe uno o más periodos activos")
      dispatch(getFormApprovation({FormApproved: false}))
    }
    }catch{
      console.log("Ah ocurrido un error en la consulta, intentar más tarde")
    }
  }
}

export const setNewAcademicYear = ()=>{
  return async(dispatch, getState)=>{
    const verificationQuery = await getDocs(query(collection(FirebaseDB,'/Control-Escolar-DB/Informacion-Curricular/Administracion-Escolar/'),where('Active', '==', true)));
    
    if(verificationQuery.empty()){
      /*Realizar funcion de agregado de datos */
      const newACademicInfoRoute = doc(collection(FirebaseDB, '/Control-Escolar-DB/Informacion-Curricular/Administracion-Escolar'))
      const addNewAcademicInfo = await setDoc(newACademicInfoRoute, formData)
      console.log("Realizado con exito.")
    }else{
      console.log("La accion que intentas realizar no es posible mientras tengas un periodo activo")
    }
  }
}

export const endingSchoolYear=(currentYear)=>{
    /*
      ->Cambiar Status a False
      ->Cambiar de grado a todos los alumnos que tengan promedio aprobatorio y cuyo grado sea diferente de 3 o bien el máximo numero de grados existentes
      ->Alumnos de grado máximo cambiar status a "Graduado" o su equivalente
      ->Retener alumnos con grado reprobatorio
      ->
    */
    return currentYear;
}





/*TODOS:
  -Agregar maestros con lista de materias
  -Agregar funcionalidad de alumnos por grupo
  -Comenzar listado de alumnos para panel de profesor e ingreso de materias
*/
