// "use client";

// import { useState } from "react";
// import {
//   Search,
//   RefreshCw,
//   Plus,
//   Download,
//   Trash2,
//   MoreVertical,
//   Grid3x3,
//   List,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Badge } from "@/components/ui/badge";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface DataTableProps {
//   selectedItems: string[];
//   onSelectionChange: (items: string[]) => void;
// }

// const mockData = [
//   {
//     id: "1",
//     name: "Authentication System",
//     status: "active",
//     category: "Security",
//     updated: "2 hours ago",
//   },
//   {
//     id: "2",
//     name: "Payment Gateway",
//     status: "active",
//     category: "Finance",
//     updated: "5 hours ago",
//   },
//   {
//     id: "3",
//     name: "Email Service",
//     status: "inactive",
//     category: "Communication",
//     updated: "1 day ago",
//   },
//   {
//     id: "4",
//     name: "Analytics Dashboard",
//     status: "active",
//     category: "Analytics",
//     updated: "3 hours ago",
//   },
//   {
//     id: "5",
//     name: "User Management",
//     status: "active",
//     category: "Admin",
//     updated: "6 hours ago",
//   },
//   {
//     id: "6",
//     name: "File Storage",
//     status: "inactive",
//     category: "Storage",
//     updated: "2 days ago",
//   },
//   {
//     id: "7",
//     name: "API Gateway",
//     status: "active",
//     category: "Infrastructure",
//     updated: "1 hour ago",
//   },
//   {
//     id: "8",
//     name: "Notification System",
//     status: "active",
//     category: "Communication",
//     updated: "4 hours ago",
//   },
// ];

// export function DataTable({
//   selectedItems,
//   onSelectionChange,
// }: DataTableProps) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState<string>("all");
//   const [viewMode, setViewMode] = useState<"list" | "grid">("list");

//   const filteredData = mockData.filter((item) => {
//     const matchesSearch = item.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesStatus =
//       statusFilter === "all" || item.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   const toggleSelection = (id: string) => {
//     if (selectedItems.includes(id)) {
//       onSelectionChange(selectedItems.filter((item) => item !== id));
//     } else {
//       onSelectionChange([...selectedItems, id]);
//     }
//   };

//   const toggleSelectAll = () => {
//     if (selectedItems.length === filteredData.length) {
//       onSelectionChange([]);
//     } else {
//       onSelectionChange(filteredData.map((item) => item.id));
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Toolbar */}
//       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//         <div className="flex flex-1 items-center gap-2">
//           <div className="relative flex-1 md:max-w-sm">
//             <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
//             <Input
//               placeholder="Filter by name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="bg-card pl-9"
//             />
//           </div>
//           <Button variant="ghost" size="icon" className="shrink-0">
//             <RefreshCw className="h-4 w-4" />
//           </Button>
//         </div>

//         <div className="flex items-center gap-2">
//           <Select value={statusFilter} onValueChange={setStatusFilter}>
//             <SelectTrigger className="bg-card w-[140px]">
//               <SelectValue placeholder="All Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Status</SelectItem>
//               <SelectItem value="active">Active</SelectItem>
//               <SelectItem value="inactive">Inactive</SelectItem>
//             </SelectContent>
//           </Select>

//           <div className="border-border bg-card hidden items-center gap-1 rounded-md border p-1 md:flex">
//             <Button
//               variant={viewMode === "list" ? "secondary" : "ghost"}
//               size="icon"
//               className="h-7 w-7"
//               onClick={() => setViewMode("list")}
//             >
//               <List className="h-4 w-4" />
//             </Button>
//             <Button
//               variant={viewMode === "grid" ? "secondary" : "ghost"}
//               size="icon"
//               className="h-7 w-7"
//               onClick={() => setViewMode("grid")}
//             >
//               <Grid3x3 className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button className="gap-2">
//             <Plus className="h-4 w-4" />
//             <span className="hidden sm:inline">Add Category</span>
//             <span className="sm:hidden">Add</span>
//           </Button>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="flex items-center gap-2">
//         <Button variant="outline" size="sm" className="gap-2 bg-transparent">
//           <Plus className="h-3 w-3" />
//           Status
//         </Button>
//       </div>

//       {/* Table/Grid View */}
//       {viewMode === "list" ? (
//         <div className="border-border bg-card rounded-lg border">
//           {/* Table Header - Hidden on mobile */}
//           <div className="border-border hidden border-b px-4 py-3 md:grid md:grid-cols-[auto,1fr,auto,auto,auto,auto] md:items-center md:gap-4">
//             <Checkbox
//               checked={
//                 selectedItems.length === filteredData.length &&
//                 filteredData.length > 0
//               }
//               onCheckedChange={toggleSelectAll}
//             />
//             <div className="text-muted-foreground text-sm font-medium">
//               Name
//             </div>
//             <div className="text-muted-foreground text-sm font-medium">
//               Status
//             </div>
//             <div className="text-muted-foreground text-sm font-medium">
//               Category
//             </div>
//             <div className="text-muted-foreground text-sm font-medium">
//               Updated
//             </div>
//             <div className="w-8" />
//           </div>

//           {/* Table Body */}
//           <div className="divide-border divide-y">
//             {filteredData.map((item) => (
//               <div
//                 key={item.id}
//                 className="grid grid-cols-[auto,1fr,auto] items-center gap-3 px-4 py-3 md:grid-cols-[auto,1fr,auto,auto,auto,auto] md:gap-4"
//               >
//                 <Checkbox
//                   checked={selectedItems.includes(item.id)}
//                   onCheckedChange={() => toggleSelection(item.id)}
//                 />
//                 <div className="min-w-0">
//                   <div className="truncate font-medium">{item.name}</div>
//                   <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm md:hidden">
//                     <Badge
//                       variant={
//                         item.status === "active" ? "default" : "secondary"
//                       }
//                       className={
//                         item.status === "active"
//                           ? "bg-success text-success-foreground"
//                           : ""
//                       }
//                     >
//                       {item.status}
//                     </Badge>
//                     <span>•</span>
//                     <span>{item.category}</span>
//                   </div>
//                 </div>
//                 <Badge
//                   variant={item.status === "active" ? "default" : "secondary"}
//                   className={`hidden md:inline-flex ${item.status === "active" ? "bg-success text-success-foreground" : ""}`}
//                 >
//                   {item.status}
//                 </Badge>
//                 <div className="text-muted-foreground hidden text-sm md:block">
//                   {item.category}
//                 </div>
//                 <div className="text-muted-foreground hidden text-sm md:block">
//                   {item.updated}
//                 </div>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem>Edit</DropdownMenuItem>
//                     <DropdownMenuItem>Duplicate</DropdownMenuItem>
//                     <DropdownMenuItem className="text-destructive">
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {filteredData.map((item) => (
//             <div
//               key={item.id}
//               className="group border-border bg-card hover:border-primary/50 relative rounded-lg border p-4 transition-colors"
//             >
//               <div className="mb-3 flex items-start justify-between">
//                 <Checkbox
//                   checked={selectedItems.includes(item.id)}
//                   onCheckedChange={() => toggleSelection(item.id)}
//                 />
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
//                     >
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem>Edit</DropdownMenuItem>
//                     <DropdownMenuItem>Duplicate</DropdownMenuItem>
//                     <DropdownMenuItem className="text-destructive">
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//               <h3 className="mb-2 font-medium">{item.name}</h3>
//               <div className="text-muted-foreground flex items-center gap-2 text-sm">
//                 <Badge
//                   variant={item.status === "active" ? "default" : "secondary"}
//                   className={
//                     item.status === "active"
//                       ? "bg-success text-success-foreground"
//                       : ""
//                   }
//                 >
//                   {item.status}
//                 </Badge>
//                 <span>•</span>
//                 <span>{item.category}</span>
//               </div>
//               <div className="text-muted-foreground mt-3 text-xs">
//                 {item.updated}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Selection Actions Bar */}
//       {selectedItems.length > 0 && (
//         <div className="border-border bg-card fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-lg border px-4 py-3 shadow-lg md:gap-4">
//           <div className="flex items-center gap-2">
//             <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium">
//               {selectedItems.length}
//             </div>
//             <span className="text-sm font-medium">selected</span>
//           </div>
//           <div className="bg-border h-4 w-px" />
//           <Button variant="ghost" size="sm" className="gap-2">
//             <Download className="h-4 w-4" />
//             <span className="hidden sm:inline">Export</span>
//           </Button>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-destructive hover:text-destructive gap-2"
//           >
//             <Trash2 className="h-4 w-4" />
//             <span className="hidden sm:inline">Delete</span>
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }
