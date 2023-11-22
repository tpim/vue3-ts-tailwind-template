<script setup lang="ts">
import { onMounted } from "vue"

const name = "demo"

onMounted(() => {
  console.log(name)
})
</script>
<template>
  <div class="container mx-auto bg-gray-200">
    <p class="mb-5 text-3xl font-bold text-center text-gray-700">Welcome!</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
