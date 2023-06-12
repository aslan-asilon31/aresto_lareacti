<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuDetail;
use Str;
use Storage;


class MenuDetailController extends Controller
{
    public function index()
    {
        return MenuDetail::all();
    }
    
    public function store(Request $request)
    {
        // Eloquent techniques
        $request->validate([
            'menu_id'=>'required',
            'name'=>'required',
            'image'=>'required|image',
            'desc'=>'required',
            'slug'=>'required',
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('menu_details/image', $request->image,$imageName);
            MenuDetail::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Menu Detail Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Menu Detail!!'
            ],500);
        }
        
    }

    public function destroy(MenuDetail $menudetail)
    {
        try {

            if($menudetail->image){
                $exists = Storage::disk('public')->exists("menu_details/image/{$menudetail->image}");
                if($exists){
                    Storage::disk('public')->delete("menu_details/image/{$menudetail->image}");
                }
            }

            $menudetail->delete();

            return response()->json([
                'message'=>'Menu Detail Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a Menu Detail!!'
            ]);
        }
    }

}
