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
					title="Pagos"
					description="Administra los pagos realizados para cubrir una cuota."
					actions={
						can(auth.user, "create payments") ? (
							<Button>Crear pago</Button>
						) : null
					}
				/>
			}
		>
			<Head title="Pagos" />
		</AuthenticatedLayout>
	);
}
