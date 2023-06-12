<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Str;
use Storage;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    
    public function create()
    {
        return Inertia::render('User/UserAdd');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'image'=>'required|image',
            'email'=>'required',
            'status'=>'required',
            'role'=>'required',
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('users/image', $request->image,$imageName);
            User::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'User Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a User!!'
            ],500);
        }
    }

    public function show(User $user)
    {
        return response()->json([
            'user'=>$user
        ]);
    }

    public function update(Request $request, User $product)
    {
        //set validation
        $request->validate([
            'name'   => 'required',
            'image'   => 'required',
            'email' => 'required',
            'status' => 'required',
            'role' => 'required',
        ]);

        try{

            $user->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($user->image){
                    $exists = Storage::disk('public')->exists("user/image/{$user->image}");
                    if($exists){
                        Storage::disk('public')->delete("user/image/{$user->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('user/image', $request->image,$imageName);
                $employee->image = $imageName;
                $employee->save();
            }

            return response()->json([
                'message'=>'Employee Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a employee!!'
            ],500);
        }

    }

    public function destroy(Product $user)
    {

            $user->delete();

            return response()->json([
                'message'=>'User Deleted Successfully!!'
            ]);
    }

}
