<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Loan extends Model {
	use HasFactory;

	protected $fillable = ["amount", "interest_rate", "number_of_fees"];

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

	/**
	 * Get the status of the loan.
	 */
	public function status(): BelongsTo {
		return $this->belongsTo(Status::class);
	}

	/**
	 * Get the fees created to pay the loan.
	 */
	public function fees(): HasMany {
		return $this->hasMany(Fee::class);
	}

	/**
	 * Get the guarantees stored for the loan.
	 */
	public function guarantees(): HasMany {
		return $this->hasMany(Guarantee::class);
	}
}
