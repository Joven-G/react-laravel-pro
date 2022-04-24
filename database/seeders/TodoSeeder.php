<?php

namespace Database\Seeders;

use App\Models\ToDo;
use App\Models\ToDoDetail;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $todo = ToDo::factory()->create();
        ToDoDetail::factory( 5 )->create( [
            'to_do_id' => $todo->id,
        ] );
    }
}
