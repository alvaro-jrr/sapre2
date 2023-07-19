<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deposit extends Model
{
    use HasFactory;

    protected $fillable = ["reference_number"];

	/**
	 * Get the deposit platform
	 */
    public function platforms(): BelongsTo {
		return $this->belongsTo(Platform::class);
	}

	/**
	 * Get the deposit type
	 */
    public function depositTypes(): BelongsTo {
		return $this->belongsTo(DepositType::class);
	}

	/**
	 * Get the deposit payment
	 */
    public function payments(): BelongsTo {
		return $this->belongsTo(Payment::class);
	}
}
