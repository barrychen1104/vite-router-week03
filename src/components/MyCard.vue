<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['inner-data', 'value'])
console.log(props)

const emit = defineEmits(['emitTitle'])
const emitOuterTitle = () => {
  console.log('內層觸發Emit')
  emit('emitTitle', '內層要修改外層的資料')
}
</script>

<template>
  <div class="card">
    <img class="card-img-top" :src="innerData.imgUrl" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ innerData.title }}</h5>
      <p class="card-text">
        {{ innerData.content }}
      </p>
      <input type="text" v-model="innerData.title" />
      <a href="#" class="btn btn-primary" @click="emitOuterTitle">Go somewhere</a><br />
      <a href="#" @click.prevent="emit('emitTitle', innerData.title)">傳遞事件</a>
    </div>
  </div>
</template>
