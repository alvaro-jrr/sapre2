import Header from "@/Components/Header";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { can } from "@/lib/utils";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ auth }: PageProps) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Préstamos"
					description="Administra los préstamos solicitados."
					actions={
						can(auth.user, "request loans") ? (
							<Button>Solicitar préstamo</Button>
						) : null
					}
				/>
			}
		>
			<Head title="Préstamos" />
		</AuthenticatedLayout>
	);
}
