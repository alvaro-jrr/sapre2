<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Fee extends Model {
	use HasFactory;

	protected $fillable = ["amount", "expiration_date", "is_paid"];

	/**
	 * Get the loan paid by the fee.
	 */
	public function loan(): BelongsTo {
		return $this->belongsTo(Loan::class);
	}

	/**
	 * Get the payment that paids this fee.
	 */
	public function payment(): HasOne {
		return $this->hasOne(Payment::class);
	}
}
