<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use App\Models\ApartmentsImage;
use App\Models\Developer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $apartments = Apartment::with(['images', 'developer'])->get();
        return response()->json($apartments);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'price' => 'required|integer',
            'rooms_count' => 'required|integer',
            'square_meters' => 'required|integer',
            'address' => 'required|string',
            'current_floor' => 'required|integer',
            'floors_count' => 'required|integer',
            'builded_year' => 'required|integer',
            'has_parking' => 'boolean',
            'has_lift' => 'boolean',
            'has_gym' => 'boolean',
            'description' => 'nullable|string',
            'verified_status' => 'nullable|string',
            'apartmentsimg_id' => 'nullable|exists:apartmentsimages,id',
            'developer_id' => 'nullable|exists:developers,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $apartment = Apartment::create($validator->validated());

        return response()->json([
            'message' => 'Apartment created successfully',
            'data' => $apartment
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $apartment = Apartment::with(['images', 'developer'])->find($id);
        
        if (!$apartment) {
            return response()->json(['message' => 'Apartment not found'], 404);
        }

        return response()->json($apartment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $apartment = Apartment::find($id);
        
        if (!$apartment) {
            return response()->json(['message' => 'Apartment not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'price' => 'sometimes|integer',
            'rooms_count' => 'sometimes|integer',
            'square_meters' => 'sometimes|integer',
            'address' => 'sometimes|string',
            'current_floor' => 'sometimes|integer',
            'floors_count' => 'sometimes|integer',
            'builded_year' => 'sometimes|integer',
            'has_parking' => 'sometimes|boolean',
            'has_lift' => 'sometimes|boolean',
            'has_gym' => 'sometimes|boolean',
            'description' => 'nullable|string',
            'verified_status' => 'nullable|string',
            'apartmentsimg_id' => 'nullable|exists:apartmentsimages,id',
            'developer_id' => 'nullable|exists:developers,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $apartment->update($validator->validated());

        return response()->json([
            'message' => 'Apartment updated successfully',
            'data' => $apartment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $apartment = Apartment::find($id);
        
        if (!$apartment) {
            return response()->json(['message' => 'Apartment not found'], 404);
        }

        $apartment->delete();

        return response()->json(['message' => 'Apartment deleted successfully']);
    }
}