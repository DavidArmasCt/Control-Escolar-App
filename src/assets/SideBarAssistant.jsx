import { MenuItemComponent } from "../components/MenuItemComponent"

export const SideBarAssistant = () => {
  return (
    <div>
            <MenuItemComponent to="/assistant/addcandidate" label="Añador Estudiante"/>
            <MenuItemComponent to="/assistant/assistanthome" label="Dashboard"/>
            <MenuItemComponent to="/assistant/checkinggroup" label="Información de grupo"/>
            <MenuItemComponent to="/assistant/checkingstudents" label="Información de estudiantes"/>
    </div>
    
  )
}