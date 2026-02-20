import React from "react";
import type {
  TeamMember,
  SalesRecord,
  CompanyRecord,
  FileRecord,
} from "./table-data";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Trash2, Edit2 } from "lucide-react";

export interface Column<T = any> {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  render?: (item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
}

// Team Members table columns
export const teamMembersColumns: Column<TeamMember>[] = [
  {
    key: "select",
    header: "",
    width: "48px",
    render: () => <Checkbox />,
  },
  {
    key: "name",
    header: "Name",
    sortable: true,
    width: "35%",
    render: (item: TeamMember) => (
      <div className="flex items-center gap-3">
        <Avatar
          src={item.avatar}
          alt={item.name}
          fallback={item.name}
          size="md"
        />
        <div>
          <div className="font-medium text-sm leading-5 text-ds-gray-900">
            {item.name}
          </div>
          <div className="text-sm leading-5 text-ds-gray-600">{item.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    width: "15%",
    render: (item: TeamMember) => (
      <Badge
        variant={
          item.status === "active"
            ? "success"
            : item.status === "pending"
            ? "warning"
            : "gray"
        }
      >
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </Badge>
    ),
  },
  {
    key: "role",
    header: "Role",
    sortable: false,
    width: "20%",
    render: (item: TeamMember) => (
      <span className="text-sm leading-5 text-ds-gray-600">{item.role}</span>
    ),
  },
  {
    key: "teams",
    header: "Teams",
    sortable: false,
    width: "20%",
    render: (item: TeamMember) => (
      <div className="flex flex-wrap gap-1">
        {item.teams.slice(0, 2).map((team, index) => (
          <Badge key={index} variant="gray" className="text-xs font-medium">
            {team}
          </Badge>
        ))}
        {item.teams.length > 2 && (
          <Badge variant="gray" className="text-xs font-medium">
            +{item.teams.length - 2}
          </Badge>
        )}
      </div>
    ),
  },
  {
    key: "actions",
    header: "",
    width: "10%",
    align: "right",
    render: () => (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 p-1 hover:bg-ds-gray-100 transition-colors"
        >
          <Edit2 size={16} className="text-ds-gray-600" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 p-1 hover:bg-ds-gray-100 transition-colors"
        >
          <Trash2 size={16} className="text-ds-gray-600" />
        </Button>
      </div>
    ),
  },
];

// Sales table columns
export const salesColumns: Column<SalesRecord>[] = [
  {
    key: "select",
    header: "",
    width: "48px",
    render: () => <Checkbox />,
  },
  {
    key: "customer",
    header: "Customer",
    sortable: true,
    width: "auto",
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    width: "120px",
    render: (item: SalesRecord) => {
      const statusVariants = {
        paid: "success",
        pending: "warning",
        overdue: "error",
      } as const;

      return (
        <Badge variant={statusVariants[item.status] || "gray"}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
  {
    key: "amount",
    header: "Amount",
    sortable: true,
    width: "120px",
    align: "right",
    render: (item: SalesRecord) => `$${item.amount.toLocaleString()}`,
  },
  {
    key: "date",
    header: "Date",
    sortable: true,
    width: "140px",
  },
  {
    key: "invoice",
    header: "Invoice",
    sortable: false,
    width: "120px",
  },
  {
    key: "actions",
    header: "",
    width: "auto",
    render: () => (
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Trash2 size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Edit2 size={16} />
        </Button>
      </div>
    ),
  },
];

// Companies table columns
export const companiesColumns: Column<CompanyRecord>[] = [
  {
    key: "select",
    header: "",
    width: "48px",
    render: () => <Checkbox />,
  },
  {
    key: "name",
    header: "Company",
    sortable: true,
    width: "auto",
  },
  {
    key: "industry",
    header: "Industry",
    sortable: true,
    width: "150px",
  },
  {
    key: "employees",
    header: "Employees",
    sortable: true,
    width: "120px",
    align: "right",
    render: (item: CompanyRecord) => item.employees.toLocaleString(),
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    width: "120px",
    render: (item: CompanyRecord) => {
      const statusVariants = {
        active: "success",
        inactive: "error",
      } as const;

      return (
        <Badge variant={statusVariants[item.status] || "gray"}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
  {
    key: "location",
    header: "Location",
    sortable: false,
    width: "180px",
  },
  {
    key: "actions",
    header: "",
    width: "auto",
    render: () => (
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Trash2 size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Edit2 size={16} />
        </Button>
      </div>
    ),
  },
];

// Files table columns
export const filesColumns: Column<FileRecord>[] = [
  {
    key: "select",
    header: "",
    width: "48px",
    render: () => <Checkbox />,
  },
  {
    key: "name",
    header: "Name",
    sortable: true,
    width: "auto",
  },
  {
    key: "type",
    header: "Type",
    sortable: true,
    width: "100px",
    render: (item: FileRecord) => <Badge variant="blueGray">{item.type}</Badge>,
  },
  {
    key: "size",
    header: "Size",
    sortable: true,
    width: "100px",
    align: "right",
  },
  {
    key: "modified",
    header: "Modified",
    sortable: true,
    width: "140px",
  },
  {
    key: "owner",
    header: "Owner",
    sortable: false,
    width: "150px",
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    width: "120px",
    render: (item: FileRecord) => {
      const statusVariants = {
        active: "success",
        archived: "warning",
      } as const;

      return (
        <Badge variant={statusVariants[item.status] || "gray"}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Badge>
      );
    },
  },
  {
    key: "actions",
    header: "",
    width: "auto",
    render: () => (
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Trash2 size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-1">
          <Edit2 size={16} />
        </Button>
      </div>
    ),
  },
];
