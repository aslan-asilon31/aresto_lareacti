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
        'name',
        'image',
        'desc',
        'slug',
    ];

    public function menu_categories()
    {
        return $this->hasMany(MenuCategory::class);
    }

    // public function menu_category()
    // {
    //     return $this->belongsTo(MenuCategory::class);
    // }
}
