<template>
    <div>
        <button type="button" class="bg-gray-400 py-2 px-4 rounded mr-4" @click="openModal">
            Create Task
        </button>
        <portal>
            <new-task-modal :isModalOpened="isModalOpened" @close="closeModal"/>
        </portal>
    </div>
</template>

<script>
    import NewTaskModal from "@/Components/Tasks/NewTaskModal";
    import { Portal } from "@linusborg/vue-simple-portal";

    export default {
        components: {
            Portal,
            NewTaskModal
        },
        data() {
            return {
                isModalOpened: false
            }
        },
        methods: {
            openModal() {
                this.isModalOpened = true
            },
            closeModal() {
                this.isModalOpened = false
            }
        }
    }
</script>
