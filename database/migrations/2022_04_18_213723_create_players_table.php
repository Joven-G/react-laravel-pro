<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'players', function ( Blueprint $table ) {
            $table->id();
            $table->foreignId( 'sport_title_id' );
            $table->string( 'name' );
            $table->integer( 'num' );
            $table->string( 'position' );
            $table->timestamps();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'players' );
    }
}
