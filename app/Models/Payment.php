<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Payment extends Model {
	use HasFactory;

	protected $fillable = ["date", "is_cash" . "is_valid"];

	/**
	 * Get the payment deposit.
	 */
	public function deposit(): HasOne {
		return $this->hasOne(Deposit::class);
	}

	/**
	 * Get the fee paid by the this payment.
	 */
	public function fee(): BelongsTo {
		return $this->belongsTo(Fee::class);
	}

	/**
	 * Get the status of the loan.
	 */
	public function status(): BelongsTo {
		return $this->belongsTo(Status::class);
	}
}
