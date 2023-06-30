import { Table } from "@tanstack/react-table";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";

import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface DataTablePaginationProps<TData> {
	table: Table<TData>;
}

export function DataTablePagination<TData>({
	table,
}: DataTablePaginationProps<TData>) {
	return (
		<div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-4 sm:items-center">
			<div className="flex justify-between items-center sm:justify-start space-x-2">
				<p className="text-sm font-medium">Filas por página</p>

				<Select
					value={`${table.getState().pagination.pageSize}`}
					onValueChange={(value) => {
						table.setPageSize(Number(value));
					}}
				>
					<SelectTrigger className="h-8 w-[70px]">
						<SelectValue
							placeholder={table.getState().pagination.pageSize}
						/>
					</SelectTrigger>
					<SelectContent side="top">
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<SelectItem key={pageSize} value={`${pageSize}`}>
								{pageSize}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<div className="flex justify-between sm:justify-start sm:gap-2">
				<div className="flex w-[100px] items-center text-sm font-medium">
					Página {table.getState().pagination.pageIndex + 1} de{" "}
					{table.getPageCount()}
				</div>

				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						<span className="sr-only">Ir a la primera página</span>
						<ChevronsLeft className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<span className="sr-only">Ir a la página anterior</span>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<span className="sr-only">
							Ir a la siguiente página
						</span>
						<ChevronRight className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={() =>
							table.setPageIndex(table.getPageCount() - 1)
						}
						disabled={!table.getCanNextPage()}
					>
						<span className="sr-only">Ir a la última página</span>
						<ChevronsRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
