<script setup>
import BadHeader from '@/components/BadHeader.vue'
import BadCard from '@/components/BadCard.vue'
import BadFooter from '@/components/BadFooter.vue'
</script>

<template>
  <div class="container">
    <h1>很難學的範例</h1>
    <BadHeader></BadHeader>
    <div class="row">
      <div class="col-4" v-for="i in 10" :key="i">
        <BadCard></BadCard>
      </div>
    </div>
    <BadFooter></BadFooter>
  </div>
</template>
