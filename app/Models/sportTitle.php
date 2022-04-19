<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class sportTitle extends Model
{
    use HasFactory;

    protected $table = "sport_titles";

    public function players()
    {
        return $this->hasMany( player::class );
    }
}
