    import { useDispatch, useSelector } from "react-redux"
    import { useEffect } from "react";
    import { startStudentsList } from "../../store/assistant/thunks";
    
    
    
    export const CheckingStudents = () => {
    //Añadir funcion para listar los usuarios registrados  
    
    const dispatch = useDispatch();
    
      useEffect(() => {
        // Invocamos la función para cargar la lista de usuarios al montar el componente
        dispatch(startStudentsList());
      }, [dispatch]);
    
      const users = useSelector((state) => state.assistant.users);
    
    
      return (
        <div>
          <h2>Lista de Usuarios:</h2>
          <ul>
            {users.map((student) => (
              <li key={student.id}>
                {student.Name} {student.LastNameP} {student.LastNameM}
                {/* Mostrar otros campos del usuario según sea necesario */}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    
    
    
    
