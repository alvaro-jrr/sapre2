<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Modality extends Model {
	use HasFactory;

	public $timestamps = false;

	protected $fillable = ["name", "slug"];

	/**
	 * Get the loans that use this modality.
	 */
	public function loans(): HasMany {
		return $this->hasMany(Loan::class);
	}
}
