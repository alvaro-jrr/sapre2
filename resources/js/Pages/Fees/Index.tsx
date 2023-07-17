import { DataTable } from "@/Components/DataTable";
import { DataTableColumnHeader } from "@/Components/DataTableColumnHeader";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Fee, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

type FeeDisplay = Omit<Fee, "created_at" | "updated_at">;

const columnHelper = createColumnHelper<FeeDisplay>();

// The columns to display
const columns = [
	columnHelper.accessor("loan_id", {
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="# Préstamo" />
		),
		cell: (info) => info.getValue(),
		enableHiding: false,
		enableSorting: false,
	}),
	columnHelper.accessor("expiration_date", {
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Fecha de Expiración"
			/>
		),
		cell: (info) => {
			const date = info.getValue();

			return format(new Date(date), "dd/MM/yyyy");
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
		enableSorting: false,
	}),
];

export default function Index({
	auth,
	fees,
}: PageProps<{ fees: FeeDisplay[] }>) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Cuotas"
					description="Observa las cuotas por pagar de los prestamos aprobados."
				/>
			}
		>
			<Head title="Cuotas" />

			<DataTable data={fees} columns={columns} />
		</AuthenticatedLayout>
	);
}
