<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductDetail;

class ProductDetailController extends Controller
{
    public function index()
    {
        return ProductDetail::all();
    }
}
