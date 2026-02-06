import { ToggleAdminIndicator } from "@/components/atom/toggle";
import RootHeader from "./RootHeader";

export default function UserHeader() {
  return (
    <RootHeader>
      <div className="flex items-center gap-2">logo</div>
      <ToggleAdminIndicator />
    </RootHeader>
  );
}
