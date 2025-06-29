<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use HasFactory;

    protected $table = 'apartments';

    protected $fillable = [
        'price',
        'rooms_count',
        'square_meters',
        'address',
        'current_floor',
        'floors_count',
        'builded_year',
        'has_parking',
        'has_lift',
        'has_gym',
        'description',
        'verified_status',
        'apartmentsimg_id',
        'developer_id',
    ];

    protected $casts = [
        'has_parking' => 'boolean',
        'has_lift' => 'boolean',
        'has_gym' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function images()
    {
        return $this->belongsTo(ApartmentsImage::class, 'apartmentsimg_id');
    }

    public function developer()
    {
        return $this->belongsTo(Developer::class, 'developer_id');
    }
}