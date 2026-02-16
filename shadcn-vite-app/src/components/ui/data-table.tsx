import React, { useState, useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash,
  Eye,
  Download,
  Share,
  Users,
} from "lucide-react";

export interface DataTableColumn<T = any> {
  key: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
  filterType?: "text" | "select" | "date" | "number";
  filterOptions?: string[];
}

export interface DataTableProps<T = any> {
  data: T[];
  columns: DataTableColumn<T>[];
  title?: string;
  description?: string;
  className?: string;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enablePagination?: boolean;
  enableSelection?: boolean;
  enableSearch?: boolean;
  itemsPerPage?: number;
  onRowSelect?: (selectedRows: T[]) => void;
  onRowAction?: (action: string, row: T) => void;
  actions?: Array<{
    key: string;
    label: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
  }>;
}

const dataTableVariants = cva(
  "w-full bg-white border border-ds-gray-200 rounded-xl overflow-hidden shadow-sm",
  {
    variants: {
      size: {
        sm: "text-sm",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  title,
  description,
  className,
  enableSorting = true,
  enableFiltering = true,
  enablePagination = true,
  enableSelection = true,
  enableSearch = true,
  itemsPerPage = 10,
  onRowSelect,
  onRowAction,
  actions = [
    { key: "view", label: "View details", icon: Eye },
    { key: "edit", label: "Edit", icon: Edit },
    { key: "share", label: "Share", icon: Share },
    { key: "download", label: "Download", icon: Download },
    { key: "delete", label: "Delete", icon: Trash },
  ],
  ...props
}: DataTableProps<T> & VariantProps<typeof dataTableVariants>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>(
    {}
  );
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [pageSize, setPageSize] = useState(itemsPerPage);

  // Handle sorting
  const handleSort = (key: string) => {
    if (!enableSorting) return;

    setSortConfig((prev) => ({
      key,
      direction: prev?.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Apply search filter
    if (searchTerm) {
      result = result.filter((item) =>
        columns.some((column) =>
          String(item[column.key])
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply column filters
    Object.entries(columnFilters).forEach(([key, value]) => {
      if (value) {
        result = result.filter((item) =>
          String(item[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, columnFilters, sortConfig, columns]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredAndSortedData.slice(
    startIndex,
    startIndex + pageSize
  );

  // Handle row selection
  const handleRowSelect = (rowId: string, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    if (checked) {
      newSelectedRows.add(rowId);
    } else {
      newSelectedRows.delete(rowId);
    }
    setSelectedRows(newSelectedRows);

    if (onRowSelect) {
      const selectedItems = data.filter((item) =>
        newSelectedRows.has(String(item.id))
      );
      onRowSelect(selectedItems);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(paginatedData.map((item) => String(item.id)));
      setSelectedRows(allIds);
    } else {
      setSelectedRows(new Set());
    }
  };

  // Progress calculation for pagination
  const progressPercentage = (currentPage / totalPages) * 100;

  // Avatars and progress bar for bottom card
  const showAvatars = paginatedData.length > 0 && paginatedData[0].name;

  return (
    <div className={cn(dataTableVariants(), className)} {...props}>
      {/* Header Section */}
      {(title || description) && (
        <div className="px-4 py-4 border-b border-ds-gray-200">
          <div className="flex items-center justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold leading-6 text-ds-gray-900">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-base leading-5 text-ds-gray-600 mt-1">
                  {description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="purple">
                <Users size={12} className="mr-1" />
                {filteredAndSortedData.length} total
              </Badge>
              {selectedRows.size > 0 && (
                <Badge variant="primary">{selectedRows.size} selected</Badge>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      {(enableSearch || enableFiltering) && (
        <div className="px-4 py-4 bg-ds-gray-50 border-b border-ds-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Global Search */}
            {enableSearch && (
              <div className="relative flex-1 max-w-sm">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ds-gray-400"
                />
                <Input
                  placeholder="Search across all columns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            )}

            {/* Column Filters */}
            {enableFiltering && (
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-ds-gray-500" />
                <span className="text-sm text-ds-gray-600">Filters:</span>
                {columns
                  .filter((col) => col.filterable)
                  .slice(0, 3)
                  .map((column) => (
                    <Select
                      key={column.key}
                      value={columnFilters[column.key] || ""}
                      onValueChange={(value) =>
                        setColumnFilters((prev) => ({
                          ...prev,
                          [column.key]: value,
                        }))
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder={column.header} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All {column.header}</SelectItem>
                        {column.filterOptions?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-ds-gray-200 scrollbar-track-transparent">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="bg-ds-gray-50 border-b border-ds-gray-200">
              {enableSelection && (
                <th className="h-16 px-4 py-3 text-left w-12 align-middle">
                  <Checkbox
                    checked={
                      selectedRows.size === paginatedData.length &&
                      paginatedData.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  className={cn(
                    "h-16 px-4 py-3 text-left text-sm font-medium text-ds-gray-600 leading-5 align-middle",
                    column.sortable &&
                      enableSorting &&
                      "cursor-pointer hover:bg-ds-gray-100",
                    column.align === "right" && "text-right",
                    column.align === "center" && "text-center"
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    <span>{column.header}</span>
                    {column.sortable && enableSorting && (
                      <ChevronDown
                        size={11}
                        className={cn(
                          "text-ds-gray-400 transition-transform",
                          sortConfig?.key === column.key &&
                            sortConfig.direction === "desc" &&
                            "rotate-180"
                        )}
                      />
                    )}
                  </div>
                </th>
              ))}
              <th className="h-16 px-4 py-3 text-right w-20 align-middle">
                <span className="text-sm font-medium text-ds-gray-600">
                  Actions
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (enableSelection ? 1 : 0) + 1}
                  className="px-4 py-12 text-center text-ds-gray-600"
                >
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-ds-gray-200 hover:bg-ds-gray-50 transition-colors"
                >
                  {enableSelection && (
                    <td className="h-16 px-4 py-3 align-middle">
                      <Checkbox
                        checked={selectedRows.has(String(item.id))}
                        onCheckedChange={(checked) =>
                          handleRowSelect(String(item.id), checked as boolean)
                        }
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "h-16 px-4 py-3 text-sm leading-5 align-middle",
                        column.align === "right" && "text-right",
                        column.align === "center" && "text-center"
                      )}
                    >
                      {column.render
                        ? column.render(item)
                        : String(item[column.key])}
                    </td>
                  ))}
                  <td className="h-16 px-4 py-3 text-right align-middle">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0!"
                        >
                          <MoreHorizontal
                            size={16}
                            className="text-ds-gray-600"
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {actions.map((action) => (
                          <DropdownMenuItem
                            key={action.key}
                            onClick={() => onRowAction?.(action.key, item)}
                            className={cn(
                              "flex items-center gap-2 cursor-pointer",
                              action.key === "delete" &&
                                "text-red-600 focus:text-red-600"
                            )}
                          >
                            {/* Always use Lucide icons for actions */}
                            {action.key === "view" && <Eye size={14} />}
                            {action.key === "edit" && <Edit size={14} />}
                            {action.key === "share" && <Share size={14} />}
                            {action.key === "download" && (
                              <Download size={14} />
                            )}
                            {action.key === "delete" && <Trash size={14} />}
                            {action.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination and Progress */}
      {/* Footer with Pagination and Progress */}
      <div className="px-4 py-4 border-t border-ds-gray-200 bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Progress and Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-ds-gray-600">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + pageSize, filteredAndSortedData.length)}{" "}
                of {filteredAndSortedData.length} results
              </span>
            </div>
          </div>
          {/* Right side - Pagination Controls */}
          <div className="flex items-center gap-2">
            <Select
              value={String(pageSize)}
              onValueChange={(value) => setPageSize(Number(value))}
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft size={14} />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8"
                  >
                    {page}
                  </Button>
                );
              })}
              {totalPages > 5 && <span className="text-ds-gray-500">...</span>}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Avatars and Progress Bar Card (bottom) */}
      {showAvatars && (
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {paginatedData.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="relative group">
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      fallback={item.name}
                      size="md"
                      className="border-2 border-white shadow-sm hover:z-10 transition-transform hover:scale-110"
                    />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-ds-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-ds-gray-300">{item.email}</div>
                    </div>
                  </div>
                ))}
                {paginatedData.length > 6 && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ds-gray-100 border-2 border-white text-xs font-medium text-ds-gray-600">
                    +{paginatedData.length - 6}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
