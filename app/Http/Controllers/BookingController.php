<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    public function index()
    {
        return Booking::all();
    }

    
    public function create()
    {
        return Inertia::render('Booking/BookingAdd');   
    }

        public function show($id)
    {
        $booking = Booking::with('bookingdetails')->find($id);

        return response()->json($booking);
    }

    public function edit($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        // return response()->json($booking);
        return Inertia::render('Booking/BookingEdit', [
            'booking' => $booking
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'reservation_form'=>'required',
            'booking_time'=>'required',
            'guest_number'=>'required',
            'special_request'=>'required',
            'confirmation_message'=>'required',
            'cancellation_policy'=>'required',
            'contact_information'=>'required',
            'payment_information'=>'required',
        ]);

        try{
            Booking::create($request->post());

            return response()->json([
                'message'=>'Booking Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Product!!'
            ],500);
        }
    }

    
    public function update(Request $request, Product $booking)
    {
        $request->validate([
            'name'=>'required',
            'amount'=>'required',
            'price'=>'required',
        ]);

        try{

            $booking->fill($request->post())->update();
            $booking->save();

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
    
    public function destroy(Product $booking)
    {
        try {
            $booking->delete();
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
