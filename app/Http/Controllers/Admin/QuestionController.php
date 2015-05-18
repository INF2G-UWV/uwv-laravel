<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class QuestionController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function index()
	{
		return view('admin.question.all', [
			'questions' => \DB::table('questions')->get()
		]);
	}

	public function question($id)
	{
		$question = \DB::table('questions')
											->where('id', $id)
											->first();

		return view('admin.question.single', [
			'question' => $question
		]);
	}

	public function edit()
	{
		return null;
	}

}
