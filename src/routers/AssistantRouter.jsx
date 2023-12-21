import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AssistantDashboard, AssistantHome, CheckingGroup, CheckingStudents, AddStudent} from "../pages/assistant"


export const AssistantRouter = () => {
  return (    
      <Routes>
        <Route path="/" element={<AssistantHome/>}>
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/checkinggroup" element={<CheckingGroup/>}/>
          <Route path="/checkingstudent" element={<CheckingStudents/>}/>
        </Route>
      </Routes>
  )
}