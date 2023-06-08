<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\Customer;
use App\Models\Menu;
use App\Models\OrderItem;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $customers = Customer::all();

        foreach ($customers as $customer) {
            $menuItems = Menu::inRandomOrder()->limit(3)->get();

            $order = new Order;
            $order->customer_id = $customer->id;
            $order->total_price = $menuItems->sum('price');
            $order->status = 'pending';
            $order->save();

            foreach ($menuItems as $menuItem) {
                $orderItem = new OrderItem;
                $orderItem->order_id = $order->id;
                $orderItem->menu_item_id = $menuItem->id;
                $orderItem->quantity = rand(1, 3);
                $orderItem->price = $menuItem->price;
                $orderItem->save();
            }
        }
    }
}
