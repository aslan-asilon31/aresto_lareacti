<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuCategory;
use Str;
use Storage;
use DB;
use Log;

class MenuCategoryController extends Controller
{
    public function index()
    {
        return DB::table('menu_categories')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu_id' => 'required',
            'name' => 'required',
            'image' => 'required|image',
            'slug' => 'required',
        ]);
    
        try {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
    
            // Prepare the SQL statement
            $statement = "
                INSERT INTO menu_categories (menu_id, name, image, slug, created_at, updated_at)
                VALUES (?, ?, ?, ?, NOW(), NOW())
            ";
    
            // Execute the SQL statement with the parameters
            DB::statement($statement, [
                $request->menu_id,
                $request->name,
                $imageName,
                $request->slug,
            ]);
    
            // Save the image to storage using Laravel
            Storage::disk('public')->putFileAs('menu_categories/image', $request->image, $imageName);
    
            return response()->json([
                'message' => 'Menu Category Created Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while creating a Menu Category !!'
            ], 500);
        }
    }
    
    public function destroy(MenuCategory $menucategory)
    {
        try {
            if ($menucategory->image) {
                $exists = Storage::disk('public')->exists("menu_categories/image/{$menucategory->image}");
                if ($exists) {
                    Storage::disk('public')->delete("menu_categories/image/{$menucategory->image}");
                }
            }

            // Prepare the SQL statement
            $statement = "
                DELETE FROM menu_categories WHERE id = :id
            ";

            // Execute the SQL statement with the parameter
            DB::statement($statement, [
                'id' => $menucategory->id,
            ]);

            return response()->json([
                'message' => 'Menu Category Deleted Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while deleting a Menu Category!!'
            ]);
        }
    }



}
