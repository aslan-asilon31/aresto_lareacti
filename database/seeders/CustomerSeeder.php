<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('customers')->insert([
            [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'phone' => '123-456-7890',
                'address' => '123 Main St',
                'city' => 'Anytown',
                'state' => 'CA',
                'zip' => '12345',
                'loyalty_points' => 100,
                'last_visit' => '2022-05-01',
                'allergies' => 'None',
                'dietary_restrictions' => 'None',
                'notes' => 'VIP customer',
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'phone' => '987-654-3210',
                'address' => '456 Oak Ave',
                'city' => 'Anycity',
                'state' => 'NY',
                'zip' => '54321',
                'loyalty_points' => 50,
                'last_visit' => '2022-04-15',
                'allergies' => 'Peanuts',
                'dietary_restrictions' => 'Vegetarian',
                'notes' => 'Regular customer',
            ],
            // add more customers here
        ]);
    }
}
