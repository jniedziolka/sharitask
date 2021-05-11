<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function store(Request $request) {
        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->visibility = $request->visibility;
        $task->status = 1;
        $task->due_date = $request->date;
        $task->user_id = Auth::user()->id;

        $task->save();

        return response()->json(json_encode($task));
    }

    public function update(Request $request) {
        $task = Task::find($request->id);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->save();

        return response()->json(json_encode($task));
    }

    public function destroy(Request $request) {
        $task = Task::find($request->id);
        $task->delete();
        return response('ok');
    }

    public function getJsonTasks(Request $request) {
        $tasks = Auth::user()->tasks;
        return json_encode($tasks);
    }

    public function getTaskStatuses(Request $request) {
        $taskStatuses = DB::table('dic_task_statuses')->get();
        return json_encode($taskStatuses);
    }

    public function getTaskVisibilities(Request $request) {
        $taskVisibilities = DB::table('dic_task_visibilities')->get();
        return json_encode($taskVisibilities);
    }
}
