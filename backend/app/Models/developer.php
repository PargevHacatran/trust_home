<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    use HasFactory;

    protected $table = 'developers';

    protected $fillable = [
        'developer_name',
        'developer_stars',
        'deals_count',
    ];

    public function apartments()
    {
        return $this->hasMany(Apartment::class);
    }
}