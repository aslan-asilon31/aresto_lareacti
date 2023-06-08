<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->boolean('catering')->default(false);
            $table->boolean('private_event')->default(false);
            $table->boolean('delivery')->default(false);
            $table->boolean('takeout')->default(false);
            $table->boolean('reservation')->default(false);
            $table->boolean('waitlist')->default(false);
            $table->boolean('gift_card')->default(false);
            $table->boolean('loyalty_program')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
