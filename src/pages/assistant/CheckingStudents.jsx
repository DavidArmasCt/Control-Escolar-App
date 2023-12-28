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
        <div className="cardContainer">
            {students.map((student) => (
              <div className="studentResumeCard" key={student.id}>
                <div className="Avatar-Container">

                </div>
                {student.Name} {student.LastNameP} {student.LastNameM}
                {/* Mostrar otros campos del usuario según sea necesario */}
              </div>            
            ))}
        </div>
      )
    }
    
    
    
    
