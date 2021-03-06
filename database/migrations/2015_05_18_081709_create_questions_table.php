<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('questions', function($table)
		{
			$table->increments('id');
				$table->integer('parent_id')
					->nullable();
				$table->string('question', 100);
				$table->text('block')
					->nullable();
				$table->text('code')
					->nullable();
				$table->text('information')
					->nullable();
				$table->integer('order');
				$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('questions');
	}

}
