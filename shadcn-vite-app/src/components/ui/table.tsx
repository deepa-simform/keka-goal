import React, { useState, useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Pagination } from "./pagination";
import type { Column } from "@/data/table-columns";
import type { TeamMember } from "@/data/table-data";

const tableVariants = cva(
  "w-full bg-white border border-ds-gray-200 rounded-[12px] overflow-hidden",
  {
    variants: {
      variant: {
        divider: "",
        alternating: "",
      },
      size: {
        sm: "text-sm",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "divider",
      size: "default",
    },
  },
);

export interface TableProps<T = any>
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableVariants> {
  data: T[];
  columns: Column<T>[];
  title?: string;
  badge?: React.ReactNode;
  enableSorting?: boolean;
  enablePagination?: boolean;
  itemsPerPage?: number;
  onRowSelect?: (selectedRows: T[]) => void;
  emptyMessage?: string;
}

export function Table<T extends Record<string, any>>({
  className,
  variant,
  size,
  data,
  columns,
  title,
  badge,
  enableSorting = true,
  enablePagination = true,
  itemsPerPage = 10,
  onRowSelect,
  emptyMessage = "No data available",
  ...props
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig || !enableSorting) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortConfig, enableSorting]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!enablePagination) return sortedData;

    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage, enablePagination]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // Handle sorting
  const handleSort = (key: string) => {
    if (!enableSorting) return;

    const column = columns.find((col) => col.key === key);
    if (!column?.sortable) return;

    setSortConfig((current) => {
      if (current?.key === key) {
        return current.direction === "asc" ? { key, direction: "desc" } : null;
      }
      return { key, direction: "asc" };
    });
  };

  // Handle row selection
  const handleRowSelect = (rowId: string) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(rowId)) {
      newSelection.delete(rowId);
    } else {
      newSelection.add(rowId);
    }
    setSelectedRows(newSelection);

    if (onRowSelect) {
      const selectedData = data.filter((item) => newSelection.has(item.id));
      onRowSelect(selectedData);
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allIds = new Set(data.map((item) => item.id));
      setSelectedRows(allIds);
      onRowSelect?.(data);
    }
  };

  // Render cell content
  const renderCell = (item: T, column: Column<T>) => {
    if (column.render) {
      return column.render(item);
    }

    const value = item[column.key];

    // Handle special cases based on column key
    switch (column.key) {
      case "select":
        return (
          <input
            type="checkbox"
            checked={selectedRows.has(item.id)}
            onChange={() => handleRowSelect(item.id)}
            className="w-5 h-5 text-ds-brand-600 border-ds-gray-300 rounded focus:ring-ds-brand-100 focus:ring-2"
          />
        );

      case "name":
        if ("username" in item) {
          // Team member name
          const teamMember = item as unknown as TeamMember;
          return (
            <div>
              <div className="font-medium text-ds-gray-900">
                {teamMember.name}
              </div>
              <div className="text-sm text-ds-gray-600">
                {teamMember.username}
              </div>
            </div>
          );
        }
        return <span className="font-medium text-ds-gray-900">{value}</span>;

      case "status": {
        const normalizedStatus = String(value).toLowerCase();
        const statusVariant =
          normalizedStatus === "active"
            ? "success"
            : normalizedStatus === "inactive"
              ? "error"
              : "warning";
        return <Badge variant={statusVariant}>{value}</Badge>;
      }

      case "teams":
        return (
          <div className="flex flex-wrap gap-1">
            {value.slice(0, 3).map((team: string, index: number) => (
              <Badge key={index} variant="blue">
                {team}
              </Badge>
            ))}
            {value.length > 3 && (
              <Badge variant="gray">+{value.length - 3}</Badge>
            )}
          </div>
        );

      case "amount":
        return <span className="font-medium">${value.toLocaleString()}</span>;

      default:
        return <span className="text-ds-gray-600">{value}</span>;
    }
  };

  return (
    <div className={cn(tableVariants({ variant, size, className }))}>
      {/* Header */}
      {(title || badge) && (
        <div className="bg-white px-6 py-5 border-b-0">
          <div className="flex items-center gap-2">
            {title && (
              <h3 className="text-[18px] font-medium leading-7 text-ds-gray-900">
                {title}
              </h3>
            )}
            {badge && badge}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-ds-gray-50 border-b border-ds-gray-200">
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  className={cn(
                    "h-11 px-6 py-3 text-left text-[12px] font-medium text-ds-gray-600 leading-[18px]",
                    column.sortable &&
                      enableSorting &&
                      "cursor-pointer hover:bg-ds-gray-100",
                    column.align === "right" && "text-right",
                    column.align === "center" && "text-center",
                  )}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    <span>{column.header}</span>
                    {column.key === "role" && (
                      <HelpCircle size={16} className="text-ds-gray-400" />
                    )}
                    {column.sortable && enableSorting && (
                      <ChevronDown size={11} className="text-ds-gray-600" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-ds-gray-600"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-ds-gray-200 hover:bg-ds-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "h-[72px] px-6 py-4 text-[14px] leading-5",
                        column.align === "right" && "text-right",
                        column.align === "center" && "text-center",
                      )}
                    >
                      {renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (
        <div className="px-6 py-4 border-t-0 border-ds-gray-200">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

// Specific table components for different data types
export interface TeamMembersTableProps extends Omit<
  TableProps<TeamMember>,
  "data" | "columns"
> {
  data: TeamMember[];
}

export function TeamMembersTable({ data, ...props }: TeamMembersTableProps) {
  const columns: Column<TeamMember>[] = [
    {
      key: "select",
      header: "",
      width: "48px",
    },
    {
      key: "name",
      header: "Name",
      sortable: true,
      width: "auto",
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      width: "120px",
    },
    {
      key: "role",
      header: "Role",
      sortable: false,
      width: "176px",
    },
    {
      key: "email",
      header: "Email address",
      sortable: false,
      width: "224px",
    },
    {
      key: "teams",
      header: "Teams",
      sortable: false,
      width: "288px",
    },
    {
      key: "actions",
      header: "",
      width: "auto",
    },
  ];

  return (
    <Table<TeamMember>
      data={data}
      columns={columns}
      title="Team members"
      badge={<Badge variant="pink">{data.length} users</Badge>}
      {...props}
    />
  );
}
