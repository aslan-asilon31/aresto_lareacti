<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AboutSeeder::class,
            BookingSeeder::class,
            CustomerSeeder::class,
            EmployeeSeeder::class,
            HomeSeeder::class,
            InventorySeeder::class,
            MenuSeeder::class,
            OrderItemSeeder::class,
            OrderSeeder::class,
            OurTeamSeeder::class,
            ProductDetailSeeder::class,
            ProductSeeder::class,
            ReservationSeeder::class,
            SaleSeeder::class,
            ServiceSeeder::class,
            ShiftSeeder::class,
            SupplierSeeder::class,
            TestimonialSeeder::class,
        ]);
    }
}
