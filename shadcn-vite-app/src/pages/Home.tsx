import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Design System</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore our comprehensive design system components built with Figma
          specifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/buttons"
            className="group bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-all duration-200"
          >
            <div className="text-4xl mb-4">🔘</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Button Components
            </h2>
            <p className="text-gray-600">
              Explore all button variants, sizes, and states following our
              design system specifications.
            </p>
          </Link>

          <Link
            to="/badges"
            className="group bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-all duration-200"
          >
            <div className="text-4xl mb-4">🏷️</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              Badge Components
            </h2>
            <p className="text-gray-600">
              Explore badge variants with different colors, sizes, icons, and
              states.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
