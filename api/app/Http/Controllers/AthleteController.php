<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Athlete;

class AthleteController extends Controller
{
    public function show_all()
    {
        $athletes = Athlete::all();
        return $athletes;
    }

    
    public function store(Request $request)
    {
        try {
            $athlete = new Athlete();
            $athlete->firstname = $request->input("firstname");
            $athlete->group_athlete_id1 = $request->input("group1");
            $athlete->group_athlete_id2 = $request->input("group2");
            $athlete->save();

            return response("Ok", 200);
        } catch (\Exception $e) {
            return response('Bad request:' . $e->getMessage(), 400);
        }
    }

}
