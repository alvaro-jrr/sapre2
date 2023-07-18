import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/Components/ui/button";
import { DataTableFacetedFilter } from "@/Components/DataTableFacetedFilter";
import { Modality, Status } from "@/types";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/Components/DateRangePicker";
import { Input } from "@/Components/ui/input";

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
	const [dateRange, setDateRange] = useState<DateRange | undefined>();
	const isFiltered = table.getState().columnFilters.length > 0;

	if (
		!table.getColumn("status") &&
		!table.getColumn("created_at") &&
		!table.getColumn("modality") &&
		!table.getColumn("loan_id")
	) {
		return null;
	}

	return (
		<div className="flex flex-col justify-start gap-2 lg:flex-row lg:items-center">
			<div className="flex flex-col gap-2 lg:flex-row">
				<Input
					placeholder="Filtra por # de préstamo"
					value={
						(table
							.getColumn("loan_id")
							?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table
							.getColumn("loan_id")
							?.setFilterValue(event.target.value)
					}
					className="h-8 w-full lg:w-[250px]"
				/>

				{table.getColumn("created_at") ? (
					<DatePickerWithRange
						label="Seleccione una fecha"
						selected={dateRange}
						buttonClassName="w-full h-8 lg:w-[250px]"
						onSelectDateRange={(value) => {
							table
								.getColumn("created_at")
								?.setFilterValue(value);

							setDateRange(value);
						}}
					/>
				) : null}
			</div>

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
						onClick={() => {
							setDateRange(undefined);
							table.resetColumnFilters();
						}}
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