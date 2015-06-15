<?php namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Retrieve all questions and return a view page
	 */
	public function index()
	{
		$questions = \DB::table('questions')
			->where('parent_id', 0)
			->orderBy('order', 'ASC')
			->get();

		$subQuestions = \DB::table('questions')
			->where('parent_id', '!=', 0)
			->orderBy('order', 'ASC')
			->get();

		return view('admin.question.all', [
			'questions' => $questions,
			'subQuestions' => $subQuestions
		]);
	}

	/**
	 * Retrieve a specific question and return a view page
	 */
	public function question($id)
	{
		$question = \DB::table('questions')
			->where('id', $id)
			->first();

		return view('admin.question.single', [
			'question' => $question
		]);
	}

	/**
	 * Update the order of all questions
	 */
	public function updateOrder(Request $request)
	{
		$questions = $request->input('questions');

		foreach ($questions as $question) {
			\DB::table('questions')
				->where('id', $question['id'])
				->update([
						'order' => $question['order'],
						'parent_id' => $question['parent']
					]);
		}

		return response()->json(['success' => true]);
	}

	/**
	 * Update a specific question
	 */
	public function update(Request $request, $id)
	{
		$question = $request->input('question');
		$block = $request->input('block');
		$code = $request->input('code');
		$information = $request->input('information');

		$update = \DB::table('questions')
			->where('id', $id)
			->update([
				'question' => $question,
				'information' => $information,
				'block' => $block,
				'code' => $code
			]);

		\Session::flash('message', 'Vraag opgeslagen.');

		return response()->json(['success' => true]);
	}

	/**
	 * Delete a specific question
	 */
	public function delete(Request $request, $id)
	{
		$delete = \DB::table('questions')
			->where('id', $id)
			->delete();

		\Session::flash('message', 'Vraag verwijderd.');

		return redirect('admin/question');
	}

	/**
	 * Create a new question
	 */
	public function create(Request $request)
	{
		$question = $request->input('question');

		$insertId = \DB::table('questions')
			->insertGetId([
				'question' => $question,
				'parent_id' => 0
			]);

		if ($insertId) {
			\Session::flash('message', 'Vraag toegevoegd.');
			return redirect('admin/question/' . $insertId);
		}

		return redirect('admin/question');
	}
}
