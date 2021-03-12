<template>
    <div>
        Here comes the dashboard of {{ user.nickname }}.
        <inertia-link type="button" href="/logout" method="post" class="p-4 bg-gray-200">Logout</inertia-link>
    </div>
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
