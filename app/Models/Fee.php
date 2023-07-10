<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fee extends Model {
	use HasFactory;

	/**
	 * Get the loan paid by the fee.
	 */
	public function loan(): BelongsTo {
		return $this->belongsTo(Loan::class);
	}
}
