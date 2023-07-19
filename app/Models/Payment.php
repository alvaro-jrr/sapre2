<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        "date",
        "is_cash".
        "is_valid",
        "comment",
    ];

    /**
	 * Get the payment deposit
	 */
    public function deposits(): HasMany {
		return $this->hasMany(Deposit::class);
	}

    /**
	 * Get the payment fees
	 */
    public function fees(): BelongsTo {
		return $this->belongsTo(Fee::class);
	}
}
