import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Box,
  Tag,
  Menu,
  X,
  ChevronRight,
  FileText,
  Square,
  Table,
  Layers,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Components",
    icon: Box,
    children: [
      {
        title: "Buttons",
        path: "/buttons",
        icon: Box,
      },
      {
        title: "Badges",
        path: "/badges",
        icon: Tag,
      },
      {
        title: "Forms",
        path: "/forms",
        icon: FileText,
      },
      {
        title: "Modals",
        path: "/modals",
        icon: Square,
      },
      {
        title: "Tables",
        path: "/tables",
        icon: Table,
      },
      {
        title: "Tabs",
        path: "/tabs",
        icon: Layers,
      },
      {
        title: "Dropdowns",
        path: "/dropdowns",
        icon: ChevronDown,
      },
    ],
  },
];

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(["Components"]);
  const location = useLocation();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-ds-gray-25">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 bg-white border-r border-ds-gray-200",
          sidebarOpen ? "w-64" : "w-0 md:w-16",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-ds-gray-200 px-4">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ds-brand-600">
                  <span className="text-lg font-bold text-white">DS</span>
                </div>
                <span className="text-lg font-semibold text-ds-gray-900">
                  Design System
                </span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg p-2 hover:bg-ds-gray-100 transition-colors"
            >
              {sidebarOpen ? (
                <X className="size-5 text-ds-gray-600" />
              ) : (
                <Menu className="size-5 text-ds-gray-600" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.title)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        "hover:bg-ds-gray-100 text-ds-gray-700",
                      )}
                    >
                      <item.icon className="size-5 shrink-0" />
                      {sidebarOpen && (
                        <>
                          <span className="flex-1 text-left">{item.title}</span>
                          <ChevronRight
                            className={cn(
                              "size-4 transition-transform",
                              expandedItems.includes(item.title) && "rotate-90",
                            )}
                          />
                        </>
                      )}
                    </button>
                    {expandedItems.includes(item.title) && sidebarOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-ds-gray-200 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                              isActive(child.path)
                                ? "bg-ds-brand-50 text-ds-brand-700"
                                : "text-ds-gray-700 hover:bg-ds-gray-100",
                            )}
                          >
                            <child.icon className="size-4 shrink-0" />
                            <span>{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? "bg-ds-brand-50 text-ds-brand-700"
                        : "text-ds-gray-700 hover:bg-ds-gray-100",
                    )}
                  >
                    <item.icon className="size-5 shrink-0" />
                    {sidebarOpen && <span>{item.title}</span>}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          {sidebarOpen && (
            <div className="border-t border-ds-gray-200 p-4">
              <div className="text-xs text-ds-gray-500">
                <p className="font-medium">Design System v1.0</p>
                <p className="mt-1">Built with Figma & shadcn/ui</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? "md:ml-64" : "md:ml-16",
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 border-b border-ds-gray-200 bg-white">
          <div className="flex h-full items-center justify-between px-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-ds-gray-100"
            >
              <Menu className="size-5 text-ds-gray-600" />
            </button>
            <div className="flex items-center gap-4">
              <div className="text-sm text-ds-gray-600">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
