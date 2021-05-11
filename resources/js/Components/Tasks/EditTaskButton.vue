<template>
    <div>
        <button type="button" class="bg-gray-300 py-2 px-4 rounded mr-4" @click="openModal">
            Edit
        </button>
        <portal>
            <edit-task-modal :isModalOpened="isModalOpened" @close="closeModal" :task="task"/>
        </portal>
    </div>
</template>

<script>
    import EditTaskModal from "@/Components/Tasks/EditTaskModal";
    import { Portal } from "@linusborg/vue-simple-portal";

    export default {
        props: ['task'],
        components: {
            Portal,
            EditTaskModal
        },
        data() {
            return {
                isModalOpened: false
            }
        },
        methods: {
            openModal() {
                this.isModalOpened = true;
            },
            closeModal() {
                this.isModalOpened = false;
            }
        }
    }
</script>
