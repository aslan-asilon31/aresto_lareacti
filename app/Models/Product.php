<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table    = 'products';

    public $primaryKey  = 'id';

    protected $keyType  = 'string';

    use HasFactory;

    protected $fillable = [
        'name',
        'amount',
        'price',
    ];


    public function productdetails()
    {
        return $this->hasMany(ProductDetail::class);
    }
}
