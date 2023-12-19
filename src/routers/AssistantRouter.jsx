import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AssistantDashboard, AssistantHome, CheckingGroup, CheckingStudents } from "../pages/assistant"


export const AssistantRouter = () => {
  return (    
      <Routes>
        <Route path="/" element={<AssistantHome/>}>
          <Route path="/assistantdashboard" element={<AssistantDashboard/>}/>
          <Route path="/checkinggroup" element={<CheckingGroup/>}/>
          <Route path="/checkingstudent" element={<CheckingStudents/>}/>
        </Route>
      </Routes>
  )
}