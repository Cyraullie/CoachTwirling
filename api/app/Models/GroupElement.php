<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GroupElement extends Model
{
    protected $fillable = ['name', 'link'];

    public function levels()
    {
        return $this->hasMany(Level::class);
    }
}