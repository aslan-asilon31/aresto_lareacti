<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuCategory extends Model
{
    use HasFactory;

    protected $table    = 'menu_categories';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'menu_id',
        'name',
        'image',
        'slug',
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    // public function menus()
    // {
    //     return $this->hasMany(Menu::class);
    // }


}
