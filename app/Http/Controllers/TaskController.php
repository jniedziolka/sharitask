<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function store(Request $request) {
        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->visibility = $request->visibility;
        $task->status = 0;
        $task->due_date = $request->date;
        $task->user_id = Auth::user()->id;

        $task->save();

        return response()->json(json_encode($task));
    }

    public function destroy(Request $request) {
        $task = Task::find($request->id);
        $task->delete();
    }

    public function getJsonTasks(Request $request) {
        $tasks = Auth::user()->tasks;
        return json_encode($tasks);
    }
}
