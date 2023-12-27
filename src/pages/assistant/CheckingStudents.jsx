    import { useDispatch, useSelector } from "react-redux"
    import { useEffect } from "react";
    import { startStudentsList } from "../../store/assistant/thunks";
    
    
    
    export const CheckingStudents = () => {
    //Añadir funcion para listar los usuarios registrados  
    const route = '/Control-Escolar-DB/Usuarios/Estudiantes'
    const dispatch = useDispatch();
    
      useEffect(() => {
        // Invocamos la función para cargar la lista de usuarios al montar el componente
        dispatch(startStudentsList(route));
      }, [dispatch]);
    
      const students = useSelector((state) => state.assistant.students);
    
    
      return (
        <div>
          <h2>Lista de Usuarios:</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.Name} {student.LastNameP} {student.LastNameM}
                {/* Mostrar otros campos del usuario según sea necesario */}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    
    
    
    
