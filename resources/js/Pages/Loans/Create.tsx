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
					title="Crear préstamo"
					description="Crea un nuevo préstamo al cliente seleccionado."
				/>
			}
		>
			<Head title="Crear préstamo" />
		</AuthenticatedLayout>
	);
}
