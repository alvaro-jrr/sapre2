import type { Modality, PageProps, User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import Header from "@/Components/Header";
import RadioGroupField from "@/Components/RadioGroupField";
import SelectField from "@/Components/SelectField";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FormEventHandler } from "react";

export default function Create({
	auth,
	users,
	modalities,
}: PageProps<{ users: User[]; modalities: Modality[] }>) {
	// Form controls
	const { data, setData, post, processing, errors } = useForm({
		client: "",
		amount: "",
		modality: String(modalities[0].id),
		number_of_fees: "",
		interest_rate: "",
	});

	// Submits the new loan
	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("loans.store"));
	};

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

			<Card>
				<CardContent className="p-6">
					<form onSubmit={submit} className="space-y-6">
						<div className="space-y-4">
							<SelectField
								id="client"
								labelProps={{ children: "Cliente" }}
								placeholder="Seleccione al cliente"
								selectProps={{
									name: "client",
									required: true,
									onValueChange: (value) =>
										setData("client", value),
								}}
								options={users.map((user) => ({
									label: `${user.name} (${user.email})`,
									value: String(user.id),
								}))}
								errorMessage={errors.client}
							/>

							<TextField
								id="amount"
								labelProps={{ children: "Cantidad" }}
								inputProps={{
									name: "amount",
									type: "number",
									placeholder: "ej: 300.0",
									autoComplete: "off",
									step: "any",
									value: data.amount,
									onChange: (e) =>
										setData("amount", e.target.value),
									required: true,
								}}
								errorMessage={errors.amount}
							/>

							<RadioGroupField
								labelProps={{ children: "Modalidades de Pago" }}
								radioGroupProps={{
									value: data.modality,
									onValueChange: (value) =>
										setData("modality", value),
									required: true,
								}}
								options={modalities.map((modality) => ({
									label: modality.name,
									value: String(modality.id),
								}))}
							/>

							<TextField
								id="number_of_fees"
								labelProps={{ children: "Número de Cuotas" }}
								inputProps={{
									name: "number_of_fees",
									type: "number",
									placeholder: "ej: 1",
									autoComplete: "off",
									min: 1,
									onChange: (e) =>
										setData(
											"number_of_fees",
											e.target.value
										),
									required: true,
								}}
								errorMessage={errors.number_of_fees}
							/>

							<TextField
								id="interest_rate"
								labelProps={{ children: "Tasa de Interés (%)" }}
								inputProps={{
									name: "interest_rate",
									type: "number",
									placeholder: "ej: 25",
									autoComplete: "off",
									step: "any",
									min: 0,
									max: 100,
									onChange: (e) =>
										setData(
											"interest_rate",
											e.target.value
										),
									required: true,
								}}
								errorMessage={errors.interest_rate}
							/>
						</div>

						<div className="flex justify-end gap-4">
							<Button variant="ghost" asChild>
								<Link href={route("loans.index")}>
									Cancelar
								</Link>
							</Button>

							<Button>Crear</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</AuthenticatedLayout>
	);
}
