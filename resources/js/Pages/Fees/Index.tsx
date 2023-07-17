import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ auth }: PageProps) {
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
		</AuthenticatedLayout>
	);
}
