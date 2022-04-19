<?php

namespace Database\Factories;

use App\Models\sportTitle;
use Illuminate\Database\Eloquent\Factories\Factory;

class SportTitleFactory extends Factory
{
    protected $table = sportTitle::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
        ];
    }
}
