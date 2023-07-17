import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/Components/ui/button";
import { DataTableFacetedFilter } from "@/Components/DataTableFacetedFilter";
import { Modality, Status } from "@/types";
import { DataTableDateRangeFilter } from "@/Components/DataTableDateRangeFilter";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	statuses: Status[];
	modalities: Modality[];
}

export function DataTableToolbar<TData>({
	table,
	statuses,
	modalities,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	if (
		!table.getColumn("status") &&
		!table.getColumn("created_at") &&
		!table.getColumn("modality")
	) {
		return null;
	}

	return (
		<div className="flex flex-col justify-start gap-2 md:flex-row md:items-center">
			{table.getColumn("created_at") ? (
				<DataTableDateRangeFilter
					column={table.getColumn("created_at")}
				/>
			) : null}

			<div className="flex gap-x-2">
				{table.getColumn("status") ? (
					<DataTableFacetedFilter
						column={table.getColumn("status")}
						title="Estatus"
						options={statuses.map((status) => ({
							label: status.name,
							value: status.name,
						}))}
					/>
				) : null}

				{table.getColumn("modality") ? (
					<DataTableFacetedFilter
						column={table.getColumn("modality")}
						title="Modalidades"
						options={modalities.map((modalities) => ({
							label: modalities.name,
							value: modalities.name,
						}))}
					/>
				) : null}

				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 w-fit px-2 lg:px-3"
					>
						Reiniciar
						<X className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	);
}
