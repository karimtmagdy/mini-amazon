import { BreadcrumbHeader } from "@/components/atom/admin";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  ToggleAdminIndicator,
  ToggleThemeIndicator,
} from "@/components/atom/toggle";
import RootHeader from "@/components/common/header/RootHeader";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AdminHeader() {
  return (
    <RootHeader>
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="my-auto data-[orientation=vertical]:h-5"
        />
        <BreadcrumbHeader />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          name="help-button"
          aria-label="help-button"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          name="notification-button"
          aria-label="notification-button"
        >
          <Bell className="h-4 w-4" />
          <span className="bg-primary absolute top-1.5 right-1.5 h-2 w-2 rounded-full" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden @xl:inline-flex"
          name="settings-button"
          aria-label="settings-button"
        >
          <Settings className="h-4 w-4" />
        </Button>
        <Avatar className="h-7 w-7 md:h-8 md:w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <ToggleThemeIndicator />
        <ToggleAdminIndicator />
      </div>
    </RootHeader>
  );
}
