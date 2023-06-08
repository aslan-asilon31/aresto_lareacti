<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employee::create([
            'image'	=> 'img1.jpg',
            'name'	=> 'aslanchef1',
            'email'	=> 'aslanchef1@gmail.com',
            'phone'	=> '082294938475',
            'password'	=> md5('aslanchef1'),
            'role'	=> 'chef',
        ]);
        
        Employee::create([
            'image'	=> 'img2.jpg',
            'name'	=> 'aslanchef2',
            'email'	=> 'aslanchef2@gmail.com',
            'phone'	=> '082294938475',
            'password'	=> md5('aslanchef2'),
            'role'	=> 'chef',
        ]);
    }
}
