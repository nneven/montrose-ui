"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getExpandedRowModel,
  ExpandedState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
    name: "TWD CASH",
    funds: 3,
    marketValue: 200000,
    subRows: [
      {
        funds: "Entreprenuer First",
        marketValue: 100000,
      },
      {
        funds: "Y Combinator",
        marketValue: 100000,
      },
    ],
  },
];

export type Holding = {
  name?: string;
  funds?: number;
  marketValue?: number;
  subRows?: Fund[];
};

export type Fund = {
  funds?: string;
  marketValue?: number;
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

export const columns: ColumnDef<Holding>[] = [
  {
    id: "watchlist",
    header: () => <div className="ml-2">Watchlist</div>,
    cell: () => <WatchlistButton />,
  },
  // {
  //   accessorKey: "ticker",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Ticker
  //         <CaretSortIcon className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => (
  //     <div className="uppercase pl-4">{row.getValue("ticker")}</div>
  //   ),
  // },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => <div>{row.getValue("name")}</div>,
    cell: ({ row, getValue }) => (
      <div
        style={{
          // Since rows are flattened by default,
          // we can use the row.depth property
          // and paddingLeft to visually indicate the depth
          // of the row
          paddingLeft: `${row.depth * 2}rem`,
        }}
      >
        {row.getCanExpand() && (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            }}
          >
            {getValue() as string} {row.getIsExpanded() ? "↑" : "↓"}
          </button>
        )}
      </div>
    ),
  },
  {
    accessorKey: "funds",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Funds
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("funds")}</div>,
  },
  // {
  //   accessorKey: "assetClass",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className="-ml-4"
  //       >
  //         Asset Class
  //         <CaretSortIcon className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <div>{row.getValue("assetClass")}</div>,
  // },
  // {
  //   accessorKey: "marketValue",
  //   header: () => <div className="text-right pr-4">Market Value</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right font-medium pr-4">
  //       ${row.getValue("marketValue")}
  //     </div>
  //   ),
  // },
  // {
  //   accessorKey: "weight",
  //   header: () => <div className="text-right pr-4">Weight</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right font-medium pr-4">
  //       {row.getValue("weight")}%
  //     </div>
  //   ),
  // },
  // {
  //   accessorKey: "shares",
  //   header: () => <div className="text-right pr-4">Shares</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right font-medium pr-4">
  //       {row.getValue("shares")}
  //     </div>
  //   ),
  // },
  {
    accessorKey: "marketValue",
    header: () => <div className="text-right pr-4">Market Value</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        ${row.getValue("marketValue")}
      </div>
    ),
  },
  {
    accessorKey: "marketValue",
    header: () => <div className="text-right pr-4">Market Value</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        ${row.getValue("marketValue")}
      </div>
    ),
  },
  {
    accessorKey: "marketValue",
    header: () => <div className="text-right pr-4">Market Value</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium pr-4">
        ${row.getValue("marketValue")}
      </div>
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
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    // @ts-ignore
    getSubRows: (row) => row.subRows,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      expanded,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center pb-4">
        <Input
          placeholder="Filter holdings..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
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
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
