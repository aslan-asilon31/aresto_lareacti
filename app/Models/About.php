<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    
    protected $table = 'abouts';

    protected $keyType = 'string';

    public $primaryKey = 'id';

    protected $fillable = [
        'history',
        'mission_statement',
        'culiniary_philosophy',
        'chef_bio',
        'team_member',
        'award',
        'press_coverage',
        'community_involvement',
    ];
}
