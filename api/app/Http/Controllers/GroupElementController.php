<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GroupElement;

class GroupElementController extends Controller
{
    public function show_all()
    {
        $groupElems = GroupElement::all();
        return $groupElems;
    }
}
