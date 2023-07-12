<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		$statuses = [
			[
				"name" => "En espera",
				"slug" => "pending",
			],
			[
				"name" => "Activo",
				"slug" => "active",
			],
			[
				"name" => "Expirado",
				"slug" => "expired",
			],
			[
				"name" => "Aprobado",
				"slug" => "approved",
			],
			[
				"name" => "Rechazado",
				"slug" => "declined",
			],
		];

		foreach ($statuses as $status) {
			Status::create([
				"name" => $status["name"],
				"slug" => $status["slug"],
			]);
		}
	}
}
