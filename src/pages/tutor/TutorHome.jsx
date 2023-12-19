import { Link, Outlet } from "react-router-dom"
import { TutorLayout } from '../../layouts'
import { Grid } from "@mui/material"
import { SideBarTutor } from '../../assets' 

export const TutorHome = () => {
  return (
    <>
        <TutorLayout>
        <SideBarTutor/>
        <Outlet/>

        </TutorLayout>
        
    </>
  )
}