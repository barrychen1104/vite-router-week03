<script setup>
import EasyHeader from '@/components/EasyHeader.vue'
import EasyCard from '@/components/EasyCard.vue'
import EasyFooter from '@/components/EasyFooter.vue'
</script>

<template>
  <!-- 不要拆元件 -->
  <div class="container">
    <EasyHeader />
    <div class="row g-4">
      <div class="col-4" v-for="i in 10" :key="i">
        <EasyCard />
      </div>
      <EasyFooter />
    </div>
  </div>
</template>
