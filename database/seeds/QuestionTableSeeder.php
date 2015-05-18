<?php

use Illuminate\Database\Seeder;

class QuestionTableSeeder extends Seeder {

    public function run()
    {
        DB::table('questions')->delete();

        DB::table('questions')
          ->insert([
            'parent_id' => null,
            'question' => 'Vraag 1',
            'block' => ''
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => 1,
            'question' => 'Vraag 1.1',
            'block' => ''
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => null,
            'question' => 'Vraag 2',
            'block' => ''
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => null,
            'question' => 'Vraag 3',
            'block' => ''
        ]);
    }

}
