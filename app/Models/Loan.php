<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Loan extends Model {
	use HasFactory;

	/**
	 * Get the user that owns the loan.
	 */
	public function user(): BelongsTo {
		return $this->belongsTo(User::class);
	}

	/**
	 * Get the modality used by the loan.
	 */
	public function modality(): BelongsTo {
		return $this->belongsTo(Modality::class);
	}
}
