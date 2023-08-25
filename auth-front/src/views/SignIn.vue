<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { useFetch } from '../composables/fetch';

const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  useFetch(
    "http://localhost:3000/users/sign-in",
    'POST',
    {
      "Content-Type": "application/json",
    },
    {
      email: email.value,
      password: password.value
    },
    (response, error) => {
      if(response) {
        sessionStorage.setItem("access-token", response.accessToken)
        router.push("/profile");
      }
    }
  )
}
</script>

<template>
  <main>
    <h1>Join thousands of learners from around the world</h1>
    <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>

    <form @submit.prevent="handleSubmit">
      <div>
        <input v-model="email" type="text" name="email">
      </div>
      <div>
        <input v-model="password" type="password" name="senha">
      </div>

      <button>Start coding now </button>
    </form>

    <p>or continue with these social profile</p>

  </main>
</template>