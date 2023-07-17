import { Column } from "@tanstack/react-table";
import { DatePickerWithRange } from "./DateRangePicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

interface DataTableDateRangeFilterProps<TData, TValue> {
	column?: Column<TData, TValue>;
	title?: string;
}

export function DataTableDateRangeFilter<TData, TValue>({
	column,
	title,
}: DataTableDateRangeFilterProps<TData, TValue>) {
	const [date, setDate] = useState<DateRange | undefined>();

	return (
		<DatePickerWithRange
			label={title}
			selected={date}
			onSelectDateRange={(value) => {
				column?.setFilterValue(value);

				setDate(value);
			}}
		/>
	);
}
