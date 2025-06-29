<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create_contact (Request $request) {
        if ($request["username"] && $request["email"] && $request["phone"] && $request["company"] && $request["user_id"]) {
            $this->contact_data = [
                "username" => $request["username"],
                "email" => $request["email"],
                "phone" => $request["phone"],
                "company" => $request["company"],
                "user_id" => $request["user_id"]
            ];

            $contact = new Contact();
            $contact->set_new_contact($this->contact_data);
        }
    }
}
