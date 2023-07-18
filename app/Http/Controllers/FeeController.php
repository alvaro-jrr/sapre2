<?php

namespace App\Http\Controllers;

use App\Models\Fee;
use App\Models\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class FeeController extends Controller {
	public function index(): Response {
		$user = Auth::user();
		$hidden = ["created_at", "updated_at"];

		if ($user->can("view own fees")) {
			$fees = [];
			$loans = $user->loans->pluck("id");

			foreach ($loans as $loan) {
				$fee = Fee::all()
					->makeHidden($hidden)
					->where("loan_id", "=", $loan)
					->where("is_paid", "=", false);

				array_push($fees, ...$fee);
			}
		}

		if ($user->can("view fees")) {
			$fees = Fee::all()
				->makeHidden($hidden)
				->where("is_paid", "=", false);
		}

		return inertia::render("Fees/Index", [
			"fees" => $fees,
		]);
	}
}
