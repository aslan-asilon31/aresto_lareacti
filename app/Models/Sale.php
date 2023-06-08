<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $table    = 'sales';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'employee_id',
        'customer_id',
        'table_number',
        'order_total',
        'discount',
        'tax',
        'payment_type',
        'payment_amount',
        'change_due',
        'status',
    ];
}
