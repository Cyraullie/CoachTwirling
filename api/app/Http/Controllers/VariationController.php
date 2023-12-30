<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Variation;
use App\Models\Athlete;
use App\Models\GroupAthlete;
use App\Models\StateElement;
use App\Models\Element;

class VariationController extends Controller
{
    public function show_all(Request $request, $group_elements_id, $levels_id, $elements_id)
    {
        $array = [];
        $array[0] = Variation::where("element_id", $elements_id)->get();
        $array[1] = Athlete::with("stateElements")->get();
        $array[2] = GroupAthlete::all();
        $array[3] = Element::find($elements_id);

        return $array;
    }
}

