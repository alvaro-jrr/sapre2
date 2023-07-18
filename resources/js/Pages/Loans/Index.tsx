import { DataTable } from "@/Components/DataTable";
import { DataTableColumnHeader } from "@/Components/DataTableColumnHeader";
import Header from "@/Components/Header";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { can, dateRangeFilter } from "@/lib/utils";
import { Loan, Modality, PageProps, Status, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { DataTableRowActions } from "./Partials/DataTableRowActions";
import { DataTableToolbar } from "./Partials/DataTableToolBar";

type LoanDisplay = Omit<Loan, "user_id" | "modality_id" | "status_id"> & {
	user: Omit<User, "email_verified_at">;
	modality: Modality;
	status: Status;
};

const columnHelper = createColumnHelper<LoanDisplay>();

// The columns to display
const columns = [
	columnHelper.accessor("id", {
		id: "loan_id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="#" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
		enableSorting: false,
		filterFn: (row, columnId, value: string) => {
			const id = String(row.getValue(columnId));

			return id.startsWith(value);
		},
	}),
	columnHelper.accessor("created_at", {
		id: "created_at",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Creación" />
		),
		cell: (info) => {
			const date = info.getValue();

			return format(new Date(date), "dd/MM/yyyy");
		},
		enableHiding: false,
		enableSorting: false,
		filterFn: dateRangeFilter,
	}),
	columnHelper.accessor("approved_date", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Aprobación" />
		),
		cell: (info) => {
			const date = info.getValue();

			return format(new Date(date), "dd/MM/yyyy");
		},
		enableHiding: false,
		enableSorting: false,
	}),
	columnHelper.accessor("user", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Cliente" />
		),
		cell: (info) => {
			const user = info.getValue();

			return `${user.name} (${user.email})`;
		},
		enableHiding: false,
		enableSorting: false,
	}),
	columnHelper.accessor("amount", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Cantidad" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
	}),

	columnHelper.accessor("modality.name", {
		id: "modality",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Modalidad" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
		enableSorting: false,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	}),
	columnHelper.accessor("number_of_fees", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="N. de Cuotas" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
	}),
	columnHelper.accessor("interest_rate", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Tasa (%)" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
	}),
	columnHelper.accessor("status.name", {
		id: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Estatus" />
		),
		cell: (info) => {
			return <Badge variant="secondary">{info.getValue()}</Badge>;
		},
		enableSorting: false,
		enableHiding: false,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	}),
	columnHelper.accessor("id", {
		header: "",
		cell: ({ row }) => (
			<div className="flex justify-end">
				<DataTableRowActions row={row} />
			</div>
		),
	}),
];

// Remove user column when displaying own loans
const ownLoansColumns = columns.filter((column) => {
	// @ts-ignore
	const accessorKey = column.accessorKey ?? "";

	return accessorKey !== "user";
});

export default function Index({
	auth,
	loans,
	statuses,
	modalities,
}: PageProps<{
	loans: LoanDisplay[];
	statuses: Status[];
	modalities: Modality[];
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
					can(auth.user, "view own loans") ? ownLoansColumns : columns
				}
				toolbar={{
					props: {
						statuses,
						modalities,
					},
					Component: DataTableToolbar,
				}}
			/>
		</AuthenticatedLayout>
	);
}
