<template>
  <main>
    <div>welcome, this is the homeview</div>
  </main>
</template>
<script setup>
import { onMounted, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

onMounted(() => {
  proxy.$message.success({
    message: "this is brain cell",
  });
});
</script>
<style lang="scss" scoped></style>
