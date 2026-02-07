import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthGetMe } from "@/hooks/use-auth-form";
export default function UserAvatar() {
  const { user } = useAuthGetMe();
  return (
    <>
      <Avatar>
        <AvatarImage src={user?.image?.secureUrl} alt={user?.slug} />
        <AvatarFallback>
          {user?.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user?.username}</span>
        <span className="truncate text-xs">{user?.email}</span>
      </div>
    </>
  );
}
