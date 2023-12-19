import { Link, Outlet } from "react-router-dom"
import { PageLayout } from "../../layouts/PageLayout"
import { SideBarSuperAdmin } from "../../assets"

export const SuperAdminHome = () => {
  return (
    <>
        <PageLayout>
          <SideBarSuperAdmin/>
          <Outlet/>
        </PageLayout>
    </>
  )
}