import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange, DayPickerRangeProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { defaultLocale } from "@/config";

export function DatePickerWithRange({
	className,
	label,
	selected,
	buttonClassName,
	onSelectDateRange,
}: React.HTMLAttributes<HTMLDivElement> & {
	dateRange?: DateRange;
	label?: string;
	selected?: DayPickerRangeProps["selected"];
	buttonClassName?: string;
	onSelectDateRange?: DayPickerRangeProps["onSelect"];
}) {
	return (
		<div className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-[300px] justify-start text-left font-normal",
							!selected && "text-muted-foreground",
							buttonClassName
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{selected?.from ? (
							selected.to ? (
								<>
									{format(selected.from, "LLL dd, y")} -{" "}
									{format(selected.to, "LLL dd, y")}
								</>
							) : (
								format(selected.from, "LLL dd, y")
							)
						) : (
							<span>{label ?? "Selecciona una fecha"}</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={selected?.from}
						selected={selected}
						onSelect={onSelectDateRange}
						numberOfMonths={2}
						locale={defaultLocale}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}