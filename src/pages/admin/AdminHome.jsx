import { Link, Outlet } from "react-router-dom"
import { SideBarAdmin } from "../../assets"
import { PageLayout } from "../../layouts/PageLayout"

export const AdminHome = () => {
  return (
    <>
        <PageLayout>
          <SideBarAdmin/>
          <Outlet/>
        </PageLayout>
    </>
  )
}