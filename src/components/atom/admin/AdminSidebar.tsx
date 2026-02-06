import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from ".";
import { data } from "@/lib/links/data-menu-admin";
import { NavDocuments } from ".";
import { NavProjects } from ".";
import { NavSecondary } from ".";
export default function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarHeader>welcome</SidebarHeader>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <NavMain items={data.main} />
            <NavDocuments items={data.documents} />
            <NavProjects items={data.projects} />
            <NavSecondary items={data.secondary} /> 
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>fo</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
