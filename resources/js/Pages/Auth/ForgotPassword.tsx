import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";

export default function ForgotPassword({ status }: { status?: string }) {
	const { data, setData, post, processing, errors } = useForm({
		email: "",
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.email"));
	};

	return (
		<GuestLayout
			title="Olvidé mi Contraseña"
			description="¿Olvidaste tu contraseña? Danos tu correo electrónico y te
				enviaremos un enlace para que puedas establecer una nueva
				contraseña."
		>
			<Head title="Olvidé mi Contraseña" />

			{status && (
				<div className="mb-4 text-sm font-medium text-green-600">
					{status}
				</div>
			)}

			<form className="space-y-6" onSubmit={submit}>
				<TextField
					id="email"
					labelProps={{
						children: "Email",
					}}
					inputProps={{
						name: "email",
						type: "email",
						value: data.email,
						placeholder: "ej: johndoe@gmail.com",
						autoFocus: true,
						onChange: (e) => setData("email", e.target.value),
					}}
					errorMessage={errors.email}
				/>

				<div className="mt-4 flex items-center justify-end">
					<Button disabled={processing}>Enviar enlace</Button>
				</div>
			</form>
		</GuestLayout>
	);
}
