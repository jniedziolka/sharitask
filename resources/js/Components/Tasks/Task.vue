<template>
    <div class="bg-gray-200 rounded p-4">
        <div class="flex justify-between">
            <h2 class="text-3xl text-gray-800 mb-1">{{ title }}</h2>
            <span class="text-gray-400">{{ due_date }}</span>
        </div>
        <span class="text-sm block mb-4 text-gray-400">Private</span>
        <span class="text-xl text-gray-500">{{ description }}</span>
        <div class="flex justify-between mt-20">
            <inertia-link @mouseover="hover = true"
                          @mouseleave="hover = false"
                          href="/"
                          type="button"
                          as="button"
                          class="py-2 px-4 rounded text-white" :class="statusStyle">
                {{ statusText }}
            </inertia-link>
            <div class="flex">
                <edit-task-button :task="task"></edit-task-button>
                <button @click="handleTaskDelete" type="button" class="text-gray-800">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import EditTaskButton from '@/Components/Tasks/EditTaskButton';
    import route from 'ziggy';

    export default {
        props: ['title', 'description', 'due_date', 'status', 'visibility', 'id'],
        components: {
          EditTaskButton
        },
        data() {
            return {
                hover: false
            }
        },
        methods: {
            handleTaskDelete() {
                this.$store.dispatch('deleteTask', {
                    id: this.id
                });
            }
        },
        computed: {
            statusText() {
                switch(this.status) {
                    case 'Uncompleted':
                        return this.hover ? 'Complete' : 'Uncompleted';
                    case 'Completed':
                        return this.hover ? 'Uncomplete' : 'Completed';
                    default:
                        return 'Unknown';
                }
            },
            statusStyle() {
                switch(this.status) {
                    case 'Uncompleted':
                        return this.hover ? 'bg-green-400' : 'bg-red-400';
                    case 'Completed':
                        return this.hover ? 'bg-red-400' : 'bg-green-400';
                    default:
                        return 'bg-gray-400';
                }
            },
            task() {
                return {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    status: this.status,
                    visibility: this.visibility,
                    due_date: this.due_date
                }
            }
        }
    }
</script>
