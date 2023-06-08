<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    
    protected $table    = 'orders';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'customer_id',
        'total_price',
        'status',
    ];
}
