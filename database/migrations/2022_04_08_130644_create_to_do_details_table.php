<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('to_do_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('to_do_id')
            ->refarence('id')
            ->on('to_dos');
            $table->text('name');
            $table->boolean('completed_flag');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('to_do_details');
    }
};
