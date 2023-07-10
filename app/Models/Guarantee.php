<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Guarantee extends Model {
	use HasFactory;

	protected $fillable = ["description", "estimated_price"];

	/**
	 * Get the loan that stores this guarantee.
	 */
	public function loan(): BelongsTo {
		return $this->belongsTo(Loan::class);
	}
}
