import { Icon } from "@/assets/icon/icons";
import { type LucideIcon } from "lucide-react";
import {
  KPI_OVERVIEW,
  KPI_ANALYTICS,
  KPI_SALES,
  KPI_ORDERS,
  KPI_PRODUCTS,
  KPI_NOTIFICATIONS,
  KPI_REVENUE,
  KPI_USERS,
  KPI_TRAFFIC,
} from "./url-backend";
export type MenuItem = { 
  title: string;
  url: string;
  icon: LucideIcon;
  isActive: boolean;
  items?: MenuItem[];
};
export const data = {
  // Main
  main: [
    {
      title: "dashboard",
      url: "",
      icon: Icon.CommandIcon,
      // isActive: true,
      items: [
        {
          title: "overview",
          url: KPI_OVERVIEW,
          icon: Icon.ChartPieIcon,
        },
        {
          title: "Analytics",
          url: KPI_ANALYTICS,
          icon: Icon.ChartColumnBigIcon,
        },
        {
          title: "sales",
          url: KPI_SALES,
          icon: Icon.ChartNoAxesCombinedIcon,
        },
        {
          title: "traffic",
          url: KPI_TRAFFIC,
          icon: Icon.ChartNoAxesCombinedIcon,
        },
        {
          title: "revenue",
          url: KPI_REVENUE,
          icon: Icon.ChartNoAxesCombinedIcon,
        },
        {
          title: "users",
          url: KPI_USERS,
          icon: Icon.ChartNoAxesCombinedIcon,
        },
        {
          title: "orders",
          url: KPI_ORDERS,
          icon: Icon.ChartNoAxesColumnIncreasingIcon,
        },
        {
          title: "products",
          url: KPI_PRODUCTS,
          icon: Icon.BadgeDollarSignIcon,
        },
        {
          title: "notifications",
          url: KPI_NOTIFICATIONS,
          icon: Icon.BadgeDollarSignIcon,
        },
      ],
    },
    {
      title: "Chat",
      url: "",
      icon: Icon.BotIcon,
      // isActive: true,
      items: [
        {
          title: "New Chat",
          url: "",
        },
        {
          title: "Continue Chat",
          url: "",
        },
        {
          title: "Settings",
          url: "",
        },
      ],
    },
    {
      title: "Settings",
      url: "",
      icon: Icon.Settings2Icon,
      items: [
        {
          title: "General",
          url: "",
        },
        {
          title: "Team",
          url: "",
        },
        {
          title: "Billing",
          url: "",
        },
        {
          title: "Limits",
          url: "",
        },
      ],
    },
  ],
  // Documents
  documents: [
    { title: "categories", url: "categories", icon: Icon.Grid2x2Icon },
    { title: "sub category", url: "subcategories", icon: Icon.CircleDotIcon },
    { title: "brands", url: "brands", icon: Icon.BadgeIcon },
    { title: "products", url: "products", icon: Icon.PackageIcon },
    { title: "users", url: "users", icon: Icon.UsersIcon },
    { title: "coupons", url: "coupons", icon: Icon.TicketsIcon },
    { title: "orders", url: "orders", icon: Icon.BoxesIcon },
  ],
  // Secondary
  secondary: [
    { name: "Support", url: "support", icon: Icon.LifeBuoyIcon },
    { name: "Feedback", url: "feedback", icon: Icon.SendIcon },
    { name: "Settings", url: "settings", icon: Icon.CogIcon },
    { name: "Bot AI", icon: Icon.BrainIcon, url: "prompts" },
    { name: "Appearance", icon: Icon.LaptopMinimalIcon, url: "appearance" },
    { name: "Integrations", url: "integrations", icon: Icon.BoltIcon },
    { name: "Data Library", url: "data-library", icon: Icon.DatabaseIcon },
    { name: "Reports", url: "reports", icon: Icon.FileWarningIcon },
  ],
  // Projects
  projects: [
    { name: "Design Engineering", url: "design-engineering", icon: Icon.FrameIcon },
    { name: "Sales & Marketing", url: "sales-marketing", icon: Icon.PieChartIcon },
    { name: "Travel", url: "travel", icon: Icon.MapIcon },
  ],
} as {
  main: MenuItem[];
  secondary: { name: string; url: string; icon: LucideIcon }[];
  documents: { title: string; url: string; icon: LucideIcon }[];
  projects: { name: string; url: string; icon: LucideIcon }[];
};
