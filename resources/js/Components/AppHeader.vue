<template>
    <header class="bg-gray-100 p-6 flex justify-between items-center">
        <div class="text-2xl text-gray-700">
            ShariTask
        </div>
        <nav>

        </nav>
        <div class="flex">
            <new-task-button />
            <inertia-link as="button" type="button" href="/logout" method="post" v-if="user" class="bg-gray-200 py-2 px-4 rounded">Logout</inertia-link>
        </div>
    </header>
</template>

<script>
    import NewTaskButton from "@/Components/Tasks/NewTaskButton";

    export default {
        components: {
          NewTaskButton
        },
        computed: {
            user() {
                return this.$page.props.user;
            }
        },
    }
</script>
