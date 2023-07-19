<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deposit extends Model {
	use HasFactory;

	protected $fillable = ["reference_number"];

	/**
	 * Get the deposit platform.
	 */
	public function platform(): BelongsTo {
		return $this->belongsTo(Platform::class);
	}

	/**
	 * Get the deposit type.
	 */
	public function depositType(): BelongsTo {
		return $this->belongsTo(DepositType::class);
	}

	/**
	 * Get the deposit payment.
	 */
	public function payment(): BelongsTo {
		return $this->belongsTo(Payment::class);
	}
}
