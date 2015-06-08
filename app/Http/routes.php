<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::group(['namespace' => 'Frontend', 'prefix' => 'api'], function()
{
    Route::get('/questions', 'QuestionController@questions');
});

Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function()
{
	Route::get('/', 'HomeController@index');
	Route::get('/question', 'QuestionController@index');
	Route::get('/question/create', 'QuestionController@create');
	Route::get('/question/{id}', 'QuestionController@question');
	Route::post('/question/order', 'QuestionController@updateOrder');
});


Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
