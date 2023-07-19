<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 */
	public function run(): void {
		$users = [
			[
				"email" => "alvarojrr79@gmail.com",
				"password" => Hash::make("12345678"),
				"name" => "Alvaro Resplandor",
			],
			[
				"email" => "cabrerasluis67@gmail.com",
				"password" => Hash::make("12345678"),
				"name" => "Luis Cabrera",
			],
			[
				"email" => "yesianlarenas@gmail.com",
				"password" => Hash::make("12345678"),
				"name" => "Yesenia Larenas",
			],
			[
				"email" => "julianlopezcastillo12@gmail.com",
				"password" => Hash::make("12345678"),
				"name" => "Julian Lopez",
			],
		];

		// Create admin users
		foreach ($users as $user) {
			$user = User::create($user);
			$user->assignRole("admin");
		}
	}
}
