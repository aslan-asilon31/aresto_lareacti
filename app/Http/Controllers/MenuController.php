<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\MenuCategory;
use Str;
use Storage;

class MenuController extends Controller
{
    public function index()
    {
        // $menus = $this->menus->with('menu_categories');
        // return response()->json($menus);
        return Menu::with('menu_categories')->get();
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'image'=>'required|image',
            'desc'=>'required',
            'slug'=>'required',
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('menus/image', $request->image,$imageName);
            Menu::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Menu Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Menu!!'
            ],500);
        }
    }

    public function show($id)
    {
        return Menu::with('menu_categories')->findOrFail($id);

        
    }
}
