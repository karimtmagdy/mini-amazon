import {
  ToggleAdminIndicator,
  ToggleThemeIndicator,
  ToggleUserMenuIndicator,
} from "@/components/atom/toggle";
import RootHeader from "./RootHeader";

export default function UserHeader() {
  return (
    <RootHeader>
      <div className="flex items-center gap-2">logo</div>
      <div className="flex items-center gap-2">
        <ToggleThemeIndicator />
        <ToggleUserMenuIndicator />
        <ToggleAdminIndicator />
      </div>
    </RootHeader>
  );
}
