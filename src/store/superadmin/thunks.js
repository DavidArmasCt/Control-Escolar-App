import { collection, doc, setDoc, getDocs} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { gettingUsersList, savingUser } from './superadminSlice'


export const startSavingUser = (formData) => {
    return async (dispatch, getState) => {
        dispatch(savingUser(formData))
        const newUserRoute = doc(collection(FirebaseDB, '/Control-Escolar-DB/Usuarios/Administrativos'))
        const setAddUserResponse = await setDoc(newUserRoute, formData)
        console.log(newUserRoute, formData)
    }
}

export const startUsersList = ()=>{
    return async (dispatch) => {
        try {
          const usuariosCollection = collection(FirebaseDB, '/Control-Escolar-DB/Usuarios/Administrativos');
    
          const querySnapshot = await getDocs(usuariosCollection);
          const users = [];
    
          querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
          });
    
          dispatch(gettingUsersList(users));
        } catch (error) {
          console.error('Error al cargar usuarios:', error);
          // Manejo de errores, despacho de acciones adicionales si es necesario
        }
      };
}