<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Auth;

class CheckController extends Controller
{
    public function check(Request $request){
        return response()->json('success');
    }
}
