<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OurTeam;

class OurTeamController extends Controller
{
    public function index()
    {
        return OurTeam::all();
    }
}
