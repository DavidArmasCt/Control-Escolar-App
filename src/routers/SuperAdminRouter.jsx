import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AddUsers, AdminDashboard, SuperAdminHome, Dashboard} from '../pages/superadmin'


export const SuperAdminRouter = () => {
  return (    
        <Routes>
          <Route path="/" element={<SuperAdminHome/>}>
            <Route path="/addusers" element={<AddUsers/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
  )
}
//Outlet es colocado como una permision de renderizar los elementos dentro del Route, simulando ser children.
//Esto quiere decir que los elementos hijos podran renderizarse sin necesidad de utilizar una prop del tipo 'path'