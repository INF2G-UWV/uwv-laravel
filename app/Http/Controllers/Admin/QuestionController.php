<?php namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

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

	public function question($id)
	{
		$question = \DB::table('questions')
			->where('id', $id)
			->first();

		return view('admin.question.single', [
			'question' => $question
		]);
	}

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

	public function update(Request $request, $id)
	{
		$parentId = $request->input('parentId');
		$order = $request->input('order');

		$update = \DB::table('questions')
			->where('id', $id)
			->update([
				'parent_id' => $parentId,
				'order' => $order
			]);

		return response()->json($update);
	}

}
