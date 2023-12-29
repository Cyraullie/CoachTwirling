<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Level;

class LevelController extends Controller
{
    public function show_all(Request $request, $group_elements_id)
    {
        $levels = Level::where("group_elements_id", $group_elements_id)->get();
        return $levels;
    }
}
