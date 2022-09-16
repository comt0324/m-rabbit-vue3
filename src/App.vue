<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="layout">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
