<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'bookings';

    protected $keyType = 'string';

    public $primaryKey = 'id';

    protected $fillable = [
        'reservation_form',
        'booking_time',
        'guest_number',
        'special_request',
        'confirmation_message',
        'cancellation_policy',
        'contact_information',
        'payment_information',
    ];
}
