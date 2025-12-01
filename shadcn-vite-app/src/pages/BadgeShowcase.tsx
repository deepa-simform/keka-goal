import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  Zap,
  Heart,
  Mail,
  Bell,
} from "lucide-react";

export default function BadgeShowcase() {
  return (
    <div className="p-8 md:p-12">
      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-ds-gray-900 md:text-5xl">
            Badge Components
          </h1>
          <p className="text-lg text-ds-gray-600">
            A comprehensive showcase of badge variants, sizes, and states
          </p>
        </div>

        {/* Badge Variants - All Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Badge Variants
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              All available color variants for badges
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Gray
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="gray" size="sm">
                  Label
                </Badge>
                <Badge variant="gray" size="md">
                  Label
                </Badge>
                <Badge variant="gray" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Primary (Brand)
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" size="sm">
                  Label
                </Badge>
                <Badge variant="primary" size="md">
                  Label
                </Badge>
                <Badge variant="primary" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Error
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="error" size="sm">
                  Label
                </Badge>
                <Badge variant="error" size="md">
                  Label
                </Badge>
                <Badge variant="error" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Warning
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="warning" size="sm">
                  Label
                </Badge>
                <Badge variant="warning" size="md">
                  Label
                </Badge>
                <Badge variant="warning" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Success
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" size="sm">
                  Label
                </Badge>
                <Badge variant="success" size="md">
                  Label
                </Badge>
                <Badge variant="success" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Blue
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="blue" size="sm">
                  Label
                </Badge>
                <Badge variant="blue" size="md">
                  Label
                </Badge>
                <Badge variant="blue" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Blue Light
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="blueLight" size="sm">
                  Label
                </Badge>
                <Badge variant="blueLight" size="md">
                  Label
                </Badge>
                <Badge variant="blueLight" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Blue Gray
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="blueGray" size="sm">
                  Label
                </Badge>
                <Badge variant="blueGray" size="md">
                  Label
                </Badge>
                <Badge variant="blueGray" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Indigo
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="indigo" size="sm">
                  Label
                </Badge>
                <Badge variant="indigo" size="md">
                  Label
                </Badge>
                <Badge variant="indigo" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Purple
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="purple" size="sm">
                  Label
                </Badge>
                <Badge variant="purple" size="md">
                  Label
                </Badge>
                <Badge variant="purple" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Pink
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="pink" size="sm">
                  Label
                </Badge>
                <Badge variant="pink" size="md">
                  Label
                </Badge>
                <Badge variant="pink" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Rose
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="rose" size="sm">
                  Label
                </Badge>
                <Badge variant="rose" size="md">
                  Label
                </Badge>
                <Badge variant="rose" size="lg">
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Orange
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="orange" size="sm">
                  Label
                </Badge>
                <Badge variant="orange" size="md">
                  Label
                </Badge>
                <Badge variant="orange" size="lg">
                  Label
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Badges with Dots */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Badges with Dots
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Badges with status indicator dots
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Primary with Dot
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" size="sm" dot>
                  Label
                </Badge>
                <Badge variant="primary" size="md" dot>
                  Label
                </Badge>
                <Badge variant="primary" size="lg" dot>
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Success with Dot
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" size="sm" dot>
                  Label
                </Badge>
                <Badge variant="success" size="md" dot>
                  Label
                </Badge>
                <Badge variant="success" size="lg" dot>
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Error with Dot
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="error" size="sm" dot>
                  Label
                </Badge>
                <Badge variant="error" size="md" dot>
                  Label
                </Badge>
                <Badge variant="error" size="lg" dot>
                  Label
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Badges with Icons */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Badges with Icons
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Badges with left icons, right icons, and close buttons
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Icon Left
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="primary"
                  size="sm"
                  iconLeft={<Star className="size-3" />}
                >
                  Label
                </Badge>
                <Badge
                  variant="primary"
                  size="md"
                  iconLeft={<Star className="size-3.5" />}
                >
                  Label
                </Badge>
                <Badge
                  variant="primary"
                  size="lg"
                  iconLeft={<Star className="size-4" />}
                >
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Icon Right
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="success"
                  size="sm"
                  iconRight={<CheckCircle2 className="size-3" />}
                >
                  Label
                </Badge>
                <Badge
                  variant="success"
                  size="md"
                  iconRight={<CheckCircle2 className="size-3.5" />}
                >
                  Label
                </Badge>
                <Badge
                  variant="success"
                  size="lg"
                  iconRight={<CheckCircle2 className="size-4" />}
                >
                  Label
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                With Close Button
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="error"
                  size="sm"
                  onClose={() => alert("Close clicked")}
                >
                  Label
                </Badge>
                <Badge
                  variant="error"
                  size="md"
                  onClose={() => alert("Close clicked")}
                >
                  Label
                </Badge>
                <Badge
                  variant="error"
                  size="lg"
                  onClose={() => alert("Close clicked")}
                >
                  Label
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Icon-Only Badges */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Icon-Only Badges
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Compact badges with only icons
            </p>
          </div>
          <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="primary" size="sm">
                <Star className="size-3" />
              </Badge>
              <Badge variant="success" size="sm">
                <CheckCircle2 className="size-3" />
              </Badge>
              <Badge variant="error" size="sm">
                <AlertCircle className="size-3" />
              </Badge>
              <Badge variant="warning" size="sm">
                <AlertTriangle className="size-3" />
              </Badge>
              <Badge variant="blue" size="sm">
                <Info className="size-3" />
              </Badge>
              <Badge variant="indigo" size="sm">
                <Zap className="size-3" />
              </Badge>
              <Badge variant="pink" size="sm">
                <Heart className="size-3" />
              </Badge>
              <Badge variant="purple" size="sm">
                <Mail className="size-3" />
              </Badge>
              <Badge variant="orange" size="sm">
                <Bell className="size-3" />
              </Badge>
            </div>
          </div>
        </section>

        {/* Contextual Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Contextual Examples
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Real-world usage examples with semantic meanings
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2">
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Status Indicators
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" size="md" dot>
                  Active
                </Badge>
                <Badge variant="warning" size="md" dot>
                  Pending
                </Badge>
                <Badge variant="error" size="md" dot>
                  Failed
                </Badge>
                <Badge variant="gray" size="md" dot>
                  Inactive
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Notification Badges
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="error" size="sm">
                  3 New
                </Badge>
                <Badge variant="primary" size="sm">
                  99+
                </Badge>
                <Badge variant="warning" size="sm">
                  Urgent
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Category Tags
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="blue" size="md">
                  Design
                </Badge>
                <Badge variant="purple" size="md">
                  Development
                </Badge>
                <Badge variant="pink" size="md">
                  Marketing
                </Badge>
                <Badge variant="orange" size="md">
                  Sales
                </Badge>
                <Badge variant="indigo" size="md">
                  Product
                </Badge>
              </div>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Removable Tags
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gray" size="md" onClose={() => {}}>
                  React
                </Badge>
                <Badge variant="gray" size="md" onClose={() => {}}>
                  TypeScript
                </Badge>
                <Badge variant="gray" size="md" onClose={() => {}}>
                  Tailwind
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Design Specifications */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Design Specifications
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Technical details and implementation notes
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-ds-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-ds-gray-50 text-xs uppercase text-ds-gray-700">
                  <tr>
                    <th className="px-6 py-4">Size</th>
                    <th className="px-6 py-4">Height</th>
                    <th className="px-6 py-4">Padding X</th>
                    <th className="px-6 py-4">Padding Y</th>
                    <th className="px-6 py-4">Font Size</th>
                    <th className="px-6 py-4">Line Height</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ds-gray-200">
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Small
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">22px</td>
                    <td className="px-6 py-4 text-ds-gray-700">8px</td>
                    <td className="px-6 py-4 text-ds-gray-700">2px</td>
                    <td className="px-6 py-4 text-ds-gray-700">12px</td>
                    <td className="px-6 py-4 text-ds-gray-700">18px</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Medium
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">24px</td>
                    <td className="px-6 py-4 text-ds-gray-700">10px</td>
                    <td className="px-6 py-4 text-ds-gray-700">2px</td>
                    <td className="px-6 py-4 text-ds-gray-700">14px</td>
                    <td className="px-6 py-4 text-ds-gray-700">20px</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Large
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">28px</td>
                    <td className="px-6 py-4 text-ds-gray-700">12px</td>
                    <td className="px-6 py-4 text-ds-gray-700">4px</td>
                    <td className="px-6 py-4 text-ds-gray-700">14px</td>
                    <td className="px-6 py-4 text-ds-gray-700">20px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-base font-semibold text-ds-gray-900">
              Additional Properties
            </h3>
            <ul className="space-y-2 text-sm text-ds-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-medium text-ds-gray-900">
                  Border Radius:
                </span>
                <span>16px (rounded-2xl)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-ds-gray-900">
                  Font Weight:
                </span>
                <span>500 (Medium)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-ds-gray-900">Colors:</span>
                <span>
                  Background uses 50 shade, text uses 700 shade from design
                  system
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-ds-gray-900">Icon Gap:</span>
                <span>4px for sm/md, 6px for lg</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-ds-gray-900">Dot Size:</span>
                <span>6px for sm, 8px for md/lg</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
