import { ComponentExample } from "@/components/component-example";
// import { DataTable } from "./data-table";
// import { useState } from "react";

export default function HomePage() {
  // const [selectedItems, setSelectedItems] = useState<string[]>([])
  return (
    <div>
      {/* <DataTable selectedItems={selectedItems} onSelectionChange={setSelectedItems} /> */}
      <ComponentExample />
    </div>
  );
}
