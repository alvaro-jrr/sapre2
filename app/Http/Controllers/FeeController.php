<?php

namespace App\Http\Controllers;

use App\Models\Fee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FeeController extends Controller {
	public function index(): Response {
		return inertia::render("Fees/Index", [
			"fees" => Fee::all(["id", "name"]),
		]);
	}
}
