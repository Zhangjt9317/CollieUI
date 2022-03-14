<template>
  <button :class="['co-btn', classes]" :disabled="disabled" @click="onClick()">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "default" },
  disabled: { type: Boolean, default: false },
});

const classes = computed(() => ({
  "is-disabled": props.disabled,
  [`co-btn-${props.type}`]: !!props.type,
}));

const onClick = (e) => {
  if (props.disabled && e instanceof Event) {
    e.preventDefault();
    e.stopPropagation();
  }
};
</script>
