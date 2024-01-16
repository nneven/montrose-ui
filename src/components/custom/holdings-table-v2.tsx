"use client";

import * as React from "react";
import Link from "next/link";
import {
  CaretSortIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Holding[] = [
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "OpenAI",
    investmentAmount: 7500000,
    valuation: 3000000000,
    ownershipPercentage: 3,
    periodChangeInValue: 50000000,
    positionValue: 90000000,
    realizedReturnValue: 90000000,
    unrealizedReturnValue: 0,
    moic: 12,
    irr: 16.2,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "OpenAI",
    investmentAmount: 250000,
    valuation: 4000000000,
    ownershipPercentage: 4,
    periodChangeInValue: 100000000,
    positionValue: 160000000,
    realizedReturnValue: 16000000,
    unrealizedReturnValue: 144000000,
    moic: 64,
    irr: 14.1,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Kleiner Perkins",
    companyName: "JasperAI",
    investmentAmount: 40000000,
    valuation: 12000000,
    ownershipPercentage: 4.5,
    periodChangeInValue: -100000,
    positionValue: 540000,
    realizedReturnValue: 486000,
    unrealizedReturnValue: 54000,
    moic: 0.01215,
    irr: 12.1,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "JasperAI",
    investmentAmount: 20000000,
    valuation: 9000000,
    ownershipPercentage: 3.2,
    periodChangeInValue: -500000,
    positionValue: 288000,
    realizedReturnValue: 0,
    unrealizedReturnValue: 288000,
    moic: 0,
    irr: 16.3,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Accel Partners",
    companyName: "JasperAI",
    investmentAmount: 100000,
    valuation: 17000000,
    ownershipPercentage: 1.4,
    periodChangeInValue: 10000,
    positionValue: 238000,
    realizedReturnValue: 166600,
    unrealizedReturnValue: 71400,
    moic: 1.666,
    irr: 24.2,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "Anthropic",
    investmentAmount: 1000000,
    valuation: 2500000000,
    ownershipPercentage: 1.5,
    periodChangeInValue: 25000000,
    positionValue: 37500000,
    realizedReturnValue: 3750000,
    unrealizedReturnValue: 33750000,
    moic: 3.75,
    irr: 27.56,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "Hugging Face",
    investmentAmount: 50000,
    valuation: 10000000,
    ownershipPercentage: 2.3,
    periodChangeInValue: 220000,
    positionValue: 230000,
    realizedReturnValue: 161000,
    unrealizedReturnValue: 69000,
    moic: 3.22,
    irr: 18.35,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Founders Fund",
    companyName: "Canoe Intelligence",
    investmentAmount: 75000,
    valuation: 2000000,
    ownershipPercentage: 1.3,
    periodChangeInValue: 10000,
    positionValue: 26000,
    realizedReturnValue: 18200,
    unrealizedReturnValue: 7800,
    moic: 0.2426666667,
    irr: 23.33,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Canoe Intelligence",
    investmentAmount: 100000,
    valuation: 1000000,
    ownershipPercentage: 1.1,
    periodChangeInValue: 20000,
    positionValue: 11000,
    realizedReturnValue: 0,
    unrealizedReturnValue: 11000,
    moic: 0,
    irr: 23.33,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Founders Fund",
    companyName: "Aviato",
    investmentAmount: 1000000,
    valuation: 0,
    ownershipPercentage: 2.4,
    periodChangeInValue: -15000000,
    positionValue: 0,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    moic: 0,
    irr: 0,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Accel Partners",
    companyName: "Aviato",
    investmentAmount: 2000000,
    valuation: 0,
    ownershipPercentage: 7.4,
    periodChangeInValue: -1000000,
    positionValue: 0,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    moic: 0,
    irr: 0,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Boom Technology",
    investmentAmount: 50000000,
    valuation: 1500000000,
    ownershipPercentage: 3.7,
    periodChangeInValue: 250000000,
    positionValue: 55500000,
    realizedReturnValue: 38850000,
    unrealizedReturnValue: 16650000,
    moic: 0.777,
    irr: 23.83,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Boom Technology",
    investmentAmount: 75000000,
    valuation: 2300000000,
    ownershipPercentage: 1.4,
    periodChangeInValue: 400000000,
    positionValue: 32200000,
    realizedReturnValue: 22540000,
    unrealizedReturnValue: 9660000,
    moic: 0.3005333333,
    irr: 23.83,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "SwingVision",
    investmentAmount: 5000000,
    valuation: 99000000,
    ownershipPercentage: 1.2,
    periodChangeInValue: 3000000,
    positionValue: 1188000,
    realizedReturnValue: 831600,
    unrealizedReturnValue: 356400,
    moic: 0.16632,
    irr: 23.3,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "Daylight",
    investmentAmount: 1000000,
    valuation: 0,
    ownershipPercentage: 3.4,
    periodChangeInValue: -1000000,
    positionValue: 0,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    moic: 0,
    irr: 37.47,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Andreessen Horowitz",
    companyName: "Daylight",
    investmentAmount: 500000,
    valuation: 0,
    ownershipPercentage: 3.7,
    periodChangeInValue: -5000000,
    positionValue: 0,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    moic: 0,
    irr: 37.47,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "IronNet",
    investmentAmount: 10000000,
    valuation: 10000000,
    ownershipPercentage: 2.3,
    periodChangeInValue: -100000,
    positionValue: 230000,
    realizedReturnValue: 161000,
    unrealizedReturnValue: 69000,
    moic: 0.0161,
    irr: 30.7,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Sequoia Capital",
    companyName: "IronNet",
    investmentAmount: 25000000,
    valuation: 0,
    ownershipPercentage: 1.8,
    periodChangeInValue: -40000000,
    positionValue: 0,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    moic: 0,
    irr: 30.7,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "PyrxisAI",
    investmentAmount: 20000000,
    valuation: 203000000,
    ownershipPercentage: 6,
    periodChangeInValue: 125000,
    positionValue: 12180000,
    realizedReturnValue: 12180000,
    unrealizedReturnValue: 0,
    moic: 0.609,
    irr: 24.69,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Sequoia Capital",
    companyName: "Grailed",
    investmentAmount: 75000000,
    valuation: 400000000,
    ownershipPercentage: 4.7,
    periodChangeInValue: -500000,
    positionValue: 18800000,
    realizedReturnValue: 3760000,
    unrealizedReturnValue: 15040000,
    moic: 0.05013333333,
    irr: 24.69,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Grailed",
    investmentAmount: 10000000,
    valuation: 250000000,
    ownershipPercentage: 13.1,
    periodChangeInValue: 100000,
    positionValue: 32750000,
    realizedReturnValue: 26200000,
    unrealizedReturnValue: 6550000,
    moic: 2.62,
    irr: 22.67,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "Vantager",
    investmentAmount: 1000000,
    valuation: 150000000,
    ownershipPercentage: 2.3,
    periodChangeInValue: 1000000,
    positionValue: 3450000,
    realizedReturnValue: 2070000,
    unrealizedReturnValue: 1380000,
    moic: 2.07,
    irr: 22.67,
  },
];

export type Holding = {
  lpName: string;
  gpName: string;
  companyName: string;
  investmentAmount: number;
  valuation: number;
  ownershipPercentage: number;
  periodChangeInValue: number;
  positionValue: number;
  realizedReturnValue: number;
  unrealizedReturnValue: number;
  irr: number;
  moic: number;
};

const WatchlistButton = () => {
  const [isWatchlist, setIsWatchlist] = React.useState(false);

  return (
    <Button
      variant="ghost"
      onClick={() => setIsWatchlist(!isWatchlist)}
      className="ml-3 text-lg text-yellow-400 hover:text-yellow-400"
    >
      {isWatchlist ? "★" : "☆"}
    </Button>
  );
};

const formatCurrency = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const columns: ColumnDef<Holding>[] = [
  // {
  //   id: "watchlist",
  //   header: () => <div className="ml-2">Watchlist</div>,
  //   // cell: () => <WatchlistButton />,
  //   aggregatedCell: () => <WatchlistButton />,
  // },
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="my-2"
      >
        Company Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="w-44 font-medium text-left">
        {row.getValue("companyName")}
      </div>
    ),
  },
  {
    accessorKey: "gpName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className=""
      >
        Funds
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="ml-4">{row.getValue("gpName")}</div>,
    aggregatedCell: ({ row }) => (
      <div className="ml-4">{row.getValue("gpName")}</div>
    ),
    aggregationFn: "count",
  },
  {
    accessorKey: "investmentAmount",
    header: () => <div className="text-right pr-4">Investment Amount</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("investmentAmount"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("investmentAmount"))}
      </div>
    ),
    aggregationFn: "sum",
  },
  {
    accessorKey: "valuation",
    header: () => <div className="text-right pr-4">Valuation</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("valuation"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("valuation"))}
      </div>
    ),
    aggregationFn: "mean",
  },
  {
    accessorKey: "ownershipPercentage",
    header: () => <div className="text-right pr-4">Ownership Percentage</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("ownershipPercentage")).toFixed(2)}%
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("ownershipPercentage")).toFixed(2)}%
      </div>
    ),
    aggregationFn: "sum",
  },
  {
    accessorKey: "periodChangeInValue",
    header: () => <div className="text-right pr-4">Period Change In Value</div>,
    cell: ({ row }) => (
      <div
        className={`text-right font-medium pr-4 ${
          Number(row.getValue("periodChangeInValue")) >= 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {formatCurrency(row.getValue("periodChangeInValue"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div
        className={`text-right font-medium pr-4 ${
          Number(row.getValue("periodChangeInValue")) >= 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {formatCurrency(row.getValue("periodChangeInValue"))}
      </div>
    ),
    aggregationFn: "sum",
  },
  {
    accessorKey: "realizedReturnValue",
    header: () => <div className="text-right pr-4">Realized Return Value</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("realizedReturnValue"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("realizedReturnValue"))}
      </div>
    ),
    aggregationFn: "sum",
  },
  {
    accessorKey: "unrealizedReturnValue",
    header: () => (
      <div className="text-right pr-4">Unrealized Return Value</div>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("unrealizedReturnValue"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("unrealizedReturnValue"))}
      </div>
    ),
    aggregationFn: "mean",
  },
  // {
  //   accessorKey: "irr",
  //   header: () => <div className="text-right pr-4">IRR</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right font-medium pr-4">
  //       {Number(row.getValue("irr")).toFixed(2)}%
  //     </div>
  //   ),
  //   aggregatedCell: ({ row }) => (
  //     <div className="text-right font-medium pr-4">
  //       {Number(row.getValue("irr")).toFixed(2)}%
  //     </div>
  //   ),
  //   aggregationFn: "mean",
  // },
  {
    accessorKey: "moic",
    header: () => <div className="text-right pr-4">MOIC</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("moic")).toFixed(2)}x
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("moic")).toFixed(2)}x
      </div>
    ),
    aggregationFn: "mean",
  },
  {
    accessorKey: "url",
    header: () => <div className="text-right pr-4">Details</div>,
    aggregatedCell: ({ row }) => (
      <Button variant="link" className="-my-1">
        <Link href="/portfolio/holdings/1">
          <MagnifyingGlassIcon className="h-5 w-5 relative left-3" />
        </Link>
      </Button>
    ),
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      expanded,
      grouping: ["companyName"],
    },
    autoResetAll: false,
  });

  return (
    <div className="w-full">
      <div className="flex items-center pb-4">
        <Input
          placeholder="Filter holdings..."
          value={
            (table.getColumn("companyName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("companyName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  // data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        cell.getIsGrouped()
                          ? "bg-white"
                          : cell.getIsAggregated()
                          ? "bg-white"
                          : cell.getIsPlaceholder()
                          ? "bg-slate-100"
                          : "bg-slate-100"
                      }
                    >
                      {cell.getIsGrouped() ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <button
                            {...{
                              onClick: row.getToggleExpandedHandler(),
                              style: {
                                cursor: row.getCanExpand()
                                  ? "pointer"
                                  : "normal",
                                display: "flex",
                                columnGap: "0.5rem",
                                marginLeft: "1rem",
                              },
                            }}
                          >
                            {row.getIsExpanded() ? "↓" : "↑"}
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </button>
                        </>
                      ) : cell.getIsAggregated() ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        flexRender(
                          cell.column.columnDef.aggregatedCell ??
                            cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                      {/* {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )} */}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
