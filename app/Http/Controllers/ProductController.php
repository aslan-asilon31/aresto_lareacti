<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
        public function index()
    {
        // $product = Product::with('productdetails')->find($id);
        // return response()->json($product);
        return Product::all();
    }

        public function show($id)
    {
        $product = Product::with('productdetails')->find($id);

        return response()->json($product);
    }
}
