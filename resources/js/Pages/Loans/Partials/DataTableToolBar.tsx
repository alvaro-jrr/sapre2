import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/Components/ui/button";
import { DataTableFacetedFilter } from "@/Components/DataTableFacetedFilter";
import { Status } from "@/types";
import { DataTableDateRangeFilter } from "@/Components/DataTableDateRangeFilter";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	statuses: Status[];
}

export function DataTableToolbar<TData>({
	table,
	statuses,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	if (!table.getColumn("status") && !table.getColumn("created_at")) {
		return null;
	}

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				{table.getColumn("created_at") ? (
					<DataTableDateRangeFilter
						column={table.getColumn("created_at")}
					/>
				) : null}

				{table.getColumn("status") ? (
					<DataTableFacetedFilter
						column={table.getColumn("status")}
						title="Estatus"
						options={statuses.map((status) => ({
							label: status.name,
							value: `${status.name}`,
						}))}
					/>
				) : null}

				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reiniciar
						<X className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	);
}
