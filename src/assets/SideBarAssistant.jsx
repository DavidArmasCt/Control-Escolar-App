import { MenuItemComponent } from "../components/MenuItemComponent"

export const SideBarAssistant = () => {
  return (
    <div>
            <MenuItemComponent to="/assistant/addstudent" label="Añador Estudiante"/>
            <MenuItemComponent to="/assistant/dashboard" label="Dashboard"/>
            <MenuItemComponent to="/assistant/admindashboard" label="Panel de Administración"/>
    </div>
    
  )
}