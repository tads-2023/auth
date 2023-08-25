<script setup>
import { onBeforeMount, ref } from 'vue';
import { useFetch } from '../composables/fetch';
const user = ref({});

onBeforeMount(() => {
  useFetch(
    "http://localhost:3000/users/me",
    'GET',
    {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("access-token")}` 
    },
    undefined,
    (response, error) => {
      if(response)
        user.value = response;
    }
  )
})

</script>

<template>
  <main>
    <h1>Personal info</h1>
    <p>Basic info, like your name and photo</p>

    <div>
      <div>
        <h2>Profile</h2>
        <p>Some info may be visible to other people</p>
        <button>Edit</button>
      </div>
      <div>
        <span>PHOTO: </span>
        <img :src="user.avatar" alt="Avatar">
      </div>
      <div>
        <span>NAME: </span>
        <span class="value">{{ user.name }}</span>
      </div>
      <div>
        <span>BIO: </span>
        <span class="value">{{ user.bio }}</span>
      </div>
      <div>
        <span>PHONE: </span>
        <span class="value">{{ user.phone }}</span>
      </div>
      <div>
        <span>EMAIL</span>
        <span class="value">{{ user.email }}</span>
      </div>
    </div>
  </main>
</template>