import { Link, Outlet } from "react-router-dom"
import { PageLayout } from "../../layouts"
import { SideBarAssistant } from "../../assets/SideBarAssistant"

export const AssistantHome = () => {
  return (
    <PageLayout>
      <Outlet/>
      <SideBarAssistant/>
    </PageLayout>
  )
}
