<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class player extends Model
{
    use HasFactory;

    protected $table = "players";

    public function sportTitles()
    {
        return $this->belongsTo( sportTitle::class );
    }
}
