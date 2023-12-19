import { Route, Routes } from "react-router-dom"
import { AsignGrades, CheckingGroups, CheckingSpecificStudent, TeacherHome } from "../pages/teacher"

export const TeacherRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<TeacherHome/>}>
            <Route path="/asigngrades" element={<AsignGrades/>} />
            <Route path="/checkinggroups" element={<CheckingGroups/>} />
            <Route path="/checkingspecificstudent" element={<CheckingSpecificStudent/>} />
        </Route>
    </Routes>
  )
}