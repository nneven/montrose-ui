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
    companyName: "TeamBoost Technologies",
    investmentAmount: 6424977,
    valuation: 3358630768,
    ownershipPercentage: 17.04,
    periodChangeInValue: 140047,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 24.47,
    moic: 2.41,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "TeamBoost Technologies",
    investmentAmount: 6424977,
    valuation: 3358630768,
    ownershipPercentage: 17.04,
    periodChangeInValue: 140047,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 24.47,
    moic: 2.41,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Kleiner Perkins",
    companyName: "ScoreSense",
    investmentAmount: 5937914,
    valuation: 1463722622,
    ownershipPercentage: 16.32,
    periodChangeInValue: 162593,
    realizedReturnValue: 3588887,
    unrealizedReturnValue: 4879336,
    irr: 35.85,
    moic: 1.15,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "StadiumStream",
    investmentAmount: 7213809,
    valuation: 4104223334,
    ownershipPercentage: 4.19,
    periodChangeInValue: 11064,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 19.87,
    moic: 4.31,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Accel Partners",
    companyName: "StadiumStream",
    investmentAmount: 7213809,
    valuation: 4104223334,
    ownershipPercentage: 4.19,
    periodChangeInValue: 11064,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 19.87,
    moic: 4.31,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "ScoreSense",
    investmentAmount: 1673956,
    valuation: 3653314161,
    ownershipPercentage: 2.91,
    periodChangeInValue: 87485,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 27.56,
    moic: 4.37,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "SportsGear Innovations",
    investmentAmount: 468771,
    valuation: 3693628701,
    ownershipPercentage: 19.87,
    periodChangeInValue: 221567,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 18.35,
    moic: 5.17,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Founders Fund",
    companyName: "Playbook Analytics",
    investmentAmount: 1833381,
    valuation: 230296105,
    ownershipPercentage: 17.64,
    periodChangeInValue: 106145,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 23.33,
    moic: 5.13,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Playbook Analytics",
    investmentAmount: 1833381,
    valuation: 230296105,
    ownershipPercentage: 17.64,
    periodChangeInValue: 106145,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 23.33,
    moic: 5.13,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Founders Fund",
    companyName: "SportsTech Solutions",
    investmentAmount: 2886013,
    valuation: 895585110,
    ownershipPercentage: 14.84,
    periodChangeInValue: 163386,
    realizedReturnValue: 3153922,
    unrealizedReturnValue: 3957192,
    irr: 35.86,
    moic: 1.65,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Accel Partners",
    companyName: "SportsTech Solutions",
    investmentAmount: 2886013,
    valuation: 895585110,
    ownershipPercentage: 14.84,
    periodChangeInValue: 163386,
    realizedReturnValue: 3153922,
    unrealizedReturnValue: 3957192,
    irr: 35.86,
    moic: 1.65,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "SportsGear Innovations",
    investmentAmount: 177036,
    valuation: 352938150,
    ownershipPercentage: 7.51,
    periodChangeInValue: 167676,
    realizedReturnValue: 522146,
    unrealizedReturnValue: 2214632,
    irr: 23.83,
    moic: 4.23,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "SportsGear Innovations",
    investmentAmount: 177036,
    valuation: 352938150,
    ownershipPercentage: 7.51,
    periodChangeInValue: 167676,
    realizedReturnValue: 522146,
    unrealizedReturnValue: 2214632,
    irr: 23.83,
    moic: 4.23,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "GoalTracker Inc.",
    investmentAmount: 4772965,
    valuation: 294682320,
    ownershipPercentage: 3.35,
    periodChangeInValue: 23700,
    realizedReturnValue: 4079925,
    unrealizedReturnValue: 772113,
    irr: 23.3,
    moic: 5.97,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "FanVibe",
    investmentAmount: 4233270,
    valuation: 473205993,
    ownershipPercentage: 8.37,
    periodChangeInValue: 306908,
    realizedReturnValue: 2956197,
    unrealizedReturnValue: 1285042,
    irr: 37.47,
    moic: 1.48,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Andreessen Horowitz",
    companyName: "FanVibe",
    investmentAmount: 4233270,
    valuation: 473205993,
    ownershipPercentage: 8.37,
    periodChangeInValue: 306908,
    realizedReturnValue: 2956197,
    unrealizedReturnValue: 1285042,
    irr: 37.47,
    moic: 1.48,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "FanConnect",
    investmentAmount: 9454786,
    valuation: 2496284012,
    ownershipPercentage: 4.57,
    periodChangeInValue: 373935,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 30.7,
    moic: 5.75,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Sequoia Capital",
    companyName: "FanConnect",
    investmentAmount: 9454786,
    valuation: 2496284012,
    ownershipPercentage: 4.57,
    periodChangeInValue: 373935,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 30.7,
    moic: 5.75,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "Athlete Insights",
    investmentAmount: 6551323,
    valuation: 1974482739,
    ownershipPercentage: 11.58,
    periodChangeInValue: 127357,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 24.69,
    moic: 4.98,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Sequoia Capital",
    companyName: "Athlete Insights",
    investmentAmount: 6551323,
    valuation: 1974482739,
    ownershipPercentage: 11.58,
    periodChangeInValue: 127357,
    realizedReturnValue: 0,
    unrealizedReturnValue: 0,
    irr: 24.69,
    moic: 4.98,
  },
  {
    lpName: "Fund of Funds",
    gpName: "General Catalyst",
    companyName: "GoalTracker Inc.",
    investmentAmount: 8258101,
    valuation: 2657458265,
    ownershipPercentage: 4.74,
    periodChangeInValue: 490565,
    realizedReturnValue: 2256117,
    unrealizedReturnValue: 4936915,
    irr: 22.67,
    moic: 1.73,
  },
  {
    lpName: "Fund of Funds",
    gpName: "Benchmark",
    companyName: "GoalTracker Inc.",
    investmentAmount: 8258101,
    valuation: 2657458265,
    ownershipPercentage: 4.74,
    periodChangeInValue: 490565,
    realizedReturnValue: 2256117,
    unrealizedReturnValue: 4936915,
    irr: 22.67,
    moic: 1.73,
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
        className="my-1"
      >
        Company Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="w-44 text-left">{row.getValue("companyName")}</div>
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
    aggregationFn: "mean",
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
    aggregationFn: "mean",
  },
  {
    accessorKey: "periodChangeInValue",
    header: () => <div className="text-right pr-4">Period Change In Value</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("periodChangeInValue"))}
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {formatCurrency(row.getValue("periodChangeInValue"))}
      </div>
    ),
    aggregationFn: "mean",
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
    aggregationFn: "mean",
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
  {
    accessorKey: "irr",
    header: () => <div className="text-right pr-4">IRR</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("irr")).toFixed(2)}%
      </div>
    ),
    aggregatedCell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        {Number(row.getValue("irr")).toFixed(2)}%
      </div>
    ),
    aggregationFn: "mean",
  },
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
      <Button asChild variant="ghost" className="-my-1">
        <Link href="/portfolio/holdings/1">
          <MagnifyingGlassIcon className="ml-2 h-5 w-5" />
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
