<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OrderItem;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrderItem::create([
            'order_id' => 1,
            'menu_item_id' => 1,
            'quantity' => 2,
            'price' => 12.99,
        ]);

        OrderItem::create([
            'order_id' => 1,
            'menu_item_id' => 2,
            'quantity' => 1,
            'price' => 9.99,
        ]);

        OrderItem::create([
            'order_id' => 2,
            'menu_item_id' => 3,
            'quantity' => 3,
            'price' => 15.99,
        ]);
    }
}
