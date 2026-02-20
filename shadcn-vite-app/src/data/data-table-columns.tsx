// Import statements
import type {
  TeamMember,
  SalesRecord,
  CompanyRecord,
  FileRecord,
} from "./table-data";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import type { DataTableColumn } from "@/components/ui/data-table";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  DollarSign,
  Building,
  FileText,
  Clock,
} from "lucide-react";

// Team Members DataTable columns
export const teamMembersDataColumns: DataTableColumn<TeamMember>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
    filterable: true,
    width: "30%",
    render: (item: TeamMember) => {
      // Generate consistent background colors for avatars
      const avatarColors = [
        "#c7b9da", // purple
        "#bea887", // green
        "#b8d4c8", // blue
        "#d4b5ad", // orange
        "#dbc0dd", // pink
        "#d2c7ac", // indigo
      ];
      const itemId =
        typeof item.id === "number" ? item.id : parseInt(String(item.id)) || 0;
      const colorIndex = itemId % avatarColors.length;

      return (
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar
              src={item.avatar}
              alt={item.name}
              fallback={item.name}
              backgroundColor={avatarColors[colorIndex]}
              size="md"
            />
            {/* Online status indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <div className="font-semibold text-[14px] leading-5 text-ds-gray-900">
              {item.name}
            </div>
            <div className="text-[13px] leading-4 text-ds-gray-500">
              {item.email}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: ["Active", "Inactive", "Pending"],
    width: "12%",
    render: (item: TeamMember) => {
      const statusConfig = {
        active: {
          color: "text-emerald-700",
          bgColor: "bg-emerald-50",
          dotBg: "bg-emerald-500",
          label: "Active",
          icon: TrendingUp,
        },
        inactive: {
          color: "text-gray-700",
          bgColor: "bg-gray-50",
          dotBg: "bg-gray-400",
          label: "Inactive",
          icon: Minus,
        },
        pending: {
          color: "text-amber-700",
          bgColor: "bg-amber-50",
          dotBg: "bg-amber-500",
          label: "Pending",
          icon: Calendar,
        },
      } as const;

      const config = statusConfig[item.status];
      const StatusIcon = config.icon;

      return (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ${config.bgColor}`}
        >
          <div className={`w-2 h-2 rounded-full ${config.dotBg}`}></div>
          <StatusIcon size={12} className={config.color} />
          <span
            className={`text-[12px] font-medium leading-none ${config.color}`}
          >
            {config.label}
          </span>
        </div>
      );
    },
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: [
      "Product Manager",
      "Designer",
      "Developer",
      "Marketing Manager",
      "Data Analyst",
    ],
    width: "18%",
    render: (item: TeamMember) => (
      <div className="flex items-center gap-2">
        <div className="text-[14px] leading-5 text-ds-gray-900 font-medium">
          {item.role}
        </div>
        {item.role.includes("Manager") && (
          <Badge variant="gray" className="text-[10px] px-1.5 py-0.5">
            Lead
          </Badge>
        )}
      </div>
    ),
  },
  {
    key: "teams",
    header: "Teams",
    sortable: false,
    filterable: true,
    width: "25%",
    render: (item: TeamMember) => (
      <div className="flex flex-wrap gap-1">
        {item.teams.slice(0, 2).map((team, index) => (
          <div
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-[11px] font-medium leading-none text-blue-700 border border-blue-200"
          >
            {team}
          </div>
        ))}
        {item.teams.length > 2 && (
          <div className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-[11px] font-medium leading-none text-gray-600 border border-gray-200">
            +{item.teams.length - 2} more
          </div>
        )}
      </div>
    ),
  },
  {
    key: "lastActive",
    header: "Last Active",
    sortable: true,
    width: "15%",
    render: (_item: TeamMember) => {
      const lastActive = new Date();
      lastActive.setHours(
        lastActive.getHours() - Math.floor(Math.random() * 48),
      );

      const hoursDiff = Math.floor(
        (new Date().getTime() - lastActive.getTime()) / (1000 * 60 * 60),
      );
      let timeText = "";
      let colorClass = "text-ds-gray-600";

      if (hoursDiff < 1) {
        timeText = "Just now";
        colorClass = "text-green-600";
      } else if (hoursDiff < 24) {
        timeText = `${hoursDiff}h ago`;
        colorClass = "text-green-600";
      } else {
        timeText = `${Math.floor(hoursDiff / 24)}d ago`;
        colorClass = "text-ds-gray-500";
      }

      return (
        <div className="flex items-center gap-1">
          <Clock size={12} className={colorClass} />
          <span className={`text-[13px] ${colorClass}`}>{timeText}</span>
        </div>
      );
    },
  },
];

// Sales Records DataTable columns
export const salesDataColumns: DataTableColumn<SalesRecord>[] = [
  {
    key: "customer",
    header: "Customer",
    sortable: true,
    filterable: true,
    width: "25%",
    render: (item: SalesRecord) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          {item.customer.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-[14px] leading-5 text-ds-gray-900">
            {item.customer}
          </div>
          <div className="text-[13px] leading-4 text-ds-gray-500">
            Customer ID: #{item.invoice.split("-")[1]}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    sortable: true,
    filterable: true,
    filterType: "number",
    width: "15%",
    align: "right",
    render: (item: SalesRecord) => (
      <div className="flex items-center justify-end gap-1">
        <DollarSign size={12} className="text-green-600" />
        <span className="font-semibold text-[14px] text-green-600">
          ${item.amount.toLocaleString()}
        </span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: ["Paid", "Pending", "Overdue"],
    width: "12%",
    render: (item: SalesRecord) => {
      const statusVariants = {
        paid: {
          variant: "default",
          color: "bg-green-100 text-green-800",
          icon: TrendingUp,
        },
        pending: {
          variant: "secondary",
          color: "bg-yellow-100 text-yellow-800",
          icon: Calendar,
        },
        overdue: {
          variant: "destructive",
          color: "bg-red-100 text-red-800",
          icon: TrendingDown,
        },
      } as const;

      const config = statusVariants[item.status];
      const StatusIcon = config.icon;

      return (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${config.color}`}
        >
          <StatusIcon size={12} />
          <span className="text-[12px] font-medium capitalize">
            {item.status}
          </span>
        </div>
      );
    },
  },
  {
    key: "date",
    header: "Date",
    sortable: true,
    width: "15%",
  },
  {
    key: "invoice",
    header: "Invoice",
    sortable: false,
    width: "18%",
    render: (item: SalesRecord) => (
      <div className="flex items-center gap-2">
        <FileText size={14} className="text-ds-gray-400" />
        <code className="text-[13px] font-mono bg-gray-100 px-2 py-1 rounded">
          {item.invoice}
        </code>
      </div>
    ),
  },
  {
    key: "progress",
    header: "Progress",
    sortable: false,
    width: "15%",
    render: (item: SalesRecord) => {
      const progress =
        item.status === "paid" ? 100 : item.status === "pending" ? 50 : 25;
      return (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                progress === 100
                  ? "bg-green-500"
                  : progress === 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[12px] text-ds-gray-600 min-w-[3ch]">
            {progress}%
          </span>
        </div>
      );
    },
  },
];

// Companies DataTable columns
export const companiesDataColumns: DataTableColumn<CompanyRecord>[] = [
  {
    key: "name",
    header: "Company",
    sortable: true,
    filterable: true,
    width: "25%",
    render: (item: CompanyRecord) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center">
          <Building size={14} className="text-white" />
        </div>
        <div>
          <div className="font-medium text-[14px] leading-5 text-ds-gray-900">
            {item.name}
          </div>
          <div className="text-[13px] leading-4 text-ds-gray-500">
            {item.industry}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "industry",
    header: "Industry",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: [
      "Technology",
      "Healthcare",
      "Finance",
      "Manufacturing",
      "Retail",
    ],
    width: "15%",
  },
  {
    key: "employees",
    header: "Employees",
    sortable: true,
    width: "12%",
    align: "right",
    render: (item: CompanyRecord) => (
      <div className="flex items-center justify-end gap-1">
        <span className="font-medium text-[14px]">
          {item.employees.toLocaleString()}
        </span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: ["Active", "Inactive"],
    width: "12%",
    render: (item: CompanyRecord) => {
      const statusVariants = {
        active: { color: "bg-green-100 text-green-800" },
        inactive: { color: "bg-gray-100 text-gray-800" },
      } as const;

      const config = statusVariants[item.status];

      return (
        <Badge className={config.color}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
  {
    key: "location",
    header: "Location",
    sortable: false,
    filterable: true,
    width: "20%",
  },
  {
    key: "revenue",
    header: "Revenue",
    sortable: true,
    width: "16%",
    align: "right",
    render: (item: CompanyRecord) => {
      const seed = `${item.name}-${item.industry}-${item.location ?? ""}`;
      let hash = 0;
      for (let i = 0; i < seed.length; i++) {
        const charCode = seed.charCodeAt(i);
        hash = (hash * 31 + charCode) | 0; // simple deterministic hash
      }
      const offset = Math.abs(hash) % 500_000;
      const revenue = item.employees * 100_000 + offset;
      return (
        <div className="flex items-center justify-end gap-1">
          <DollarSign size={12} className="text-green-600" />
          <span className="font-semibold text-[14px]">
            ${(revenue / 1_000_000).toFixed(1)}M
          </span>
        </div>
      );
    },
  },
];

// Files DataTable columns
export const filesDataColumns: DataTableColumn<FileRecord>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
    filterable: true,
    width: "30%",
    render: (item: FileRecord) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
          <FileText size={14} className="text-white" />
        </div>
        <div>
          <div className="font-medium text-[14px] leading-5 text-ds-gray-900">
            {item.name}
          </div>
          <div className="text-[13px] leading-4 text-ds-gray-500">
            {item.type.toUpperCase()}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "type",
    header: "Type",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: ["PDF", "DOC", "XLS", "PPT", "IMG"],
    width: "10%",
    render: (item: FileRecord) => (
      <Badge variant="gray" className="text-[11px]">
        {item.type.toUpperCase()}
      </Badge>
    ),
  },
  {
    key: "size",
    header: "Size",
    sortable: true,
    width: "12%",
    align: "right",
  },
  {
    key: "modified",
    header: "Modified",
    sortable: true,
    width: "15%",
  },
  {
    key: "owner",
    header: "Owner",
    sortable: false,
    filterable: true,
    width: "18%",
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: ["Active", "Archived"],
    width: "15%",
    render: (item: FileRecord) => {
      const statusVariants = {
        active: { color: "bg-green-100 text-green-800" },
        archived: { color: "bg-yellow-100 text-yellow-800" },
      } as const;

      const config = statusVariants[item.status];

      return (
        <Badge className={config.color}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
];
