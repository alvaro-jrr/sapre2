<?php

namespace App\Http\Controllers;

use App\Models\Modality;
use App\Models\Status;
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

		// Store the loan
		$loan->save();

		return redirect(route("loans.index"));
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
