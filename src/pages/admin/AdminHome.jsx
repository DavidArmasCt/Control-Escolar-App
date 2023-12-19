import { Link, Outlet } from "react-router-dom"

export const AdminHome = () => {
  return (
    <>
        <h1>Admin Page</h1>
        <nav>
            <Link to="/admin/adminteachers">Administrar Maestros</Link>
            <Link to="/admin/checkingteachers">Revisar Maestros</Link>
        </nav>
        <Outlet/>
    </>
  )
}