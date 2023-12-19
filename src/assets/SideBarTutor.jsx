import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const SideBarTutor = () => {
  return (
    <Drawer
        variant="permanent"
        anchor="left"
    >
        <List>
            <ListItem component={Link} to="/tutor/checkinggrades">
                <ListItemText primary="Revisar Calificaciones" />
            </ListItem>
                <ListItem component={Link} to="/tutor/tutordashboard">
            <ListItemText primary="Panel del tutor" />
            </ListItem>
        </List>

    </Drawer>
  )
}