<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Booking::create(
            [
                'reservation_form' => 'Online',
                'booking_time' => '2023-05-10 19:30:00',
                'guest_number' => 4,
                'special_request' => 'Vegetarian options needed.',
                'confirmation_message' => 'Thank you for your booking. We look forward to seeing you!',
                'cancellation_policy' => 'Cancellations must be made at least 24 hours before the booking time.',
                'contact_information' => '123 Main St, Anytown, USA 12345. Phone: (123) 456-7890',
                'payment_information' => null,
            ],
        );
        \App\Models\Booking::create(
            [
                'reservation_form' => 'Phone',
                'booking_time' => '2023-05-12 18:00:00',
                'guest_number' => 2,
                'special_request' => null,
                'confirmation_message' => 'Your booking has been confirmed. We can\'t wait to have you!',
                'cancellation_policy' => 'No-shows will be charged the full amount of their reservation.',
                'contact_information' => '456 Main St, Anytown, USA 12345. Phone: (123) 456-7890',
                'payment_information' => null,
            ],
        );
        \App\Models\Booking::create(
            [
                'reservation_form' => 'Email',
                'booking_time' => '2023-05-15 20:00:00',
                'guest_number' => 6,
                'special_request' => 'Celebrating a birthday!',
                'confirmation_message' => 'Your reservation is confirmed. We\'ll make it a special occasion!',
                'cancellation_policy' => 'Cancellations made less than 12 hours before the booking time will incur a fee.',
                'contact_information' => '789 Main St, Anytown, USA 12345. Phone: (123) 456-7890',
                'payment_information' => 'Credit card ending in 1234',
            ]
        );
        
    }
}
