import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Create({ auth }: PageProps) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Registro de Pago"
					description="Registra un pago a la cuota más cercana a vencer."
				/>
			}
		>
			<Head title="Registro de Pago" />
		</AuthenticatedLayout>
	);
}
