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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->integer('table_number');
            $table->decimal('order_total', 8, 2);
            $table->decimal('discount', 8, 2)->nullable();
            $table->decimal('tax', 8, 2);
            $table->string('payment_type');
            $table->decimal('payment_amount', 8, 2);
            $table->decimal('change_due', 8, 2)->nullable();
            $table->string('status')->default('unpaid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
