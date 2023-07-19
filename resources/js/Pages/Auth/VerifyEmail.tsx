import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";

export default function VerifyEmail({ status }: { status?: string }) {
	const { post, processing } = useForm({});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("verification.send"));
	};

	return (
		<GuestLayout
			title="Verifica tu Email"
			description="¡Gracias por registrarte! Antes de comenzar, ¿podrías verificar
				tu correo electrónico al hacer clic en el enlace que hemos
				enviado? Si no recibiste el correo, con gusto te enviaremos
				otro."
		>
			<Head title="Verificación de Email" />

			{status === "verification-link-sent" ? (
				<div className="mb-4 text-sm font-medium text-green-600">
					Un nuevo enlace de verificación ha sido enviado al correo
					electrónico que has suministrado durante el registro.
				</div>
			) : null}

			<form onSubmit={submit}>
				<div className="mt-4 flex items-center justify-between">
					<Button disabled={processing}>Reenviar enlace</Button>

					<Button variant="secondary" asChild>
						<Link as="button" method="post" href={route("logout")}>
							Cerrar Sesión
						</Link>
					</Button>
				</div>
			</form>
		</GuestLayout>
	);
}
