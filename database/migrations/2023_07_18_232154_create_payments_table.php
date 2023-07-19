<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table
				->foreignId("fee_id")
				->constrained()
				->cascadeOnDelete();

            $table->dateTime("date");
            $table->boolean("is_cash")->deafult(false);
            $table->boolean("is_valid")->default(false);
            $table->string("comment");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
