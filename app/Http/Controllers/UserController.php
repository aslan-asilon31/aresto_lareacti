<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
        ]);


        User::create($request->post());

        return response()->json([
            'message'=>'User Created Successfully!!'
        ]);
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
            'email' => 'required',
        ]);

        //update post
        $product->update([
            'name'     => $request->name,
            'email'   => $request->email
        ]);

        return response()->json([
            'message'=>'User Updated Successfully!!'
        ]);

    }

    public function destroy(Product $user)
    {

            $user->delete();

            return response()->json([
                'message'=>'User Deleted Successfully!!'
            ]);
    }

}
