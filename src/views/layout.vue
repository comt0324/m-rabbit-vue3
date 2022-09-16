<template>
  <div class="layout">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tabbar />
  </div>
</template>

<script>
export default {
  name: "layout",
}
</script>

<script setup>
import Tabbar from "@/components/tabbar/tabbar.vue"
</script>

<style scoped></style>
