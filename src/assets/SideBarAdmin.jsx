import { MenuItemComponent } from "../components/MenuItemComponent"

export const SideBarAdmin = () => {
  return (
    <div>
        <MenuItemComponent to="/admin/adminteachers" label="Administrar Maestros"/>
        <MenuItemComponent to="/admin/checkingteachers" label="Revisar Información de Profesores"/>
        <MenuItemComponent to="/admin/period" label="Ciclo Escolar"/>
    </div>
  )
}
