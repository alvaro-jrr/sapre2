import Header from "@/Components/Header";
import RadioGroupField from "@/Components/RadioGroupField";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Loan, Modality, PageProps, User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function Edit({
	auth,
	user,
	loan,
	modalities,
}: PageProps<{ user: User; loan: Loan; modalities: Modality[] }>) {
	const initialModality = modalities.find(
		(modality) => loan.modality_id === modality.id
	);

	const [interestModalityName, setInterestModalityName] = useState(
		initialModality?.name ?? ""
	);

	// Form controls
	const { data, setData, put, processing, errors } = useForm({
		client: loan.user_id,
		amount: String(loan.amount),
		modality: String(loan.modality_id),
		number_of_fees: String(loan.number_of_fees),
		interest_rate: String(loan.interest_rate),
	});

	// Submits the new loan
	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		put(route("loans.update", loan.id));
	};

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<Header
					title="Editar préstamo"
					description="Actualiza la información del préstamo selecionado"
				/>
			}
		>
			<Head title="Editar préstamo" />

			<Card>
				<CardContent className="p-6">
					<form onSubmit={submit} className="space-y-6">
						<div className="space-y-4">
							<TextField
								id="client"
								labelProps={{ children: "Cliente" }}
								inputProps={{
									name: "client",
									value: `${user.name} (${user.email})`,
									disabled: true,
								}}
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
									onValueChange: (value) => {
										setData("modality", value);

										const modality = modalities.find(
											({ id }) => `${id}` === value
										);

										// Update the interest modality name
										if (modality) {
											setInterestModalityName(
												modality.name
											);
										}
									},
									required: true,
								}}
								options={modalities.map((modality) => ({
									label: modality.name,
									value: `${modality.id}`,
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
									value: data.number_of_fees,
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
								labelProps={{
									children: `Tasa Efectiva ${interestModalityName} (%)`,
								}}
								inputProps={{
									name: "interest_rate",
									type: "number",
									placeholder: "ej: 25",
									autoComplete: "off",
									step: "any",
									min: 0,
									max: 100,
									value: data.interest_rate,
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

							<Button disabled={processing}>Actualizar</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</AuthenticatedLayout>
	);
}
