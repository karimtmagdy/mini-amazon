import { useAuthFormLogout } from "@/hooks/use-auth-form";
import { Button } from "@/components/ui/button";
import { Icon } from "@/assets/icon/icons";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function ToggleLogoutIndcator() {
  const { onSubmit, logoutMutation } = useAuthFormLogout();
  return (
    <DropdownMenuItem asChild>
      <Button
        onClick={onSubmit}
        variant="ghost"
        aria-label="Log out"
        className="w-full justify-start"
        size="sm"
        disabled={logoutMutation.isPending}
      >
        <Icon.LogOutIcon />
        Log out
      </Button>
    </DropdownMenuItem>
  );
}
