<?php

namespace Database\Seeders;

use App\Models\player;
use App\Models\sportTitle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $todo = ToDo::factory()->create();
        // ToDoDetail::factory(5)->create([
        //     'to_do_id' => $todo->id,
        // ]);
        $sport_title = sportTitle::factory()->create();
        player::factory( 3 )->create( [
            'sport_title_id' => $sport_title->id,
        ] );
    }
}
