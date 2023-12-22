import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AssistantDashboard, AddCandidate, AssistantHome, CheckingGroup, CheckingStudents} from "../pages/assistant"



export const AssistantRouter = () => {
  return (    
      <Routes>
        <Route path="/" element={<AssistantHome/>}>
          <Route path="/addcandidate" element={<AddCandidate/>}/>
          <Route path="/checkinggroup" element={<CheckingGroup/>}/>
          <Route path="/checkingstudent" element={<CheckingStudents/>}/>
        </Route>
      </Routes>
  )
}