<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create("loans", function (Blueprint $table) {
			$table->id();

			$table
				->foreignId("user_id")
				->constrained()
				->cascadeOnDelete();

			$table
				->foreignId("modality_id")
				->constrained()
				->cascadeOnDelete();

			$table->double("amount");
			$table->double("interest_rate");
			$table->integer("number_of_fees");

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists("loans");
	}
};
