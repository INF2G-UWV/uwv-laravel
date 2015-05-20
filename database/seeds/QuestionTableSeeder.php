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
            'block' => '',
            'order' => 1
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => 1,
            'question' => 'Vraag 1.1',
            'block' => '',
            'order' => 1
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => 1,
            'question' => 'Vraag 1.2',
            'block' => '',
            'order' => 2
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => null,
            'question' => 'Vraag 2',
            'block' => '',
            'order' => 3
        ]);

        DB::table('questions')
          ->insert([
            'parent_id' => 4,
            'question' => 'Vraag 2',
            'block' => '',
            'order' => 3
        ]);


        DB::table('questions')
          ->insert([
            'parent_id' => null,
            'question' => 'Vraag 3',
            'block' => '',
            'order' => 4
        ]);
    }
}
