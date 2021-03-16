<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function getStatusAttribute() {
        // todo - cache statuses list
        return DB::table('dic_task_statuses')
                ->select('status')
                ->where('id', '=', $this->status);
    }

    public function getVisibilityAttribute() {
        // todo - cache visibilities list
        return DB::table('dic_task_visibilities')
                ->select('visibility')
                ->where('id', '=', $this->visibility);
    }

    public function getDueDateAttribute($value) {
        return date('M j, Y', strtotime($value));
    }
}
