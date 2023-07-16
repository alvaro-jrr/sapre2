<?php

namespace App\Http\Controllers;

use App\Models\Fee;
use App\Models\Modality;
use App\Models\Status;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Loan;
use Inertia\Inertia;
use Inertia\Response;

class LoanController extends Controller {
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$user = Auth::user();
		$loans = [];
		$hidden = ["user_id", "modality_id", "status_id"];

		if ($user->can("view loans")) {
			$loans = Loan::with(["user:id,name,email", "modality", "status"])
				->latest()
				->get()
				->makeHidden($hidden);
		}

		if ($user->can("view own loans")) {
			$loans = Loan::with(["modality", "status"])
				->where("user_id", "=", $user->id)
				->latest()
				->get()
				->makeHidden($hidden);
		}

		return Inertia::render("Loans/Index", [
			"loans" => $loans,
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		return Inertia::render("Loans/Create", [
			"users" => User::permission("request loans")->get(),
			"modalities" => Modality::all(),
		]);
	}

	/**
	 * Show the form for creating a new loan request.
	 */
	public function request(): Response {
		return Inertia::render("Loans/Request", []);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request) {
		$validate = $request->validate([
			"client" => "required|exists:users,id",
			"amount" => "required|numeric|min:1",
			"modality" => "required|exists:modalities,id",
			"interest_rate" => "required|numeric|between:1,100",
			"number_of_fees" => "required|numeric|min:1",
		]);

		$loan = new Loan([
			"amount" => $validate["amount"],
			"interest_rate" => $validate["interest_rate"],
			"number_of_fees" => $validate["number_of_fees"],
			"approved_date" => now(),
		]);

		// Associate models
		$loan->user()->associate($validate["client"]);
		$loan->modality()->associate($validate["modality"]);

		$status = Status::firstWhere("slug", "active");
		$loan->status()->associate($status);

		// Store the loan and create associated fees
		$loan->save();
		$this->createFees($loan);

		return redirect(route("loans.index"));
	}

	/**
	 * Create the fees based on the loan parameters.
	 */
	private function createFees(Loan $loan) {
		// Avoid fee creation of non approved loans
		if (is_null($loan->approved_date)) {
			return;
		}

		$feeAmount = $this->calculateFeeAmount($loan);
		$numberOfFees = $loan->number_of_fees;
		$modalitySlug = $loan->modality->slug;
		$approvedDate = new DateTime($loan->approved_date);
		$latestExpireDate = null;

		for ($feeCount = 0; $feeCount < $numberOfFees; $feeCount++) {
			$nextExpireDate = $latestExpireDate;

			if (is_null($latestExpireDate)) {
				$nextExpireDate = $approvedDate;
			}

			// Set the interval based on modality
			switch ($modalitySlug) {
				case "monthly":
					// 1 month interval
					$intervalToAdd = new DateInterval("P1M");
					break;

				case "biweekly":
					// 15 days interval
					$intervalToAdd = new DateInterval("P15D");
					break;

				default:
					// 1 year interval
					$intervalToAdd = new DateInterval("P1Y");
			}

			$nextExpireDate->add($intervalToAdd);

			// Create fee with the expire date calculated
			$fee = new Fee([
				"amount" => $feeAmount,
				"expiration_date" => $nextExpireDate,
			]);

			$fee->loan()->associate($loan);
			$fee->save();
		}
	}

	/**
	 * Calculates the amount to pay for each fee.
	 */
	private function calculateFeeAmount(Loan $loan): float {
		$rate = $loan->interest_rate / 100;

		$numerator = $loan->amount * $rate;
		$denominator = 1 - (1 + $rate) ** -$loan->number_of_fees;

		return round($numerator / $denominator, 2);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Loan $loan) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Loan $loan) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Loan $loan) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Loan $loan) {
		$loan->delete();

		return redirect(route("loans.index"));
	}
}
