import { Route, Routes } from "react-router-dom"
import { AdminHome, AdminTeachers, CheckingTeachers, CreateNewPeriod, Period } from "../pages/admin"


export const AdminRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminHome/>}>
            <Route path="/adminteachers" element={<AdminTeachers/>} />
            <Route path="/checkingteachers" element={<CheckingTeachers/>} />
            <Route path="/period" element={<Period/>}/>
            <Route path="/createperiod" element={<CreateNewPeriod/>}/>
        </Route>
    </Routes>
  )
}