import { Button } from "../components/ui/button";
import {
  Download,
  Plus,
  ArrowRight,
  Star,
  Heart,
  Settings,
  User,
  Mail,
} from "lucide-react";

export function ButtonShowcase() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-ds-gray-900 mb-4">
            Button Components
          </h1>
          <p className="text-lg text-ds-gray-600">
            Comprehensive showcase of all button variants, sizes, and states
            following Figma design specifications.
          </p>
        </div>

        {/* Button Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Button Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
            {/* Default Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Default
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">
                  Button CTA
                </Button>
                <Button variant="default">Button CTA</Button>
                <Button variant="default" size="lg">
                  Button CTA
                </Button>
                <Button variant="default" size="xl">
                  Button CTA
                </Button>
              </div>
            </div>

            {/* Destructive Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Destructive
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
                <Button variant="destructive">Delete</Button>
                <Button variant="destructive" size="lg">
                  Delete
                </Button>
                <Button variant="destructive" size="xl">
                  Delete
                </Button>
              </div>
            </div>

            {/* Outline Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Outline
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  Button CTA
                </Button>
                <Button variant="outline">Button CTA</Button>
                <Button variant="outline" size="lg">
                  Button CTA
                </Button>
                <Button variant="outline" size="xl">
                  Button CTA
                </Button>
              </div>
            </div>

            {/* Secondary Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Secondary
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm">
                  Button CTA
                </Button>
                <Button variant="secondary">Button CTA</Button>
                <Button variant="secondary" size="lg">
                  Button CTA
                </Button>
                <Button variant="secondary" size="xl">
                  Button CTA
                </Button>
              </div>
            </div>

            {/* Ghost Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ghost</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm">
                  Button CTA
                </Button>
                <Button variant="ghost">Button CTA</Button>
                <Button variant="ghost" size="lg">
                  Button CTA
                </Button>
                <Button variant="ghost" size="xl">
                  Button CTA
                </Button>
              </div>
            </div>

            {/* Link Variant */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Link</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="link" size="sm">
                  Learn More
                </Button>
                <Button variant="link">Learn More</Button>
                <Button variant="link" size="lg">
                  Learn More
                </Button>
                <Button variant="link" size="xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Buttons with Icons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Leading Icons */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Leading Icons
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button>
                  <Plus className="w-5 h-5" />
                  Add Item
                </Button>
                <Button size="lg">
                  <Star className="w-5 h-5" />
                  Favorite
                </Button>
                <Button size="xl">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </div>
            </div>

            {/* Trailing Icons */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Trailing Icons
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Proceed
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Icon Only Buttons */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Icon Only
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button size="icon-sm" variant="outline">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <User className="w-5 h-5" />
                </Button>
                <Button size="icon-lg" variant="outline">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="icon-xl" variant="outline">
                  <Star className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Mixed Variants with Icons */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Mixed Variants
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm">
                  <Plus className="w-4 h-4" />
                  Create
                </Button>
                <Button variant="ghost">
                  <Settings className="w-5 h-5" />
                  Settings
                </Button>
                <Button variant="destructive" size="lg">
                  Delete
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="link" size="xl">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button States */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Button States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Normal State */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Normal State
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button>Default Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="secondary">Secondary Button</Button>
              </div>
            </div>

            {/* Disabled State */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Disabled State
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button disabled>Default Button</Button>
                <Button variant="outline" disabled>
                  Outline Button
                </Button>
                <Button variant="secondary" disabled>
                  Secondary Button
                </Button>
              </div>
            </div>

            {/* Loading State */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Focus State
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button className="focus:ring-2">Focus Me</Button>
                <Button variant="outline" className="focus:ring-2">
                  Focus Me
                </Button>
                <Button variant="secondary" className="focus:ring-2">
                  Focus Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Groups */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Button Groups
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {/* Horizontal Group */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Horizontal Button Group
                </h3>
                <div className="flex gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="secondary">Save Draft</Button>
                  <Button>Publish</Button>
                </div>
              </div>

              {/* Action Group */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Action Button Group
                </h3>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Star className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* CTA Group */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Call-to-Action Group
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <Plus className="w-5 h-5" />
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Design Specifications
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Border Radius
                </h4>
                <p className="text-sm text-gray-600">8px (rounded-[8px])</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Typography</h4>
                <p className="text-sm text-gray-600">
                  Inter Semi Bold (font-semibold)
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Icon Spacing</h4>
                <p className="text-sm text-gray-600">8px gap (gap-2)</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Shadow</h4>
                <p className="text-sm text-gray-600">
                  Design System XS (shadow-ds-xs)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
