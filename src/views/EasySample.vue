<script setup>
import { ref } from 'vue'
import EasyHeader from '@/components/EasyHeader.vue'
import EasyCard from '@/components/EasyCard.vue'
import EasyFooter from '@/components/EasyFooter.vue'
import MyCard from '@/components/MyCard.vue'

const data = ref({
  title: '這是一張卡片',
  content:
    'Lorem ipsum dolor sit amet, wisi perfecto invenire sed ei, ea quod inciderint eam. Eu dolor legimus necessitatibus nam, ne quo civibus signiferumque. Ex partem prompta iracundia sea, eum erat minim efficiantur at. Ei vel noster viderer gubergren, mea falli urbanitas id.',
  imgUrl:
    'https://images.unsplash.com/photo-1723663758069-f62e8a5db92e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})

const value = ref('這是外層單向數據流的文字')

const editTitle = (newTitle) => {
  console.log('editTitle', newTitle)
  data.value.title = newTitle
}
</script>

<template>
  <!-- 不要拆元件 -->
  <div class="container">
    <EasyHeader />

    <div class="col-4">
      <!-- props 前內後外 -->
      <!-- 實戰通常會使用同名 -->
      <MyCard v-bind:inner-data="data" :value="value" @emit-title="editTitle" />
    </div>

    <div class="row g-4">
      <div class="col-4" v-for="i in 10" :key="i">
        <EasyCard />
      </div>
      <EasyFooter />
    </div>
  </div>
</template>
