<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table    = 'menus';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'appetizer',
        'entrees',
        'sides',
        'dessert',
        'beverage',
        'special',
        'dietary_restriction',
        'pricing',
    ];
}
