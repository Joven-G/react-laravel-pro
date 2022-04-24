<?php

namespace Tests\Feature;

use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get( '/' );

        $response->assertStatus( 200 );
    }

    public function sportSelect()
    {
        $response = $this->get( '/api/sportTitles' );
        $response->assertStatus( 200 );
    }
}
