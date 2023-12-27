import { collection, doc, setDoc, getDocs} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { savingStudent, gettingStudents } from './assistantSlice';


export const startSavingStudent = (formData, route) => {
    return async (dispatch, getState) => {
        dispatch(savingStudent(formData))
        const newRoute = doc(collection(FirebaseDB, route))
        const setAddUserResponse = await setDoc(newRoute, formData)
        console.log(newRoute, formData)
    }
}

export const startStudentsList = ()=>{
    return async (dispatch) => {
        try {
          const usuariosCollection = collection(FirebaseDB, '/Control-Escolar-DB/Usuarios/Estudiantes');
    
          const querySnapshot = await getDocs(usuariosCollection);
          const students = [];
    
          querySnapshot.forEach((doc) => {
            students.push({ id: doc.id, ...doc.data() });
          });
    
          dispatch(gettingStudents(students));
        } catch (error) {
          console.error('Error al cargar usuarios:', error);
          // Manejo de errores, despacho de acciones adicionales si es necesario
        }
      };
}