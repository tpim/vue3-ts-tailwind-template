<template>
  <div class="flex">
    <div class="flex-none bg-gray-200 w-14 h-14">01</div>
    <div class="flex-initial bg-red-200 w-64 ...">02</div>
    <div class="flex-initial bg-blue-200 w-32 ...">03</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { ILoading, IToast } from "@/common/mount.ts"
import { useUserStore } from "@/store/user.ts"

const userStore = useUserStore()
onMounted(() => {
  IToast({ msg: userStore.name, duration: 30000 })
  // ILoading.start()
})
</script>
