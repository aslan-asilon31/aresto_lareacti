<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('homes')->insert([
            [
                'banner' => 'path/to/banner.jpg',
                'welcome_message' => 'Welcome to our restaurant!',
                'featured_item' => 'Our Featured Item',
                'promotion' => '10% off on your first visit!',
                'reservation_button' => 'Book a table',
                'about_us' => 'About Us section',
                'contact_us' => 'Contact Us section',
                'social_media_link' => 'https://www.facebook.com/restaurant',
            ],
        ]);
    }
}
