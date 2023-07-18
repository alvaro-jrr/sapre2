<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create("fees", function (Blueprint $table) {
			$table->id();

			$table
				->foreignId("loan_id")
				->constrained()
				->cascadeOnDelete();

			$table->double("amount");
			$table->dateTime("expiration_date");
			$table->boolean("is_paid")->default(false);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists("fees");
	}
};
