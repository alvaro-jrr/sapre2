<?php

namespace App\Http\Controllers;

use App\Models\Modality;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Permission;
use App\Models\Loan;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;
use Inertia\Response;

class LoanController extends Controller {
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		$user = Auth::user();
		$loans = [];

		if ($user->can("view loans")) {
			$loans = Loan::all();
		}

		if ($user->can("view own loans")) {
			$loans = Loan::all()->where("user_id", "=", $user->id);
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
		//
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
