<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class QuestionController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function index()
	{
		$questions = \DB::table('questions')
			->whereNull('parent_id')
			->get();

		$subQuestions = \DB::table('questions')
			->whereNotNull('parent_id')
			->get();

		return view('admin.question.all', [
			'questions' => $questions,
			'subQuestions' => $subQuestions
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

}
