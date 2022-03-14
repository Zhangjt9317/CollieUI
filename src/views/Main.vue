<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ title }}</h1>
        <p>This is the main page.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

onMounted(() => {
  console.log("mounted ");
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
