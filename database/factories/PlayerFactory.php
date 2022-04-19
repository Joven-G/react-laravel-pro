<?php

namespace Database\Factories;

use App\Models\player;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlayerFactory extends Factory
{
    protected $model = player::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'num' => $this->faker->numberBetween( 1, 1000 ),
            'position' => $this->faker->randomElement( ['GK', 'DF', 'MF', 'FW'] ),
        ];
    }
}
