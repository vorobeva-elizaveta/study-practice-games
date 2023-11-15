<script setup>
import { ref } from 'vue'

let minValue = ref(1),
  maxValue = ref(100),
  generatedNumber = ref(0)

const getRandomNumber = () => {
  let min = Math.ceil(minValue.value)
  let max = Math.floor(maxValue.value)
  generatedNumber.value = Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}
</script>

<template>
  <div class="generator-page">
    <h1>Случайное число:</h1>
    <span class="generator-page__generated-number">{{ generatedNumber }}</span>
    <div class="generator-page__inputs">
      <label>
        От:
        <base-input class="max-w-[100px] w-fit text-center" v-model="minValue" />
      </label>
      <label>
        До:
        <base-input class="max-w-[100px] w-fit text-center" v-model="maxValue" />
      </label>
    </div>
    <base-button class="block w-fit" type="primary" @click="getRandomNumber">
      Сгенерировать
    </base-button>
  </div>
</template>

<style lang="scss">
.generator-page {
  @apply flex flex-col items-center w-full gap-3;
  &__generated-number {
    @apply block p-3 w-fit border border-solid border-gray-400 rounded font-semibold text-3xl;
  }

  &__inputs {
    @apply flex items-center gap-3;
  }
}
</style>
