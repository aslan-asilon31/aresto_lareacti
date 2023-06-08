<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $table    = 'inventories';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'item_name',
        'quantity',
        'unit_price',
        'reorder_level',
    ];
}
