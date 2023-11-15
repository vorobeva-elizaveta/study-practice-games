<script setup>
defineProps({
  modelValue: [String, Number]
})

const onChangeInputValue = (val) => {
  emit('update:modelValue', val)
}

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    class="base-input"
    @change="(event) => onChangeInputValue(event.target.value)"
  />
</template>

<style lang="scss">
.base-input {
  @apply px-3 py-2 border border-solid border-gray-400 rounded;
}
</style>
