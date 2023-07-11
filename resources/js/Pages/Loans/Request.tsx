import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Request({ auth }: PageProps) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Solicitud de Préstamo"
					description="Solicita un nuevo préstamo."
				/>
			}
		>
			<Head title="Solicitud de Préstamo" />
		</AuthenticatedLayout>
	);
}
