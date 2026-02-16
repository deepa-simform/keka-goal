# Copilot Instructions for keka-goal Repository

This document provides essential information for AI coding agents working with this repository.

## Project Overview

This is a **React + TypeScript + Vite** application showcasing UI components from the shadcn/ui library. The project serves as a component showcase/demo application and template for building modern web applications with a comprehensive set of pre-built, accessible UI components.

### Technology Stack

- **Language:** TypeScript 5.9.3
- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.17
- **UI Components:** shadcn/ui (based on Radix UI primitives)
- **Routing:** React Router DOM 7.9.6
- **Form Management:** React Hook Form 7.67.0 with Zod 4.1.13 validation
- **Charts:** Recharts 2.15.4
- **Icons:** Lucide React 0.555.0
- **Linting:** ESLint 9.39.1

## Repository Structure

```
keka-goal/
└── shadcn-vite-app/           # Main application directory
    ├── src/
    │   ├── components/
    │   │   ├── layout/        # Layout components (DashboardLayout)
    │   │   └── ui/            # 60+ shadcn/ui components
    │   ├── pages/             # Page components (Overview, ButtonShowcase, etc.)
    │   ├── hooks/             # Custom React hooks
    │   ├── lib/               # Utility functions
    │   ├── assets/            # Static assets
    │   ├── App.tsx            # Main application component
    │   ├── main.tsx           # Application entry point
    │   └── index.css          # Global styles and Tailwind imports
    ├── public/                # Public static files
    ├── package.json           # Dependencies and scripts
    ├── vite.config.ts         # Vite configuration
    ├── tsconfig.json          # TypeScript configuration (project references)
    ├── eslint.config.js       # ESLint configuration
    └── components.json        # shadcn/ui CLI configuration
```

**Important:** All application code is within the `shadcn-vite-app/` subdirectory, not at the repository root.

## Getting Started

### Prerequisites

- Node.js v24.13.0 (or compatible version)
- npm 11.6.2 (or compatible version)

### Installation

```bash
cd shadcn-vite-app
npm install
```

**Note:** During installation, you may see security vulnerabilities warnings. This is documented in the "Known Issues" section below.

## Development Workflow

### Available Commands

All commands must be run from the `shadcn-vite-app/` directory:

```bash
# Development server with hot module replacement (HMR)
npm run dev

# Production build (TypeScript compilation + Vite build)
npm run build

# Lint code with ESLint
npm run lint

# Preview production build locally
npm run preview
```

### Development Server

```bash
cd shadcn-vite-app
npm run dev
```

The development server will start on `http://localhost:5173` (default Vite port).

## Build and Testing

### Building the Project

```bash
cd shadcn-vite-app
npm run build
```

**Build Process:**
1. TypeScript compilation (`tsc -b`)
2. Vite bundling and optimization

**Known Build Errors (as of exploration):**
- `src/components/ui/input-group.tsx:136:6` - Type incompatibility with Input component's `size` prop
- `src/pages/Home.tsx:1:1` - Unused React import

These errors need to be fixed before successful builds.

### Linting

```bash
cd shadcn-vite-app
npm run lint
```

**Known Linting Issues (as of exploration):**
- Multiple `react-refresh/only-export-components` errors in UI components (badge, button, form, input, etc.)
- `react-hooks/purity` error in `src/components/ui/sidebar.tsx:611:26` - Math.random() call in useMemo

### Testing

**No test framework is currently configured.** There are no test files, Vitest config, or Jest config in the repository. When adding tests, consider:
- Vitest (recommended for Vite projects)
- React Testing Library
- Consistency with the TypeScript and Vite setup

## Code Conventions and Patterns

### Import Aliases

The project uses path aliases configured in `vite.config.ts` and `tsconfig.json`:

```typescript
"@/*": ["./src/*"]
```

**Usage:**
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### shadcn/ui Configuration

Components are configured in `components.json`:
- **Style:** "new-york"
- **Base Color:** neutral
- **CSS Variables:** Enabled
- **Icon Library:** lucide
- **RSC (React Server Components):** Disabled

### Component Patterns

**UI Components** (`src/components/ui/`):
- Use `class-variance-authority` for variant styling
- Export both component and prop types
- Follow Radix UI composition patterns
- Use forwardRef for component refs

**Example:**
```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  }
)
Button.displayName = "Button"
```

### Styling Conventions

- **Tailwind CSS 4.x** with CSS variables for theming
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- CSS variables defined in `src/index.css` for colors and themes
- Dark mode support via `next-themes`

### File Naming

- **Components:** PascalCase (e.g., `ButtonShowcase.tsx`, `DashboardLayout.tsx`)
- **UI Components:** kebab-case (e.g., `button.tsx`, `input-group.tsx`)
- **Utilities:** kebab-case (e.g., `utils.ts`)

## Common Tasks

### Adding a New shadcn/ui Component

```bash
cd shadcn-vite-app
npx shadcn@latest add [component-name]
```

This will:
1. Download the component to `src/components/ui/`
2. Add required dependencies to `package.json`
3. Configure according to `components.json`

### Adding a New Page

1. Create component in `src/pages/[PageName].tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="new-page" element={<NewPage />} />
```

### Adding a New Dependency

```bash
cd shadcn-vite-app
npm install [package-name]
```

**Security Note:** Always run `npm audit` after adding dependencies and address any critical vulnerabilities.

## Known Issues and Workarounds

### 1. Build Errors

**Issue:** TypeScript compilation fails with type errors
- `input-group.tsx`: Input size prop type mismatch
- `Home.tsx`: Unused React import

**Workaround:** Fix these errors before building:
```typescript
// In Home.tsx - Remove unused import if React is not used in JSX
// In input-group.tsx - Fix the size prop type compatibility
```

### 2. Linting Errors

**Issue:** ESLint reports 9 errors related to:
- `react-refresh/only-export-components` (8 files)
- `react-hooks/purity` (1 file - sidebar.tsx)

**Workaround:**
- For export issues: Extract non-component exports to separate files
- For purity issue: Move Math.random() outside useMemo or use a different approach

**Example fix for sidebar.tsx:**
```typescript
// Instead of:
const width = React.useMemo(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
}, [])

// Use:
const [width] = React.useState(() => `${Math.floor(Math.random() * 40) + 50}%`)
```

### 3. Security Vulnerabilities

**Issue:** npm audit shows 3 vulnerabilities (2 moderate, 1 high):
- lodash: Prototype Pollution in `_.unset` and `_.omit`
- react-router: CSRF, XSS, and SSR vulnerabilities

**Current Status:** These are in dependencies and may require updates or patches
**Command to check:** `npm audit`
**Potential fix:** `npm audit fix` (test thoroughly after applying)

### 4. Outdated Browser Baseline Data

**Issue:** Warning during linting: "The data in this module is over two months old"

**Workaround:**
```bash
npm i baseline-browser-mapping@latest -D
```

### 5. Package Lock File Changes

**Issue:** Running `npm install` modifies `package-lock.json` with peer dependency markers

**Workaround:** This is expected behavior. Commit the updated `package-lock.json` if needed.

## Important Notes for AI Agents

### Working Directory

**ALWAYS** run commands from the `shadcn-vite-app/` directory:
```bash
cd /home/runner/work/keka-goal/keka-goal/shadcn-vite-app
```

### Path References

- Use absolute paths starting from `/home/runner/work/keka-goal/keka-goal/`
- Application code is in `/home/runner/work/keka-goal/keka-goal/shadcn-vite-app/`

### Before Making Changes

1. **Understand the existing errors** - Don't fix unrelated issues
2. **Run linter and build** to establish baseline
3. **Check if changes affect shadcn/ui components** - these are community components and should be modified carefully
4. **Test in development mode** before building

### After Making Changes

1. **Run linter:** `npm run lint`
2. **Run build:** `npm run build`
3. **Test in dev mode:** `npm run dev` (if UI changes)
4. **Check for new security vulnerabilities:** `npm audit`

### Minimal Changes Philosophy

- **Don't fix unrelated linting errors** unless they block your task
- **Don't upgrade dependencies** unless necessary
- **Don't refactor existing code** unless required
- **Preserve existing patterns** and conventions

### ESLint Configuration

The project uses the new ESLint flat config format (`eslint.config.js`). When suggesting ESLint changes, use the flat config syntax, not the legacy `.eslintrc` format.

### TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json` - Root configuration with references
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Node.js (Vite config) configuration

### React Version

This project uses **React 19.2.0**, which is a recent version. Be aware of:
- New React features and APIs
- Potential breaking changes from React 18
- Updated hook behaviors

## Debugging Tips

### Build Failures

1. Check TypeScript errors first: `tsc -b`
2. Check Vite errors: `vite build`
3. Review import paths and aliases
4. Verify all dependencies are installed

### Runtime Errors

1. Check browser console
2. Review React error messages
3. Verify routing configuration in `App.tsx`
4. Check component prop types

### Styling Issues

1. Verify Tailwind classes are valid
2. Check CSS variable definitions in `index.css`
3. Review theme configuration
4. Inspect element classes in browser dev tools

## Resources

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

## Summary

This repository is a modern React application showcasing shadcn/ui components. When working with this codebase:

1. **Always work from the `shadcn-vite-app/` directory**
2. **Be aware of existing build and lint errors** - don't assume they need fixing unless relevant to your task
3. **Follow the established patterns** for components, imports, and styling
4. **Test thoroughly** with `npm run lint` and `npm run build`
5. **Respect the minimal changes philosophy** - only change what's necessary

This is a well-structured project with clear conventions. Understanding these patterns will help you make effective, maintainable contributions.
