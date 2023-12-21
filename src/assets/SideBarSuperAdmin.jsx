
import { MenuItemComponent } from "../components/MenuItemComponent"

export const SideBarSuperAdmin = () => {
  return (
    <div>
            <MenuItemComponent to="/superadmin/addusers" label="Añadir Usuarios"/>
            <MenuItemComponent to="/superadmin/dashboard" label="Dashboard"/>
            <MenuItemComponent to="/superadmin/admindashboard" label="Panel de Administración"/>
    </div>
    
  )
}