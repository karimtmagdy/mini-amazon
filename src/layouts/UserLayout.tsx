import { Outlet } from "react-router-dom";
import UserHeader from "@/components/common/header/UserHeader";

export default function UserLayout() {
  return (
    <div>
      <UserHeader />
      <Outlet />
    </div>
  );
}
