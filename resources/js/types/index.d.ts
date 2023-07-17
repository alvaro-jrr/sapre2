export interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at: string;
}

export interface UserWithRoles extends User {
	roles: UserRole[];
}

export interface Role {
	id: number;
	name: string;
	guard_name: string;
	created_at: string;
	updated_at: string;
}

export interface UserRole extends Omit<Role, "permissions"> {
	permissions: Permission[];
	pivot: {
		role_id: number;
		model_id: number;
		model_type: string;
	};
}

export interface Permission extends Pick<Role, "id" | "name" | "guard_name"> {
	pivot: {
		role_id: number;
		permission_id: number;
	};
	created_at: null;
	updated_at: null;
}

export interface Modality {
	id: number;
	name: string;
	slug: string;
}

export type Status = Modality;

export interface Loan {
	id: number;
	user_id: number;
	modality_id: number;
	status_id: number;
	amount: number;
	interest_rate: number;
	number_of_fees: number;
	approved_date: string;
	created_at: string;
	updated_at: string;
}

export interface Fee {
	id: number;
	loan_id: number;
	amount: number;
	expiration_date: string;
	created_at: string;
	updated_at: string;
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>
> = T & {
	auth: {
		user: UserWithRoles;
	};
};
