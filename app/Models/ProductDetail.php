<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    protected $table    = 'product_details';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;
    
    protected $fillable = [
        'product_id',
        'color',
        'size',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}
