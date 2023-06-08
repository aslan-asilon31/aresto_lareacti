<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/user', function () {
    return Inertia::render('User/User');
})->middleware(['auth', 'verified'])->name('user');


Route::get('/products', function () {
    return Inertia::render('Product/Product');
})->middleware(['auth', 'verified'])->name('product');


Route::get('/employees', function () {
    return Inertia::render('Employee/Employee');
})->middleware(['auth', 'verified'])->name('employee');


// Route::resource('employees', [EmployeeController::class])->middleware(['auth', 'verified']);
Route::get('/employees/create', function () {
    return Inertia::render('Employee/EmployeeAdd');
})->middleware(['auth', 'verified'])->name('employee-create');


Route::get('/bookings', function () {
    return Inertia::render('Booking/Booking');
})->middleware(['auth', 'verified'])->name('bookings');



Route::get('/shifts', function () {
    return Inertia::render('Shift/Shift');
})->middleware(['auth', 'verified'])->name('shifts');



Route::get('/menus', function () {
    return Inertia::render('Menu/Menu');
})->middleware(['auth', 'verified'])->name('menus');


Route::get('/orders', function () {
    return Inertia::render('Order/Order');
})->middleware(['auth', 'verified'])->name('orders');



Route::get('/orderitems', function () {
    return Inertia::render('OrderItem/OrderItem');
})->middleware(['auth', 'verified'])->name('orderitems');



Route::get('/inventories', function () {
    return Inertia::render('Inventory/Inventory');
})->middleware(['auth', 'verified'])->name('Invetories');

Route::get('/sales', function () {
    return Inertia::render('Sales/Sales');
})->middleware(['auth', 'verified'])->name('Sales');


Route::get('/reports', function () {
    return Inertia::render('Report/Report');
})->middleware(['auth', 'verified'])->name('Reports');




require __DIR__.'/auth.php';
