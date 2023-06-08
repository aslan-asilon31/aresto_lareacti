<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Str;
use Storage;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

    public function create()
    {
        return Inertia::render('Employee/EmployeeAdd');
    }


    public function store(Request $request)
    {
        $request->validate([
            'image'=>'required|image',
            'name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'password'=>'required',
            'role'=>'required',
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('employees/image', $request->image,$imageName);
            Employee::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Employee Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Employee!!'
            ],500);
        }
    }


    public function show(Employee $employee)
    {
        return response()->json([
            'employee'=>$employee
        ]);
    }


    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'image'=>'nullable',
            'name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'password'=>'required',
            'role'=>'required',
        ]);

        try{

            $employee->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($employee->image){
                    $exists = Storage::disk('public')->exists("employee/image/{$employee->image}");
                    if($exists){
                        Storage::disk('public')->delete("employee/image/{$employee->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('employee/image', $request->image,$imageName);
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


    public function destroy(Employee $employee)
    {
        try {

            if($employee->image){
                $exists = Storage::disk('public')->exists("employee/image/{$employee->image}");
                if($exists){
                    Storage::disk('public')->delete("employee/image/{$employee->image}");
                }
            }

            $employee->delete();

            return response()->json([
                'message'=>'Employee Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a employee!!'
            ]);
        }
    }
}
