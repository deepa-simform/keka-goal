import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Removed unused Input import
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  teamMembersData,
  salesData,
  companiesData,
  filesData,
} from "@/data/table-data";
import type {
  TeamMember,
  SalesRecord,
  CompanyRecord,
  FileRecord,
} from "@/data/table-data";
import {
  teamMembersDataColumns,
  salesDataColumns,
  companiesDataColumns,
  filesDataColumns,
} from "@/data/data-table-columns";
import {
  Users,
  DollarSign,
  Building,
  FileText,
  Download,
  RefreshCw,
  Plus,
} from "lucide-react";

export default function TableShowcase() {
  const [selectedTable, setSelectedTable] = useState<
    "team" | "sales" | "companies" | "files"
  >("team");
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Handle row selection
  const handleRowSelect = (rows: any[]) => {
    setSelectedRows(rows);
  };

  // Handle row actions
  const handleRowAction = (action: string, row: any) => {
    console.log(`Action ${action} triggered for:`, row);
    // Here you would implement actual action logic
    switch (action) {
      case "view":
        // Open view modal
        break;
      case "edit":
        // Open edit form
        break;
      case "delete":
        // Show delete confirmation
        break;
      case "share":
        // Open share dialog
        break;
      case "download":
        // Download item
        break;
    }
  };

  // Get table statistics
  const getTableStats = () => {
    const data = {
      team: teamMembersData,
      sales: salesData,
      companies: companiesData,
      files: filesData,
    };

    return {
      total: data[selectedTable].length,
      active: data[selectedTable].filter(
        (item) => item.status === "active" || item.status === "paid"
      ).length,
      selected: selectedRows.length,
    };
  };

  const stats = getTableStats();

  return (
    <div className="space-y-8 px-4 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-3xl font-bold text-ds-gray-900">
            Advanced Data Tables
          </h1>
          <p className="mt-2 text-ds-gray-600">
            Comprehensive data table with advanced filtering, sorting,
            pagination, and user management features
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw size={16} />
            Refresh
          </Button>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Add New
          </Button>
        </div>
      </div>

      {/* Table Type Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText size={20} />
            Data Table Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-ds-gray-700 mb-2 block">
                Select Data Type
              </label>
              <Select
                value={selectedTable}
                onValueChange={(value: any) => setSelectedTable(value)}
              >
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select table type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">👥 Team Members</SelectItem>
                  <SelectItem value="sales">💰 Sales Records</SelectItem>
                  <SelectItem value="companies">🏢 Companies</SelectItem>
                  <SelectItem value="files">📁 Files</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedRows.length > 0 && (
              <div className="flex items-center gap-2">
                <Badge variant="primary">{selectedRows.length} selected</Badge>
                <Button variant="outline" size="sm">
                  <Download size={14} className="mr-1" />
                  Export
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Team Members DataTable */}
      {selectedTable === "team" && (
        <DataTable<TeamMember>
          data={teamMembersData}
          columns={teamMembersDataColumns}
          title="Team Members Management"
          description="Manage your team members, track their status, and organize teams efficiently"
          enableSorting={true}
          enableFiltering={true}
          enablePagination={true}
          enableSelection={true}
          enableSearch={true}
          itemsPerPage={8}
          onRowSelect={handleRowSelect}
          onRowAction={handleRowAction}
          className="shadow-lg"
        />
      )}

      {/* Sales DataTable */}
      {selectedTable === "sales" && (
        <DataTable<SalesRecord>
          data={salesData}
          columns={salesDataColumns}
          title="Sales Records Dashboard"
          description={`Track sales performance and manage customer transactions. Total revenue: $${salesData
            .reduce((sum, record) => sum + record.amount, 0)
            .toLocaleString()}`}
          enableSorting={true}
          enableFiltering={true}
          enablePagination={true}
          enableSelection={true}
          enableSearch={true}
          itemsPerPage={10}
          onRowSelect={handleRowSelect}
          onRowAction={handleRowAction}
          className="shadow-lg"
        />
      )}

      {/* Companies DataTable */}
      {selectedTable === "companies" && (
        <DataTable<CompanyRecord>
          data={companiesData}
          columns={companiesDataColumns}
          title="Companies Directory"
          description="Comprehensive list of partner companies and their business information"
          enableSorting={true}
          enableFiltering={true}
          enablePagination={true}
          enableSelection={true}
          enableSearch={true}
          itemsPerPage={10}
          onRowSelect={handleRowSelect}
          onRowAction={handleRowAction}
          className="shadow-lg"
        />
      )}

      {/* Files DataTable */}
      {selectedTable === "files" && (
        <DataTable<FileRecord>
          data={filesData}
          columns={filesDataColumns}
          title="File Management System"
          description="Organize, track, and manage your digital assets and documents"
          enableSorting={true}
          enableFiltering={true}
          enablePagination={true}
          enableSelection={true}
          enableSearch={true}
          itemsPerPage={12}
          onRowSelect={handleRowSelect}
          onRowAction={handleRowAction}
          className="shadow-lg"
        />
      )}

      {/* Advanced Features Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={18} />
              Advanced Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">
                  Global search across all columns
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Column-specific filters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">
                  Advanced sorting with indicators
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Multi-row selection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Progress bars & indicators</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm">Rich avatar displays</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pagination & Navigation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw size={18} />
              Pagination & Navigation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Dynamic progress tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Configurable page sizes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Previous/Next navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">User avatar previews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Hover tooltips with details</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm">Results count display</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions & Dropdowns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building size={18} />
              Actions & Dropdowns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">Comprehensive action menus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">View, Edit, Share, Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">Delete with confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">Bulk operations support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">Status badges with icons</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm">Real-time updates</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
