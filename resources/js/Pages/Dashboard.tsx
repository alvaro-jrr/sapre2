import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Header";

export default function Dashboard({ auth }: PageProps) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Dashboard"
					description="Ten una visión general de los préstamos, cuotas y pagos realizados."
				/>
			}
		>
			<Head title="Dashboard" />
		</AuthenticatedLayout>
	);
}
