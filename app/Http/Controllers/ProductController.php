<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;


class ProductController extends Controller
{
        public function index()
    {
        return Product::all();
    }

    public function create()
    {
        return Inertia::render('Product/ProductAdd');   
    }

        public function show($id)
    {
        $product = Product::with('productdetails')->find($id);

        return response()->json($product);
    }

    public function edit($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // return response()->json($product);
        return Inertia::render('Product/ProductEdit', [
            'product' => $product
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'amount'=>'required',
            'price'=>'required',
        ]);

        try{
            Product::create($request->post());

            return response()->json([
                'message'=>'Product Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Product!!'
            ],500);
        }
    }

    
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'=>'required',
            'amount'=>'required',
            'price'=>'required',
        ]);

        try{

            $product->fill($request->post())->update();
            $product->save();

            return response()->json([
                'message'=>'Product Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a product!!'
            ],500);
        }
    }
    
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a Product!!'
            ]);
        }
    }

}
