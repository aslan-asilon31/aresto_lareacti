<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('inventories')->insert([
            [
                'item_name' => 'Item 1',
                'quantity' => 5,
                'unit_price' => 10.50,
                'reorder_level' => 2,
            ],
            [
                'item_name' => 'Item 2',
                'quantity' => 8,
                'unit_price' => 12.00,
                'reorder_level' => 3,
            ],
            [
                'item_name' => 'Item 3',
                'quantity' => 15,
                'unit_price' => 8.75,
                'reorder_level' => 5,
            ],
            [
                'item_name' => 'Item 4',
                'quantity' => 3,
                'unit_price' => 15.25,
                'reorder_level' => 1,
            ],
            [
                'item_name' => 'Item 5',
                'quantity' => 10,
                'unit_price' => 9.99,
                'reorder_level' => 4,
            ],
            [
                'item_name' => 'Item 6',
                'quantity' => 7,
                'unit_price' => 7.50,
                'reorder_level' => 2,
            ],
            [
                'item_name' => 'Item 7',
                'quantity' => 12,
                'unit_price' => 11.00,
                'reorder_level' => 4,
            ],
            [
                'item_name' => 'Item 8',
                'quantity' => 6,
                'unit_price' => 14.75,
                'reorder_level' => 3,
            ],
            [
                'item_name' => 'Item 9',
                'quantity' => 20,
                'unit_price' => 6.99,
                'reorder_level' => 6,
            ],
            [
                'item_name' => 'Item 10',
                'quantity' => 4,
                'unit_price' => 18.25,
                'reorder_level' => 2,
            ],
        ]);
    }
}
