import { DataTable } from "@/Components/DataTable";
import { DataTableColumnHeader } from "@/Components/DataTableColumnHeader";
import Header from "@/Components/Header";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { can } from "@/lib/utils";
import { Loan, Modality, PageProps, Status, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

type LoanDisplay = Omit<Loan, "user_id" | "modality_id" | "status_id"> & {
	user: Omit<User, "email_verified_at">;
	modality: Modality;
	status: Status;
};

// The columns to display
const columns: ColumnDef<LoanDisplay>[] = [
	{
		accessorKey: "created_at",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Fecha" />
		),
		cell: ({ row }) => {
			return format(new Date(row.getValue("created_at")), "dd/MM/yyyy");
		},
		enableHiding: false,
		enableSorting: false,
	},
	{
		accessorKey: "user",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Cliente" />
		),
		cell: ({ row }) => {
			const user: LoanDisplay["user"] = row.getValue("user");

			return `${user.name} (${user.email})`;
		},
		enableHiding: false,
		enableSorting: false,
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Cantidad" />
		),
		cell: ({ row }) => row.getValue("amount"),
		enableHiding: false,
	},
	{
		accessorKey: "modality",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Modalidad" />
		),
		cell: ({ row }) => {
			const modality: LoanDisplay["modality"] = row.getValue("modality");

			return modality.name;
		},
		enableHiding: false,
		enableSorting: false,
	},
	{
		accessorKey: "number_of_fees",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="N. de Cuotas" />
		),
		cell: ({ row }) => row.getValue("number_of_fees"),
		enableHiding: false,
	},
	{
		accessorKey: "interest_rate",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Tasa de Interés (%)"
			/>
		),
		cell: ({ row }) => row.getValue("interest_rate"),
		enableHiding: false,
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Estatus" />
		),
		cell: ({ row }) => {
			const status: LoanDisplay["status"] = row.getValue("status");

			return <Badge variant="secondary">{status.name}</Badge>;
		},
		enableSorting: false,
		enableHiding: false,
	},
];

const clientColumns = columns.filter((column) => {
	// @ts-ignore
	const accessorKey = column.accessorKey ?? "";

	return accessorKey !== "user";
});

export default function Index({
	auth,
	loans,
}: PageProps<{
	loans: LoanDisplay[];
}>) {
	const canCreateLoans = can(auth.user, "create loans");

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Préstamos"
					description="Administra los préstamos solicitados."
					actions={
						<>
							{canCreateLoans ? (
								<Button asChild>
									<Link href={route("loans.create")}>
										Crear préstamo
									</Link>
								</Button>
							) : null}

							{can(auth.user, "request loans") ? (
								<Button
									variant={
										canCreateLoans ? "secondary" : "default"
									}
									asChild
								>
									<Link href={route("loans.request")}>
										Solicitar préstamo
									</Link>
								</Button>
							) : null}
						</>
					}
				/>
			}
		>
			<Head title="Préstamos" />

			<DataTable
				data={loans}
				columns={
					can(auth.user, "view own loans") ? clientColumns : columns
				}
			/>
		</AuthenticatedLayout>
	);
}
