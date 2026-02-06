import { AdminSidebar } from "@/components/atom/admin";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "@/components/common/header/AdminHeader";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminHeader />
        <main className="">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
