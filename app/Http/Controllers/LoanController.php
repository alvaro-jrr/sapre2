<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LoanController extends Controller {
	/**
	 * Display a listing of the resource.
	 */
	public function index() {
		return Inertia::render("Loans/Index", []);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create() {
		//
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
