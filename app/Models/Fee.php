<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
	 * Get the payment by the fee
	 */
	public function payments(): HasMany {
		return $this->hasMany(Payment::class);
	}
}
