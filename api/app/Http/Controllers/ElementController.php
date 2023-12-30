<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Element;

class ElementController extends Controller
{
    public function show_all(Request $request, $group_elements_id, $levels_id)
    {
        $elements = Element::where("level_id", $levels_id)->get();
        return $elements;
    }
}
