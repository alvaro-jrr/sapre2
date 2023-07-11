import type { Modality, PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Header";
import RadioGroupField from "@/Components/RadioGroupField";
import SelectField from "@/Components/SelectField";
import TextField from "@/Components/TextField";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create({
	auth,
	users,
	modalities,
}: PageProps<{ users: User[]; modalities: Modality[] }>) {
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
					<form className="space-y-6">
						<div className="space-y-4">
							<SelectField
								id="client"
								placeholder="Seleccione al cliente"
								labelProps={{ children: "Cliente" }}
								selectProps={{
									name: "client",
								}}
								options={users.map((user) => ({
									label: `${user.name} (${user.email})`,
									value: String(user.id),
								}))}
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
								}}
							/>

							<RadioGroupField
								labelProps={{ children: "Modalidades de Pago" }}
								options={modalities.map((modality) => ({
									label: modality.name,
									value: String(modality.id),
								}))}
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
								}}
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
