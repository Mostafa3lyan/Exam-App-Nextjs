import {  MainSidebar } from "@/components/layout/main-sidebar/main-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"



export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}