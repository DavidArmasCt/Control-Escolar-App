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