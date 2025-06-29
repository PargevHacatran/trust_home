<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApartmentsImage extends Model
{
    use HasFactory;

    protected $table = 'apartmentsimages';

    protected $fillable = [
        'photo1',
        'photo2',
        'photo3',
        'photo4',
        'photo5',
        'photo6',
        'photo7',
        'photo8',
        'photo9',
        'photo10',
    ];

    public function apartment()
    {
        return $this->hasMany(Apartment::class, 'apartmentsimg_id');
    }
}