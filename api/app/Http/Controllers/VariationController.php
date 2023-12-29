<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Variation;
use App\Models\Athlete;
use App\Models\GroupAthlete;
use App\Models\StateElement;

class VariationController extends Controller
{
    public function show_all(Request $request, $group_elements_id, $levels_id, $elements_id)
    {
        $array = [];
        $array[0] = Variation::where("element_id", $elements_id)->get();
        $array[1] = Athlete::with("groupAthlete1", "groupAthlete2")->get();

        $athlete = Athlete::find(6);
        $test = $athlete->stateElements;
       




        



        return $test;
    }
}

