<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ["username", "email", "phone", "company", "user_id"];

    public function set_new_contact ($contact_data) {
        $newContact = [];

        foreach ($this->fillable as $col) {
            $newContact->$attribute = $contact_data[$attribute];
        }

        DB::table('contacts')->insert($newContact);
    }

    // public function get_all_user_contacts ($user_id) {
    //     $user_contacts = DB::table("contacts")->where("user_id", $user_id);
        
    //     return $
    // }

    // public

}
