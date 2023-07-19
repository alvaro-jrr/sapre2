import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";

export default function ResetPassword({
	token,
	email,
}: {
	token: string;
	email: string;
}) {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: "",
		password_confirmation: "",
	});

	useEffect(() => {
		return () => {
			reset("password", "password_confirmation");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.store"));
	};

	return (
		<GuestLayout title="Reestablece tu Contraseña">
			<Head title="Reset Password" />

			<form className="space-y-6" onSubmit={submit}>
				<div className="space-y-4">
					<TextField
						id="email"
						labelProps={{ children: "Email" }}
						inputProps={{
							type: "email",
							name: "email",
							value: data.email,
							autoComplete: "username",
							onChange: (e) => setData("email", e.target.value),
						}}
						errorMessage={errors.email}
					/>

					<TextField
						id="password"
						labelProps={{ children: "Contraseña" }}
						inputProps={{
							type: "password",
							name: "password",
							value: data.password,
							autoComplete: "new-password",
							onChange: (e) =>
								setData("password", e.target.value),
							autoFocus: true,
						}}
						errorMessage={errors.password}
					/>

					<TextField
						id="password_confirmation"
						labelProps={{ children: "Confirmar Contraseña" }}
						inputProps={{
							type: "password",
							name: "password_confirmation",
							value: data.password_confirmation,
							autoComplete: "new-password",
							onChange: (e) =>
								setData(
									"password_confirmation",
									e.target.value
								),
							autoFocus: true,
						}}
						errorMessage={errors.password_confirmation}
					/>
				</div>

				<div className="flex items-center justify-end">
					<Button className="ml-4" disabled={processing}>
						Reestablecer contraseña
					</Button>
				</div>
			</form>
		</GuestLayout>
	);
}
