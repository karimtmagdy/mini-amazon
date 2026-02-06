export default function RootHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-12 items-center justify-between border-b px-4 py-2 backdrop-blur transition-[width] ease-linear">
      {children}
    </header>
  );
}
