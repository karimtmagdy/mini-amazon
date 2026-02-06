import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="@container">
      <TooltipProvider>
        <Outlet />
      </TooltipProvider>
    </div>
  );
}
