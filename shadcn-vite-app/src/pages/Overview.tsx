import { Link } from "react-router-dom";
import { Box, Tag, Layers, Palette, FileText } from "lucide-react";

const components = [
  {
    title: "Buttons",
    description:
      "Explore all button variants, sizes, and states following our design system specifications.",
    icon: Box,
    path: "/buttons",
    count: "6 variants",
    color: "bg-ds-brand-50 text-ds-brand-600",
  },
  {
    title: "Badges",
    description:
      "Explore badge variants with different colors, sizes, icons, and states.",
    icon: Tag,
    path: "/badges",
    count: "13 variants",
    color: "bg-ds-purple-50 text-ds-purple-600",
  },
  {
    title: "Forms",
    description:
      "Complete form controls including inputs, textareas, checkboxes, and radios with validation states.",
    icon: FileText,
    path: "/forms",
    count: "5 components",
    color: "bg-ds-blue-50 text-ds-blue-600",
  },
];

const stats = [
  {
    title: "Total Components",
    value: "3",
    icon: Layers,
    color: "bg-ds-blue-50 text-ds-blue-600",
  },
  {
    title: "Color Variants",
    value: "13",
    icon: Palette,
    color: "bg-ds-success-50 text-ds-success-600",
  },
];

export function Overview() {
  return (
    <div className="p-8 md:p-12">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-ds-gray-900">
            Design System Overview
          </h1>
          <p className="text-lg text-ds-gray-600">
            Comprehensive component library built with Figma specifications and
            shadcn/ui
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 ${stat.color}`}>
                  <stat.icon className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ds-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-ds-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Components Grid */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-ds-gray-900">
            Available Components
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {components.map((component) => (
              <Link
                key={component.path}
                to={component.path}
                className="group rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-ds-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-lg p-3 ${component.color}`}>
                    <component.icon className="size-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-ds-gray-900 group-hover:text-ds-brand-700 transition-colors">
                        {component.title}
                      </h3>
                      <span className="text-xs font-medium text-ds-gray-500 bg-ds-gray-100 px-2 py-1 rounded-full">
                        {component.count}
                      </span>
                    </div>
                    <p className="text-sm text-ds-gray-600">
                      {component.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="rounded-xl border border-ds-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-ds-gray-900">
            Getting Started
          </h2>
          <div className="space-y-4 text-sm text-ds-gray-700">
            <p>
              This design system is built with modern web technologies and
              follows best practices for accessibility and responsive design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="rounded-lg bg-ds-gray-50 p-4">
                <h3 className="font-semibold text-ds-gray-900 mb-2">
                  🎨 Figma Integration
                </h3>
                <p className="text-xs text-ds-gray-600">
                  All components extracted directly from Figma design files
                </p>
              </div>
              <div className="rounded-lg bg-ds-gray-50 p-4">
                <h3 className="font-semibold text-ds-gray-900 mb-2">
                  ⚡ Built with Vite
                </h3>
                <p className="text-xs text-ds-gray-600">
                  Lightning-fast development with hot module replacement
                </p>
              </div>
              <div className="rounded-lg bg-ds-gray-50 p-4">
                <h3 className="font-semibold text-ds-gray-900 mb-2">
                  🎯 Type-Safe
                </h3>
                <p className="text-xs text-ds-gray-600">
                  Full TypeScript support for better developer experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
