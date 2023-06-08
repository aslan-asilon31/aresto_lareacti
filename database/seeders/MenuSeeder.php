<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            [
                'appetizer' => 'Bruschetta',
                'entrees' => 'Pesto Pasta',
                'sides' => 'Garlic Bread',
                'dessert' => 'Tiramisu',
                'beverage' => 'Italian Soda',
                'special' => 'Chef Special',
                'dietary_restriction' => 'Vegetarian',
                'pricing' => '$15.99',
            ],
            [
                'appetizer' => 'Caprese Salad',
                'entrees' => 'Chicken Parmesan',
                'sides' => 'Roasted Vegetables',
                'dessert' => 'Cannoli',
                'beverage' => 'Chianti Wine',
                'special' => '',
                'dietary_restriction' => 'Gluten-Free',
                'pricing' => '$19.99',
            ],
            [
                'appetizer' => 'Antipasto Platter',
                'entrees' => 'Lasagna',
                'sides' => 'Caesar Salad',
                'dessert' => 'Gelato',
                'beverage' => 'Espresso',
                'special' => '',
                'dietary_restriction' => '',
                'pricing' => '$23.99',
            ],
            // Add more menu items here
        ];

        DB::table('menus')->insert($menus);
    }
}
