<script setup>
defineProps({
  type: String
})
</script>

<template>
  <button class="base-button" :class="type">
    <slot />
  </button>
</template>

<style lang="scss">
.base-button {
  padding: 8px 12px;
  @apply rounded;

  &.primary {
    @apply bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700;
  }
}
</style>
