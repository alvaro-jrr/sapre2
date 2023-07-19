<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DepositType extends Model
{
    use HasFactory;

    protected $fillable = ["name"];

    /**
	 * Get the deposits by type.
	 */
    public function deposits(): HasMany {
		return $this->hasMany(Deposit::class);
	}
}
