import { collection, doc, getDocs, query, where } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { getInitialAcademicInfo } from './adminSlice'

export const getAcademicInfo = ()=>{
    return async (dispatch) => {
      try{
        /*const docReference = collection(FirebaseDB,'/Control-Escolar-DB/Informacion-Curricular/Ciclo-Escolar/')
        const academicData = await getDocs(docReference, where('Estado-Ciclo','==','1' ));*/

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

/*TODOS:
  -Agregar maestros con lista de materias
  -Agregar funcionalidad de alumnos por grupo
  -Comenzar listado de alumnos para panel de profesor e ingreso de materias
*/
    