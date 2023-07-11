import Header from "@/Components/Header";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { can } from "@/lib/utils";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth }: PageProps) {
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
		</AuthenticatedLayout>
	);
}
