import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const SideBarTeacher = () => {
  return (
    <Drawer
        variant="permanent"
        anchor="left"
    >
        <List>
            <ListItem component={Link} to="/teacher/asigngrades">
                <ListItemText primary="Asignar Calificaciones" />
            </ListItem>
            <ListItem component={Link} to="/teacher/checkinggroups">
                <ListItemText primary="Revisar Grupos" />
            </ListItem>
            <ListItem component={Link} to="/teacher/checkingspecificstudent">
                <ListItemText primary="Revisar Alumno Especifico" />
            </ListItem>
        </List>

    </Drawer>
  )
}