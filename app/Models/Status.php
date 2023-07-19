<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model {
	use HasFactory;

	public $timestamps = false;

	protected $fillable = ["name", "slug"];

	/**
	 * Get the loans that have this status.
	 */
	public function loans(): HasMany {
		return $this->hasMany(Loan::class);
	}

	/**
	 * Get the payments that have this status.
	 */
	public function payments(): HasMany {
		return $this->hasMany(Payment::class);
	}
}
