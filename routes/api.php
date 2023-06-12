<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductDetailController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ShiftController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuDetailController;
use App\Http\Controllers\MenuCategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ReportController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User
Route::resource('users',UserController::class);
Route::get('searchuser/{key}', [UserController::class, 'search']);

// Employee
Route::resource('employees',EmployeeController::class);
Route::get('searchemployee/{key}', [EmployeeController::class, 'search']);

// Product
Route::resource('products',ProductController::class);

// Detail Product
Route::resource('productdetails',ProductDetailController::class);

// Booking
Route::resource('bookings',BookingController::class);

// Shift
Route::resource('shifts',ShiftController::class);

// Menu
Route::resource('menus',MenuController::class);

// Menu Detail
Route::resource('menudetails',MenuDetailController::class);

// Menu Category
Route::resource('menucategories',MenuCategoryController::class);

// Order
Route::resource('orders',OrderController::class);

// Order Item
Route::resource('orderitems',OrderItemController::class);

// Inventory
Route::resource('inventories',InventoryController::class);

// Sales
Route::resource('sales',SaleController::class);

// Report
Route::resource('reports',ReportController::class);
