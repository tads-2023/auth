<script setup>
import { onBeforeMount, ref } from 'vue';
import { useFetch } from '../composables/fetch';
const user = ref({});
const inputFile = ref(null);

const handlePreviewClick = () => {
  inputFile.value.click();
}

const previewImage = () => {
  if (inputFile.value.files) {
    var reader = new FileReader();
    reader.onload = (e) => {
      user.value.avatar = e.target.result;
    }
    reader.readAsDataURL(inputFile.value.files[0]);
  }
}

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
    <h1>Change Info</h1>
    <p>Changes will be reflected to every services</p>

    <div>
      <div>
        <h2>Profile</h2>
        <p>Some info may be visible to other people</p>
      </div>
      <form>
        <div>
          <span>PHOTO: </span>
          <input ref="inputFile" @change="previewImage" type="file" name="avatar" style="display: none;">
          <img @click="handlePreviewClick" :src="user.avatar" alt="Avatar">
        </div>
        <div>
          <span>NAME: </span>
          <input type="text" name="name" v-model="user.name">
        </div>
        <div>
          <span>BIO: </span>
          <input type="text" name="bio" v-model="user.bio">
        </div>
        <div>
          <span>PHONE: </span>
          <input type="text" name="phone" v-model="user.phone">
        </div>
        <div>
          <span>EMAIL</span>
          <input type="text" name="email" v-model="user.email">
        </div>
        <div>
          <span>PASSWORD</span>
          <input type="password" name="password" v-model="user.password">
        </div>
        
        <button>Save</button>
      </form>
    </div>
  </main>
</template>