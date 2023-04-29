<template>
    <div class=" h-[100vh] flex justify-center items-center flex-col">
        <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email" >
                    email
                </label>
                <input v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="form.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password">
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import store from "@/store/auth";

export default {
    name: "LoginView",
    components: {},
    data() {
        return {
            form: {email:null,password:null}
        }
    },
    methods: {
        login() {
            this.$vs.loading({})
            store.dispatch('login', this.form)
                .then(() => {
                    this.$vs.loading.close();
                    this.$vs.notify({title:'Success',text:'login successful',color:'success'});
                    this.$router.push('/profile');
                })
                .catch(error => {
                    this.$vs.loading.close();
                    this.$vs.notify({title:'Sign in unsuccessful',text:error,color:'danger'});
                });
        }
    },
}
</script>

<style scoped>

</style>