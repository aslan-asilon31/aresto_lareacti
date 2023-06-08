<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\About::create(
            [
                'history' => 'Our company was founded in 1995',
                'mission_statement' => 'Our mission is to provide high-quality',
                'culiniary_philosophy' => 'At our restaurant, we believe that food',
                'chef_bio' => 'Our head chef has over 20 years of experience',
                'team_member' => 'Our team consists of passionate individuals',
                'award' => 'We are proud to have won several awards',
                'press_coverage' => 'Our restaurant has been featured in several',
                'community_involvement' => 'We are committed to giving back to our local community'
            ],
        );


    }
}
