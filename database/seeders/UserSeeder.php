<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table( 'users' )->insert( [
            [
                'name' => '赤司征十郎',
                'email' => 'rakuzan@exsample.com',
                'email_verified_at' => now(),
                'password' => Hash::make( '12345678' ),
                'remember_token' => Str::random( 10 ),
                'created_at' => now(),
                'updated_at' => now(),
            ], [
                'name' => '黄瀬亮太',
                'email' => 'kaijou@exsample.com',
                'email_verified_at' => now(),
                'password' => Hash::make( '12345678' ),
                'remember_token' => Str::random( 10 ),
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ] );
    }

}
