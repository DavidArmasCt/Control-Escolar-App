import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const SideBarAssistant = () => {
  
    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem component={Link} to="/assistant/assistantdashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component={Link} to="/assistant/checkinggroup">
                    <ListItemText primary="Revisar Grupos" />
                </ListItem>
                <ListItem component={Link} to="/assistant/checkingstudent">
                    <ListItemText primary="Revisar Estudiantes" />
                </ListItem>
            </List>
    
        </Drawer>
      )
}