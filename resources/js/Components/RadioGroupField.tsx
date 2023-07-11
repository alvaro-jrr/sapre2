import { RadioGroupProps } from "@radix-ui/react-radio-group";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { cn } from "@/lib/utils";

interface Props {
	labelProps: Omit<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		"className" | "id"
	>;
	radioGroupProps?: Omit<RadioGroupProps, "children">;
	options: {
		label: string;
		value: string;
	}[];
	className?: string;
}

export default function RadioGroupField({
	labelProps,
	options,
	className,
	radioGroupProps,
}: Props) {
	return (
		<div className={cn("space-y-3", className)}>
			<Label {...labelProps} />

			<RadioGroup
				{...radioGroupProps}
				className={cn(
					"flex flex-col space-y-1",
					radioGroupProps?.className
				)}
			>
				{options.map(({ label, value }) => (
					<div
						className="flex items-center space-x-3 space-y-0"
						key={value}
					>
						<RadioGroupItem value={value} id={value} />

						<Label className="font-normal" htmlFor={value}>
							{label}
						</Label>
					</div>
				))}
			</RadioGroup>
		</div>
	);
}
