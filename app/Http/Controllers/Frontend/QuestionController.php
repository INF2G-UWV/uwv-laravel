<?php namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionController extends Controller {

    /**
     * Retrieve all questions and return in json format
     */
    public function questions()
    {
        $questions = \DB::table('questions')
            ->orderBy('order', 'ASC')
            ->get();

        return response()->json($questions);
    }
}