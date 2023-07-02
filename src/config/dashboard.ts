import { type DashboardConfig } from "types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "List",
      href: "/dashboard/lister",
    },
    {
      title: "Bid",
      href: "/dashboard/bidder",
    },
  ],
  sidebarNav: [
    {
      title: "My Events",
      href: "/dashboard/",
      icon: "users",
    },
    {
      title: "Add Event",
      href: "/dashboard/new",
      icon: "package",
    },
    {
      title: "AI Event",
      href: "/dashboard/ai",
      icon: "package",
    },
  ],
};

// {
//   title: "All Contracts",
//   href: "/dashboard/lister",
//   icon: "dashboard",
// },

// {
//   title: "Invoices",
//   href: "/dashboard/invoices",
//   icon: "billing",
//   disabled: true,
// },
// {
//   title: "Reports",
//   href: "/dashboard/reports",
//   icon: "post",
//   disabled: true,
// },

// {
//   title: "Profile",
//   href: "/dashboard/profile",
//   icon: "settings",
//   disabled: true,
// },
// {
//   title: "Upgrade to Plus",
//   href: "/dashboard/billing",
//   icon: "settings",
//   disabled: true,
// },
