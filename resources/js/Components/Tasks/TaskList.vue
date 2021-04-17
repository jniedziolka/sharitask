<template>
    <div class="p-6 grid grid-cols-4 gap-4">
        <task
            v-for="(task, index) in tasks"
            :title="task.title"
            :due_date="task.due_date"
            :key="task.id"
        />
    </div>
</template>

<script>
    import Task from '@/Components/Tasks/Task';

    export default {
        mounted() {
            this.$store.dispatch('fetchTasks');
        },
        components: {
            Task
        },
        computed: {
            tasks() {
                return this.$store.state.task.tasks;
            }
        }
    }
</script>
