import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SuperAdminRouter, AssistantRouter, AdminRouter, TeacherRoute, TutorRouter } from "./routers"

export const MainRouteApp = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/superadmin/*" element={<SuperAdminRouter/>}/>
            <Route path="/assistant/*" element={<AssistantRouter/>}/>
            <Route path="/admin/*" element={<AdminRouter/>} />
            <Route path="/teacher/*" element={<TeacherRoute/>} />
            <Route path="/tutor/*" element={<TutorRouter/>} /> 
        </Routes>
    </BrowserRouter>
  )
}