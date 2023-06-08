<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;

class SupplierOrderController extends Controller
{
    public function index()
    {
        return Supplier::all();
    }
}
