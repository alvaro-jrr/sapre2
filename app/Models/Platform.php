<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Platform extends Model {
	use HasFactory;

	protected $fillable = ["name"];

	/**
	 * Get deposits by platform
	 */
	public function deposits(): HasMany {
		return $this->hasMany(Deposit::class);
	}
}
