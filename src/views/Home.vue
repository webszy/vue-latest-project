<template>
    <skeleton :loading="loading">{{store.title}}</skeleton>
</template>

<script setup lang="ts">
import { Skeleton } from '@varlet/ui'
import {ref} from 'vue'
import useStore  from '@/store'
const store = useStore()
const loading = ref(true)
setTimeout(()=>{
  loading.value = false
},5000)
</script>

<style scoped>

</style>
