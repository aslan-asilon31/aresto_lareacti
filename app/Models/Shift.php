<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    use HasFactory;

    protected $table = 'shifts';

    protected $keyType = 'string';

    public $primaryKey = 'id';

    protected $fillable = [
        'employee_di',
        'start_time',
        'end_time',
    ];
}
