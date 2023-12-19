import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { startUsersList } from "../../store/superadmin/thunks";



export const Dashboard = () => {
//Añadir funcion para listar los usuarios registrados  

const dispatch = useDispatch();

  useEffect(() => {
    // Invocamos la función para cargar la lista de usuarios al montar el componente
    dispatch(startUsersList());
  }, [dispatch]);

  const users = useSelector((state) => state.superadmin.users);


  return (
    <div>
      <h2>Lista de Usuarios:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.Name} {user.LastNameP} {user.LastNameM}
            {/* Mostrar otros campos del usuario según sea necesario */}
          </li>
        ))}
      </ul>
    </div>
  )
}


