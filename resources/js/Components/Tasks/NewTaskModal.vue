<template>
    <div v-show="isModalOpened" class="absolute h-screen w-full bg-gray-900 bg-opacity-50 top-0 flex justify-center items-center" @focus="$emit('close')" tabindex="0">
        <div class="relative container max-w-xl bg-gray-200 flex flex-col items-center py-8 rounded focus:outline-none" tabindex="0">
            <span class="absolute top-2 right-5 cursor-pointer" @click="$emit('close')">&#10005;</span>
            <form class="w-3/4" @submit.prevent="submit">
                <div class="flex flex-col mb-6">
                    <label for="title">Title</label>
                    <input id="title" v-model="form.title" type="text" class="border-gray-300 text-gray-700 rounded shadow focus:ring-2 focus:ring-gray-500 focus:border-transparent"/>
                </div>
                <div class="flex flex-col mb-6">
                    <label for="description">Description</label>
                    <textarea id="description" v-model="form.description" class="border-gray-300 text-gray-700 rounded shadow focus:ring-2 focus:ring-gray-500 focus:border-transparent"></textarea>
                </div>
                <div class="flex flex-col mb-6">
                    <label for="visibility">Visibility</label>
                    <select id="visibility" v-model="form.visibility" class="border-gray-300 text-gray-700 rounded shadow focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                        <option value="0" class="hover:bg-gray-100">Private</option>
                        <option value="1">Public</option>
                    </select>
                </div>
                <div class="flex flex-col mb-6">
                    <label for="date">Date</label>
                    <input id="date" v-model="form.date" type="date" class="border-gray-300 text-gray-700 rounded shadow focus:ring-2 focus:ring-gray-500 focus:border-transparent" />
                </div>
                <button type="submit" class="bg-gray-500 text-gray-100 p-2 rounded">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['isModalOpened'],
        data() {
            return {
                form: {
                    title: null,
                    description: null,
                    visibility: null,
                    date: null
                }
            }
        },
        methods: {
            submit() {
                this.$inertia.post('/task', this.form)
            }
        }
    }
</script>
