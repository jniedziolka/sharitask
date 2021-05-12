<template>
    <div class="p-6 grid grid-cols-4 gap-4">
        <task
            v-for="(task, index) in tasks"
            :title="task.title"
            :description="task.description"
            :due_date="task.due_date"
            :status="task.status"
            :id="task.id"
            :key="task.id"
        />
    </div>
</template>

<script>
    import Task from '@/Components/Tasks/Task';

    export default {
        mounted() {
            this.$store.dispatch('fetchTasks');
            this.$store.dispatch('fetchTaskStatuses');
            this.$store.dispatch('fetchTaskVisibilities');
        },
        components: {
            Task
        },
        computed: {
            tasks() {
                return this.$store.state.task.tasks;
            }
        },
    }
</script>
