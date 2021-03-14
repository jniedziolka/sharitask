<template>
    <header class="bg-gray-100 p-6 flex justify-between items-center">
        <div class="text-2xl text-gray-700">
            ShariTask
        </div>
        <nav>

        </nav>
        <div class="">
            <button type="button" class="bg-gray-400 py-2 px-4 rounded mr-4">Create New Task</button>
            <inertia-link type="button" href="/logout" method="post" v-if="user" class="bg-gray-200 py-2 px-4 rounded">Logout</inertia-link>
        </div>
    </header>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$page.props.user;
            }
        },
    }
</script>
