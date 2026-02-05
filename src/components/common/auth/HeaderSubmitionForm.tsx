import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HeaderSubmitionForm({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
}
