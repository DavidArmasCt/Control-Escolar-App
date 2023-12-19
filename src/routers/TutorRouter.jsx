import { Route, Routes } from "react-router-dom"
import { CheckingGrades, TutorDashboard, TutorHome } from "../pages/tutor"

export const TutorRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<TutorHome/>}>
            <Route path="/checkinggrades" element={<CheckingGrades/>} />
            <Route path="/tutordashboard" element={<TutorDashboard/>} />
        </Route>
    </Routes>
  )
}