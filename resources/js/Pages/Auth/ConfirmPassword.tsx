import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";

export default function ConfirmPassword() {
	const { data, setData, post, processing, errors, reset } = useForm({
		password: "",
	});

	useEffect(() => {
		return () => {
			reset("password");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.confirm"));
	};

	return (
		<GuestLayout
			title="Confirma tu Contraseña"
			description="Este es un área segura de la aplicación. Por favor, confirme su
				contraseña antes de continuar."
		>
			<Head title="Confirmar Contraseña" />

			<form className="space-y-6" onSubmit={submit}>
				<TextField
					id="password"
					labelProps={{ children: "Contraseña" }}
					inputProps={{
						name: "password",
						type: "password",
						value: data.password,
						autoFocus: true,
						onChange: (e) => setData("password", e.target.value),
					}}
					errorMessage={errors.password}
				/>

				<div className="flex items-center justify-end">
					<Button disabled={processing}>Confirmar</Button>
				</div>
			</form>
		</GuestLayout>
	);
}
