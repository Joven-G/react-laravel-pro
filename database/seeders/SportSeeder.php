<?php

namespace Database\Seeders;

use App\Models\player;
use App\Models\sportTitle;
use Illuminate\Database\Seeder;

class SportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sport_title = sportTitle::factory()->create();
        player::factory( 3 )->create( [
            'sport_title_id' => $sport_title->id,
        ] );
    }
}
