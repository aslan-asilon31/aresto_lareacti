<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reservation;
use Carbon\Carbon;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Reservation::create([
            'customer_id' => 1,
            'table_id' => 1,
            'reservation_time' => Carbon::now(),
            'duration' => 2,
            'party_size' => 4,
            'notes' => 'No alcohol',
            'status' => 'Pending',
        ]);

        Reservation::create([
            'customer_id' => 2,
            'table_id' => 2,
            'reservation_time' => Carbon::now()->addDays(1),
            'duration' => 1,
            'party_size' => 2,
            'notes' => null,
            'status' => 'Confirmed',
        ]);

        Reservation::create([
            'customer_id' => 3,
            'table_id' => 3,
            'reservation_time' => Carbon::now()->addDays(2),
            'duration' => 3,
            'party_size' => 8,
            'notes' => 'Birthday celebration',
            'status' => 'Cancelled',
        ]);
    }
}
