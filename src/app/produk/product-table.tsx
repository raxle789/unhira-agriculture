"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  uniqueVegetablesData,
  vegetablesData,
  fruitData,
  meatData,
  chickenData,
  frozenFoodData,
  groceriesData,
} from "@/lib/productData";
import type { TProductCategory } from "@/types/typesDefinitions";

export default function ProductTableComponent() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const columns: ColumnDef<TProductCategory>[] = [
    {
      accessorKey: "id",
      header: "No",
    },
    {
      accessorKey: "name",
      header: "Nama Barang",
    },
    {
      accessorKey: "unit",
      header: "Satuan",
    },
    {
      accessorKey: "price",
      header: () => <div className="text-right">Harga Jual</div>,
      cell: ({ row }) => {
        const amount: number = row.getValue("price");
        const formatted = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
  ];

  const uniqueVegetablesTable = useReactTable({
    data: uniqueVegetablesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const vegetablesTable = useReactTable({
    data: vegetablesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const fruitTable = useReactTable({
    data: fruitData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const meatTable = useReactTable({
    data: meatData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const chickenTable = useReactTable({
    data: chickenData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const frozenFoodTable = useReactTable({
    data: frozenFoodData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });

  const groceriesTable = useReactTable({
    data: groceriesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
  });
  return (
    <div className="pb-[85px] flex justify-center items-center">
      <div className="w-4/5">
        <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow mb-7">
          Daftar Harga Produk
        </h1>
        <Tabs defaultValue="unique-vegetables">
          <div className="overflow-x-hidden">
            <div className="overflow-x-auto">
              <TabsList>
                <TabsTrigger value="unique-vegetables">
                  Unique Vegetables
                </TabsTrigger>
                <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
                <TabsTrigger value="fruit">Fruit</TabsTrigger>
                <TabsTrigger value="meat-&-fish">Meat & Fish</TabsTrigger>
                <TabsTrigger value="chicken">Chicken</TabsTrigger>
                <TabsTrigger value="frozen-food">Frozen Food</TabsTrigger>
                <TabsTrigger value="dry-goods-&-groceries">
                  Dry Goods & Groceries
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="unique-vegetables">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (uniqueVegetablesTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    uniqueVegetablesTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {uniqueVegetablesTable
                      .getHeaderGroups()
                      .map((headerGroup) => (
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
                    {uniqueVegetablesTable.getRowModel().rows?.length ? (
                      uniqueVegetablesTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => uniqueVegetablesTable.previousPage()}
                  disabled={!uniqueVegetablesTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => uniqueVegetablesTable.nextPage()}
                  disabled={!uniqueVegetablesTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vegetables">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (vegetablesTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    vegetablesTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {vegetablesTable.getHeaderGroups().map((headerGroup) => (
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
                    {vegetablesTable.getRowModel().rows?.length ? (
                      vegetablesTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => vegetablesTable.previousPage()}
                  disabled={!vegetablesTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => vegetablesTable.nextPage()}
                  disabled={!vegetablesTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="fruit">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (fruitTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    fruitTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {fruitTable.getHeaderGroups().map((headerGroup) => (
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
                    {fruitTable.getRowModel().rows?.length ? (
                      fruitTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fruitTable.previousPage()}
                  disabled={!fruitTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fruitTable.nextPage()}
                  disabled={!fruitTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="meat-&-fish">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (meatTable.getColumn("name")?.getFilterValue() as string) ??
                    ""
                  }
                  onChange={(event) =>
                    meatTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {meatTable.getHeaderGroups().map((headerGroup) => (
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
                    {meatTable.getRowModel().rows?.length ? (
                      meatTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => meatTable.previousPage()}
                  disabled={!meatTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => meatTable.nextPage()}
                  disabled={!meatTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="chicken">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (chickenTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    chickenTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {chickenTable.getHeaderGroups().map((headerGroup) => (
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
                    {chickenTable.getRowModel().rows?.length ? (
                      chickenTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => chickenTable.previousPage()}
                  disabled={!chickenTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => chickenTable.nextPage()}
                  disabled={!chickenTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="frozen-food">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (frozenFoodTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    frozenFoodTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {frozenFoodTable.getHeaderGroups().map((headerGroup) => (
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
                    {frozenFoodTable.getRowModel().rows?.length ? (
                      frozenFoodTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => frozenFoodTable.previousPage()}
                  disabled={!frozenFoodTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => frozenFoodTable.nextPage()}
                  disabled={!frozenFoodTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="dry-goods-&-groceries">
            <div>
              <div className="flex items-center py-4">
                <Input
                  placeholder="Cari Barang..."
                  value={
                    (groceriesTable
                      .getColumn("name")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    groceriesTable
                      .getColumn("name")
                      ?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    {groceriesTable.getHeaderGroups().map((headerGroup) => (
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
                    {groceriesTable.getRowModel().rows?.length ? (
                      groceriesTable.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
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
                          Tidak ada hasil.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => groceriesTable.previousPage()}
                  disabled={!groceriesTable.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => groceriesTable.nextPage()}
                  disabled={!groceriesTable.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
