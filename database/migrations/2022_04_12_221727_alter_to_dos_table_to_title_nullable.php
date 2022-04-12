<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterToDosTableToTitleNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table( 'dos_table_to_title_nullable', function ( Blueprint $table ) {
            $table->string( 'title' )->nullable()->change();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table( 'dos_table_to_title_nullable', function ( Blueprint $table ) {
            $table->string( 'title' )->change();
        } );
    }
}
