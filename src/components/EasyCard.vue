<script setup>
import { ref } from 'vue'

const imgUrl = ref(
  'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
)

const num = ref(1)
const add = () => {
  num.value++
}
</script>

<template>
  <div class="card">
    <img :src="imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title {{ num }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="#" class="btn btn-primary" @click.prevent="add">Go somewhere</a>
    </div>
  </div>
</template>
