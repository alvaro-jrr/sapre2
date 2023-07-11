<?php

namespace Database\Seeders;

use App\Models\Modality;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModalitiesSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		$modalities = [
			[
				"name" => "Quincenal",
				"slug" => "biweekly",
			],
			[
				"name" => "Mensual",
				"slug" => "monthly",
			],
			[
				"name" => "Anual",
				"slug" => "yearly",
			],
		];

		foreach ($modalities as $modality) {
			Modality::create([
				"name" => $modality["name"],
				"slug" => $modality["slug"],
			]);
		}
	}
}
